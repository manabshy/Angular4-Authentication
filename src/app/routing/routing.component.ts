import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuardService} from '../guards/auth-guard.service';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate:[AuthGuardService]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);