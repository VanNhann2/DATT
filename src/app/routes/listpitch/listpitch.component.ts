import { Component, OnInit } from '@angular/core';
import { PitchService } from '../../service/pitch.service'
import { UserService } from '../../service/user.service'
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-listpitch',
  templateUrl: './listpitch.component.html',
  styleUrls: ['./listpitch.component.scss']
})
export class ListpitchComponent implements OnInit {
   // Datepicker
   bsValue = new Date();
   bsRangeValue: Date[];
   maxDate = new Date();
   bsConfig = {
       containerClass: 'theme-angle'
   }
// nho them nut logout khi dang nhap o trang user nha
  username = undefined
    constructor(private PitchService : PitchService, private UserService : UserService, private router: Router, private route: ActivatedRoute) {
        this.UserService.getUser().subscribe(
          res => {
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
        this.PitchService.findPitch(params).subscribe(
          data => {
            if(data){
              console.log(data)
            }else console.log(1)
          }, err =>{
            console.log(err)
        })
      }
    )
  }
  

}
