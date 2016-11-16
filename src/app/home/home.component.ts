import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userName: string;

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
  }

  logout(): void {
    this._loginService.logout();
    this._router.navigate(['login']);
  }

}
