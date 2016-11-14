import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { RoutingComponent } from './routing/routing.component';
import { AuthGuardService } from './logged-in/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileuploadComponent,
    LoggedInComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
