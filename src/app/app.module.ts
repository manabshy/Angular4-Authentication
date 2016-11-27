import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './routing/routing.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { MetaDataComponent } from './metadata/metadata.component';
import { FileUploadUpdateComponent } from './file-upload-update/file-upload-update.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UploadSuccessComponent } from './upload-success/upload-success.component';
import {FileUploadService} from "./file-upload/file-upload.service";
import {GlobalEventsManagerService} from './global-events-manager.service';



/* Feature Modules */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    ReactiveFormsModule
  ],
  providers: [
    FileUploadService,
    LoginService,
    AuthGuardService,
    GlobalEventsManagerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
