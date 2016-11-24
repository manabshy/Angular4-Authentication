import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import {FileUploadUpdateComponent} from '../file-upload-update/file-upload-update.component';

import {AuthGuardService} from '../guards/auth-guard.service';
import {UploadSuccessComponent} from "../upload-success/upload-success.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'update', component: FileUploadUpdateComponent, canActivate: [AuthGuardService]},
  {path: 'upload-success', component: UploadSuccessComponent, canActivate: [AuthGuardService]},
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
export class AppRoutingModule { };
