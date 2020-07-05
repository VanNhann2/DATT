import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';

//search

import { NgxDatatableModule, DatatableComponent } from '@swimlane/ngx-datatable';
// import { UiSwitchModule } from 'ngx-toggle-switch';
// import { NgxLoadingModule } from 'ngx-loading';

// //phan trang
// import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



//phân trang

const routes: Routes = [
    { path: '', component: ListComponent }
];

@NgModule({
    imports: [
        // NgxLoadingModule.forRoot({}),
        // UiSwitchModule,
        // NgxPaginationModule,
        NgxDatatableModule,
        SharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
        })
    ],
    declarations: [ListComponent],
    exports: [
        RouterModule,
    ]
})
export class ListModule { }
