import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './routing/routing.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { FileUploadService } from "./file-upload/file-upload.service";
import { GlobalEventsManagerService } from './global-events-manager.service';
import { FileUploadResolve } from "./file-upload/file-upload.resolve";
import { AppConfigs } from './app.config';
import { HttpClient } from './core/http-client';

/* Feature Modules */
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

/* Feature Modules */

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    LoginModule,
    HomeModule
  ],
  providers: [
    FileUploadService,
    AuthGuardService,
    GlobalEventsManagerService,
    FileUploadResolve,
    AppConfigs,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
