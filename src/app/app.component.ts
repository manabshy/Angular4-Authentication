import { Component } from '@angular/core';
import {AuthGuardService} from './logged-in/auth-guard.service';

import{LoggedInComponent} from './logged-in/logged-in.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login Page!!';
}

