import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigListComponent } from './config-list/config-list.component';
import {RouterModule,Routes} from '@angular/router' 

// import { UiSwitchModule } from 'ngx-toggle-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ToastrModule } from 'ngx-toastr';
import { LayoutModule} from '../../layout/layout.module'
// import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [ConfigListComponent],
  imports: [
    // NgxLoadingModule.forRoot({}),
    // UiSwitchModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  exports:[
    ConfigListComponent,
    RouterModule
  ]
})
export class ConfigListModule { }
