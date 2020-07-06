import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { ConfigListComponent } from './config-list/config-list/config-list.component';
import { CreatePitchComponent} from './create-pitch/create-pitch.component'
import { ProfileOwnerComponent } from './profile-owner/profile-owner.component';
import { HomepageComponent } from './homepage/homepage.component'
import { ListpitchComponent } from './listpitch/listpitch.component'
import { ProfileComponent } from './profile/profile.component'

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            // { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'list-user', loadChildren: './list/list.module#ListModule' },
            { path: 'config', component: ConfigListComponent },
            { path: 'list-pitch', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'createPitch',component:CreatePitchComponent},
            { path: 'profile-owner',component:ProfileOwnerComponent},
            // { path: 'config/:_id', component: ConfigListComponent },

            // không dùng
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'ecommerce', loadChildren: './ecommerce/ecommerce.module#EcommerceModule' },
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            
        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },   
    { path: 'register', component: RegisterComponent },
    { path: 'homepage',component:HomepageComponent},
    { path: 'profile', component: ProfileComponent },   // profile có component là Lockcomponent
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: 'search-results', component: ListpitchComponent },  // search-results có component là Error500Component
    
    // Not found
    { path: '**', redirectTo: 'homepage' }

];
