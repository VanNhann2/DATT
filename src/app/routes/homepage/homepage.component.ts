import { Component, OnInit ,HostListener, Inject} from '@angular/core';
import { PitchService } from '../../service/pitch.service'
import { UserService } from '../../service/user.service'
import {Router} from "@angular/router"
import { LocationService} from '../../service/location.service'
import { DOCUMENT } from '@angular/common';
import { trigger, state, transition, style, animate } from '@angular/animations';  

// import {PitchService} from '../../service/pitch.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  getCitys  = []
  getDistricts  = []
  username = undefined
  search : any = {
    page : 1,
    page_size:10,
    name:"",
    district: null,
    city:null
  }
    constructor(private PitchService : PitchService, private UserService : UserService, private router: Router, private locationService: LocationService,  @Inject(DOCUMENT) document) {
        this.UserService.getUser().subscribe(
          res => {
            console.log(res)
            this.username = res.username
            console.log(this.username)
          },
          err => this.router.navigate(['login'])
        )
     }

  ngOnInit() {
    this.getCity()
    this.getDistrict()
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
      if (window.pageYOffset > 250) {
        let element = document.getElementById('navbar');
        element.classList.add('sticky');
      } else {
       let element = document.getElementById('navbar');
         element.classList.remove('sticky'); 
      }
   }
  getDistrict(){
    this.locationService.getDistrict({city : "5eaefbe3b822cc8a2df19be4"}).subscribe(
      res => {
        this.getDistricts = res
        // this.getDistricts.unshift([{_id: null, name: "None"}])
        this.search.district = this.getDistricts[0]._id
        console.log(res)
      }, err =>{
        console.log(err)
    })
  }

  changeCity() {
    console.log(this.search.city)
    this.locationService.getDistrict({city: this.search.city}).subscribe(                                                              
      data => {
        this.getDistricts = data
        console.log(data)
      }
    )
  }

  findPitch(){
      this.router.navigate(['search-results'], { queryParams: this.search});
  }

  getCity(){
    this.locationService.getCity().subscribe(
      res => {
        this.getCitys = res
        console.log(this.getCitys)
        this.search.city = this.getCitys[0]._id //set mac dinh dum
        //ra ket qua ko ra rồi.. có rồi.. nhưng thay đổi city bên quận k thay đổi
      }, err =>{
        console.log(err)
    })
  }
}
