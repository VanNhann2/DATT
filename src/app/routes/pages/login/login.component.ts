import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserService } from '../../../service/user.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder, private UserService: UserService, private router: Router) {

        this.valForm = fb.group({
            'username': [null, Validators.required],
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
            this.UserService.login(value).subscribe(
                res => {
                    console.log(res)
                    localStorage.setItem('token',res.toString())
                    this.router.navigate(['homepage'])
                },
                error => (console.log(error))
            )
        }
    }

    ngOnInit() {

    }

}
