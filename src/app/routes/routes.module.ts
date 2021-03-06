import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ConfigListModule } from './config-list/config-list.module'
import { ImageCropperModule } from 'ng2-img-cropper';

import { menu } from './menu';
import { routes } from './routes';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { CreatePitchComponent } from './create-pitch/create-pitch.component';
import { ProfileOwnerComponent } from './profile-owner/profile-owner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListpitchComponent } from './listpitch/listpitch.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule,
        ConfigListModule,
        ImageCropperModule,
        FormsModule,
        
    ],
    declarations: [CreatePitchComponent, ProfileOwnerComponent, HomepageComponent, ListpitchComponent, ProfileComponent],
    exports: [
        RouterModule
    ],
    providers: [
        ToasterService
    ]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
