import { Component, OnInit } from '@angular/core';
import { PitchService } from '../../service/pitch.service'
import { UserService } from '../../service/user.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-listpitch',
  templateUrl: './listpitch.component.html',
  styleUrls: ['./listpitch.component.scss']
})
export class ListpitchComponent implements OnInit {

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
