import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../../shared/shared.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { CreatePitchComponent } from './widgets/create-pitch/create-pitch.component';


const routes: Routes = [
    { path: '', component: WidgetsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        }),
        CreatePitchComponent
    ],
    declarations: [WidgetsComponent, CreatePitchComponent],
    exports: [
        RouterModule,
        CreatePitchComponent
    ]
})
export class WidgetsModule { }
