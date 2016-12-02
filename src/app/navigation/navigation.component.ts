import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import { Router,RouterModule,ActivatedRoute,RouterLink } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private userName: string;
  isLoggedIn:boolean = false;
  
  constructor( private _loginService:LoginService, private _router: Router) {
  }
  //_loginService.isLoggedIn
  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    //this.isLoggedIn = this._loginService.isLoggedIn;
  }
  
  // isActive(instrction: any) :boolean {
  //   console.log('instrction:' + instrction);
  //   return this._router.url == instrction
  // }
  

  logout(): void {
    this._loginService.logout();
    this._router.navigate(['login']);

   
  }

}
