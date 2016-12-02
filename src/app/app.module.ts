import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { MetaDataComponent } from './metadata/metadata.component';
import { FileUploadUpdateComponent } from './file-upload-update/file-upload-update.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UploadSuccessComponent } from './upload-success/upload-success.component';
import {FileUploadService} from "./file-upload/file-upload.service";
import {GlobalEventsManagerService} from './global-events-manager.service';
import {FileUploadResolve} from "./file-upload/file-upload.resolve";
import { AppConfigs } from './app.config';
import { HttpClient } from './core/http-client';

/* Feature Modules */
import { LoginModule } from './login/login.module';

/* Feature Modules */

@NgModule({
  declarations: [
    AppComponent,
//    LoginComponent,
    FileUploadComponent,
    MetaDataComponent,
    HomeComponent,
    FileUploadUpdateComponent,
    NavigationComponent,
    UploadSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    LoginModule
  ],
  providers: [
    FileUploadService,
   // LoginService,
    AuthGuardService,
    GlobalEventsManagerService,
    FileUploadResolve,
    AppConfigs,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
