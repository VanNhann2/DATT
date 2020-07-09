import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PitchService } from '../../service/pitch.service'
import { UserService } from '../../service/user.service'
import {Router, ActivatedRoute} from "@angular/router"
import { DOCUMENT } from '@angular/common';
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { LocationService} from '../../service/location.service'
@Component({
  selector: 'app-listpitch',
  templateUrl: './listpitch.component.html',
  styleUrls: ['./listpitch.component.scss']
})
export class ListpitchComponent implements OnInit {
  getCitys  = []
  getDistricts  = []
  bookPitch = []
  username = undefined
  search : any = {
    page : 1,
    page_size:10,
    name: "",
    district: null,
    city:null
  }
  listPitch = {}
   // Datepicker
   bsValue = new Date();
   bsRangeValue: Date[];
   maxDate = new Date();
   bsConfig = {
       containerClass: 'theme-angle'
   }
// nho them nut logout khi dang nhap o trang user nha
    constructor(private PitchService : PitchService, private UserService : UserService, private router: Router, private locationService: LocationService, private route: ActivatedRoute, @Inject(DOCUMENT) document) {
        this.UserService.getUser().subscribe(
          res => {
            console.log(res)
            this.username = res.username
            console.log(this.username)
          },
          err => this.router.navigate(['login'])
        )
         // Datepicker
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
     }
  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.search.name = params.name
        this.search.district = params.district
        this.search.city = params.city
        this.search.page = params.page
        this.search.page_size = params.page_size
        this.findPitch()
        console.log(1, params.name);
      }
    )
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
   buttonName
   toggle(item) {
    item.show = !item.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (item.show)
      this.buttonName = "Show";
    else
      this.buttonName = "Hide";
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

  getCity(){
    this.locationService.getCity().subscribe(
      res => {
        this.getCitys = res
        console.log(this.getCitys)
        this.search.city = this.getCitys[0]._id
      }, err =>{
        console.log(err)
    })
  }
  findPitch(){
    this.PitchService.findPitch(this.search).subscribe(
      data => {
        this.listPitch = data
        console.log(this.listPitch);
        
      }, err =>{
        console.log(err)
    })
  }

  getdataBookPitch(id){
    this.PitchService.getPitchUser(id).subscribe(
      data =>{
        this.bookPitch = data
        console.log(this.bookPitch);
        
      }
    )
  }
}
