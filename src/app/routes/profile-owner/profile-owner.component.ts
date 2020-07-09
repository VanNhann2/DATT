import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../service/file.service'
import { UserService } from '../../service/user.service'
import {DomSanitizer} from '@angular/platform-browser';
import { ToasterService, ToasterConfig } from 'angular2-toaster';


@Component({
  selector: 'app-profile-owner',
  templateUrl: './profile-owner.component.html',
  styleUrls: ['./profile-owner.component.scss']
})
export class ProfileOwnerComponent implements OnInit {

  toaster: any;
  toasterConfig: any;
  toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right',
    showCloseButton: true
  });

  name: string;
  image
  profileUser = {
    firstname: null,
    lastname: null,
    phone: null,
    email: null,  
    avatar: '/assets/img/user/default.jpg'
  }
  
  constructor(private FileService: FileService, private UserService: UserService, private sanitizer:DomSanitizer, private toasterService: ToasterService) {

  }
  sanitizeFunc(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  selectImage($event) {
    const formData = new FormData()
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0]
      this.image = file

      formData.append('file', this.image)
      console.log(formData)
      this.FileService.saveFile(formData).subscribe(
        res => {
          this.profileUser.avatar = res.path
        })
    }
  }

  updateProfile() {
    this.UserService.updateUser(localStorage.getItem('user_id'), this.profileUser).subscribe(
      res => {
        console.log(res)
        this.toasterService.pop('success', 'Cập nhật', 'Cập nhật thành công')
      }
    )
  }

  ngOnInit() {
    this.UserService.getProfileUser().subscribe(
      res => {
        console.log(res)
        this.profileUser = res
      }
    )
  }
}
