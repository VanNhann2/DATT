import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import { UserService } from '../../../service/user.service'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService, private UserService : UserService, private sanitizer:DomSanitizer) {

        this.user = {
            name:"Chủ sân",
            avatar: 'assets/img/user/default.jpg'
        };
    }

    sanitizeFunc(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    ngOnInit() {
        this.UserService.getProfileUser().subscribe(
            res => {
                this.user.name = res.firstname + " " + res.lastname
                this.user.avatar = res.avatar
            }
        )
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
