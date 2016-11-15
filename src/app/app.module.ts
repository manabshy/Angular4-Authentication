import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './routing/routing.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
