import { Component, OnInit } from '@angular/core';
import { validatePhone, phoneValid} from '../../forms/validation/phone.validation'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router"
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { CustomValidators } from 'ng2-validation';
@Component({
    selector: 'app-google',
    templateUrl: './google.component.html',
    styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;
    toaster: any;
    toasterConfig: any;
    toasterconfig: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-bottom-right',
        showCloseButton: true
    });


    constructor(private fb: FormBuilder, private router: Router, public toasterService: ToasterService) {
        this.valForm = fb.group({
            'name': [null, Validators.required],
            'address': [null, Validators.required],
            'phone':['', [Validators.required, phoneValid('VN')]],
            'city':[null, Validators.required],
            'district':[null, Validators.required],
            'decs':[null, Validators.required]
        });
    }

    ngOnInit() {
        this.valForm = this.fb.group({
            'name': [null, Validators.required],
            'address': [null, Validators.required],
            'phone':['', [Validators.required, phoneValid('VN')]],
            'city':[null, Validators.required],
            'district':[null, Validators.required],
            'decs':[null, Validators.required]
        });
    }

}
