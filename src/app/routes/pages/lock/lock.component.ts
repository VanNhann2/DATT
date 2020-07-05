import { Component, OnInit, Injector } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-lock',
    templateUrl: './lock.component.html',
    styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {

    valForm: FormGroup;
    router: Router;

    constructor(public settings: SettingsService, fb: FormBuilder, public injector: Injector, private http: HttpClient) {

        this.valForm = fb.group({
            'password': [null, Validators.required]
        });

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
    // let url = '' ;
    // onSelectFile(event) {
    //     if (event.target.files && event.target.files[0]) {
    //       var reader = new FileReader();
    
    //       reader.readAsDataURL(event.target.files[0]); // read file as data url
    
    //       reader.onload = (event) => { // called once readAsDataURL is completed
    //         this.url = event.target.result;
    //       }
    //     }
    //   }
}
