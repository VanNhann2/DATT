import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserService } from '../../../service/user.service'
import { validatePhone, phoneValid} from '../../forms/validation/phone.validation'
import {Router} from "@angular/router"
import { ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;
    toaster: any;
    toasterConfig: any;
    toasterconfig: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-bottom-right',
        showCloseButton: true
    });

    constructor(public settings: SettingsService, fb: FormBuilder, private UserService: UserService, private router: Router, public toasterService: ToasterService) {
        let password = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,10}$')]));
        let certainPassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'accountagreed': [null, Validators.required],
            'passwordGroup': this.passwordForm,
            'username':null,
            'firstname':null,
            'lastname':null,
            'phone':['', [Validators.required, phoneValid('VN')]]
        });
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (let c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }

        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
            value.password = value.passwordGroup.password
            value.permission = 'customer'
            // delete value.passwordGroup
            // delete value.accountagreed

            this.UserService.register(value).subscribe(
                res => {
                    console.log(res)
                    this.toasterService.pop('success', 'haha', 'hehe')
                    this.router.navigate(['login'])
                },
                error => (this.toasterService.pop('error', 'haha', 'hehe'))
            )
        }
    }

    ngOnInit() {

    }

}
