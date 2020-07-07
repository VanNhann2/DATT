import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'
import {Router} from "@angular/router"
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
      username = ""
      constructor(private UserService : UserService, private router: Router) {
          // this.UserService.getUser().subscribe(
          //   res => {
          //     this.username = res.username
          //     localStorage.setItem('user_id',res.user_id)
          //   },
          //   err => this.router.navigate(['login'])
          // )
       }

    ngOnInit() {
        console.log(1)
    }

}
