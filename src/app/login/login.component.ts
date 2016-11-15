import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService} from './login.service';
import {User} from './users';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('','');
  public errorMsg = '';
  public loading = false;
    

    constructor(
        private router: Router,
        private loginService: LoginService) { }

  ngOnInit() {
        // reset login status
        this.loginService.logout();
    }
 
  login(){
      this.loading = true;
      if(this.loginService.login(this.user)){
        
        //console.log('logged in mate' + this.user);
        this.router.navigate(['/']);
      }
      else {
        this.errorMsg = 'Username or password is incorrect'; 
        this.loading = false;       
        //console.log('error loggin in');
      }
  }



}
