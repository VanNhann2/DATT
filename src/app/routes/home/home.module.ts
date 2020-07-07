import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TotalComponent } from './total/total/total.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        TranslateModule,
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule,
        BsDatepickerModule.forRoot(),
        DatepickerModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        TotalComponent,
    ],
    exports: [
        TranslateModule,
        RouterModule
    ]
})
export class HomeModule { }