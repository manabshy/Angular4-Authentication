import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private userName: string;
  private isLoggedIn: boolean;

  constructor(private _loginService: LoginService, private _router: Router) {
  }
  //_loginService.isLoggedIn
  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.isLoggedIn = this._loginService.isLoggedIn;
  }


  logout(): void {
    this._loginService.logout();
    this._router.navigate(['login']);

    this.isLoggedIn = this._loginService.isLoggedIn;

  }

}
