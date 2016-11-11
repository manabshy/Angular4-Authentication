import { Injectable } from '@angular/core';
import {RouterModule,Router} from '@angular/Router';
import { LoggedInComponent } from '../logged-in/logged-in.component';
import { RoutingComponent } from '../routing/routing.component';
import { AuthGuardService } from '../logged-in/auth-guard.service';

export class User {
  constructor(public email:string, public password:string) {
  }

}

var users = [ 
  new User('a','a'),
  new User('b','b')
            ];

@Injectable()
export class LoginService {

 // constructor(private _router: Router) { 

 // }

  login(user){
    var loggedInUser = users.find(u=> u.email === user.email);
    console.log(typeof loggedInUser);  
    if(loggedInUser){
      localStorage.setItem("user", JSON.stringify(loggedInUser));
    //  this._router.navigate(['Home']);
      return true;
    }
    return false;
  }

}
