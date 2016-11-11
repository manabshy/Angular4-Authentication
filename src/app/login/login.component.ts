import { Component, OnInit } from '@angular/core';
import {LoginService,User} from './login.service';
@Component({
  selector: 'app-login',
  providers:[LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public user = new User('','');
  public errorMsg = '';

  constructor(private _service:LoginService) { }
  
  login(): void {
      this._service.login(this.user);
  }
  


}
