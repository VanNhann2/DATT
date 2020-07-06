import { Component, OnInit,ViewChild } from '@angular/core';
import { validatePhone, phoneValid} from '../forms/validation/phone.validation'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router"
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { CustomValidators } from 'ng2-validation';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';


@Component({
  selector: 'app-create-pitch',
  templateUrl: './create-pitch.component.html',
  styleUrls: ['./create-pitch.component.scss']
})
export class CreatePitchComponent implements OnInit {

    passwordForm: FormGroup;
    toaster: any;
    toasterConfig: any;
    toasterconfig: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-bottom-right',
        showCloseButton: true
    });


    constructor(private router: Router, public toasterService: ToasterService) {

      
      this.cropperSettings = new CropperSettings();

      this.cropperSettings.noFileInput = true;

      this.cropperSettings.width = 100;
      this.cropperSettings.height = 100;

      this.cropperSettings.croppedWidth = 100;
      this.cropperSettings.croppedHeight = 100;

      this.cropperSettings.canvasWidth = 300;
      this.cropperSettings.canvasHeight = 240;

      this.cropperSettings.minWidth = 50;
      this.cropperSettings.minHeight = 50;

      this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(0,0,0,.25)';
      this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

      this.cropperSettings.rounded = false;

      this.data1 = {};
    }

    ngOnInit() {
      
    }


    
    name: string;
    data1: any;
    cropperSettings: CropperSettings;

    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

    setRoundedMethod(value: boolean) {
        this.cropperSettings.rounded = value;
    }

    cropped(bounds: Bounds) {
        console.log(bounds);
    }

    fileChangeListener($event) {
        let image: any = new Image();
        let file: File = $event.target.files[0];
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = function(loadEvent: any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };

        myReader.readAsDataURL(file);
    }
}
