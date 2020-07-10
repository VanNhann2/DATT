import { Component, OnInit, Injector } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import { FileService } from '../../service/file.service'
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    username = undefined
    valForm: FormGroup;
    router: Router;
    image
    profileUser = {
      firstname: null,
      lastname: null,
      phone: null,
      email: null,  
      avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    }
    constructor(private UserService: UserService, private FileService: FileService, public settings: SettingsService, fb: FormBuilder,  private sanitizer:DomSanitizer, public injector: Injector, private http: HttpClient) {
      this.UserService.getUser().subscribe(
        res => {
          console.log(res)
          this.username = res.username
          console.log(this.username)
        },
        err => this.router.navigate(['login'])
      )
        this.valForm = fb.group({
            'password': [null, Validators.required]
        });

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
    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            this.router.navigate(['home']);
        }
    }

    ngOnInit() {
        this.router = this.injector.get(Router);
    }

    name = 'Angular 4';
    fileData: File = null;
    previewUrl:any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
 
    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
    }
 
    preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}

}
