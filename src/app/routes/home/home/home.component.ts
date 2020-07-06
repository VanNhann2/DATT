import { Component, OnInit } from '@angular/core';
import { PitchService } from '../../../service/pitch.service'
import { UserService } from '../../../service/user.service'
import {Router} from "@angular/router"

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    isAccOpen1 = false;
    isAccOpen2 = false;
    isAccOpen3 = false;
    isAccOpen4 = false;
    isAccOpen5 = false;
    isAccOpen6 = false;

    search : any = {
      page : 1,
      page_size:10,
      name:""
    }

    username = undefined
    constructor(private PitchService : PitchService, private UserService : UserService, private router: Router) {
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
      this.PitchService.findPitch(this.search).subscribe(
        res => {
          console.log(res)
        }
      )
      this.PitchService.getPitch("5e461330bc3dc82a0b7a07c1").subscribe(
        res => {
          console.log(res)
        }
      )
    }
}
