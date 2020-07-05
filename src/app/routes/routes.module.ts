import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ConfigListModule } from './config-list/config-list.module'

import { menu } from './menu';
import { routes } from './routes';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { CreatePitchComponent } from './create-pitch/create-pitch.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule,
        ConfigListModule
    ],
    declarations: [CreatePitchComponent],
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
