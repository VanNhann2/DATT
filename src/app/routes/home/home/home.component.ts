import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PitchService } from '../../../service/pitch.service'
import { UserService } from '../../../service/user.service'
import {Router} from "@angular/router"
import { Chart } from 'chart.js';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('canvas', {
      static: true
    }) canvas: ElementRef;
    chart: Chart;

    search : any = {
      page : 1,
      page_size:10,
      name:"",
      district: null,
      city:null
    }
    choosePitch
    pitches
    request = {
      daystart:new Date(),
      dayend:new Date()
    }
    username = undefined
    constructor(private PitchService : PitchService, private UserService : UserService, private router: Router) {
        // this.UserService.getUser().subscribe(
        //   res => {
        //     console.log(res)
        //     this.username = res.username
        //     localStorage.setItem('user_id',res.user_id)
        //     console.log(this.username)
        //   },
        //   err => this.router.navigate(['login'])
        // )
     }

    ngOnInit() {
      this.PitchService.listPitch({user_id :localStorage.getItem('user_id')}).subscribe(
        res => {
            console.log(res)
            this.pitches = res
            this.choosePitch = res[0]._id
        }
    )
    }
}
