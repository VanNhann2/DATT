import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TotalComponent } from './total/total/total.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        TranslateModule,
        RouterModule.forChild(routes)
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