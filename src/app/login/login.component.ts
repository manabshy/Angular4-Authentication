import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService,User} from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('','');
  public errorMsg = '';

    constructor(
        private router: Router,
        private loginService: LoginService) { }

  ngOnInit() {
        // reset login status
        this.loginService.logout();
    }
 
  login(){
      if(this.loginService.login(this.user)){
        
        console.log('logged in mate' + this.user);
        this.router.navigate(['/']);
      }
      else {
        console.log('error loggin in');
      }
  }



}
