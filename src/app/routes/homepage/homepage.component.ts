import { Component, OnInit } from '@angular/core';
import { PitchService } from '../../service/pitch.service'
import { UserService } from '../../service/user.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

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
  }

}
