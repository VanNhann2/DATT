import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../service/file.service'
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-profile-owner',
  templateUrl: './profile-owner.component.html',
  styleUrls: ['./profile-owner.component.scss']
})
export class ProfileOwnerComponent implements OnInit {

  name: string;
  image
  avatar
  profileUser = {
    firstname: null,
    lastname: null,
    phone: null,
    email: null,
    avatar: null
  }
  constructor(private FileService: FileService, private UserService: UserService) {

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
          console.log(res)
          this.avatar = res.path

        })
    }

  }

  updateProfile() {
    this.UserService.updateUser(localStorage.getItem('user_id'), this.profileUser).subscribe(
      res => console.log(res)
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
