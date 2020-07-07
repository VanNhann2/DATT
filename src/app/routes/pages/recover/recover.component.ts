import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

import { LocationService } from '../../../service/location.service'

@Component({
    selector: 'app-recover',
    templateUrl: './recover.component.html',
    styleUrls: ['./recover.component.scss']
})

export class RecoverComponent implements OnInit {
    getCitys = []
    getDistricts = []
    district = []
    city: String
    valForm: FormGroup;
    constructor( private locationService: LocationService ,public settings: SettingsService, fb: FormBuilder, @Inject(DOCUMENT) document) {
        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])]
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
        }
    }

  

    ngOnInit() {
        this.getCity();
        this.getDistrict()
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
        if (window.pageYOffset > 250) {
          let element = document.getElementById('navbar');
          element.classList.add('sticky');
        } else {
         let element = document.getElementById('navbar');
           element.classList.remove('sticky'); 
        }
     }
     getCity(){
        this.locationService.getCity().subscribe(
            (doc) => {
                this.getCitys = doc
                console.log(this.getCitys);
            }, err =>{
                console.log(err);
            }
        )
    }

    // changeCity() {
    //     // console.log(this.form)
    //     this.locationService.getDistrict({city : object id}).subscribe(                                                                
    //       data => {
    //         this.getDistricts = data
    //         console.log(data)
    //       }sao lai lam trong file nay
    //     )
    // doi xi
    //   }
    getDistrict(){
        this.locationService.getDistrict(this.city ='5eaefbe3b822cc8a2df19be4').subscribe(
            (doc) => {
                this.getDistricts = doc
                console.log(this.getDistricts);
            }, err =>{
                console.log(err);
            }
        )
    }
    
}
