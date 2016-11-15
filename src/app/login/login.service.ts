import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { User } from './Users';

const users = [
  new User('ali@qa.com', 'a'),
  new User('mj@qa.com', 'b')
];

@Injectable()
export class LoginService {

  constructor() {
  }

  login(user) {
    let loggedInUser = users.find(u => u.email === user.email && u.password == user.password) ;
    console.log(loggedInUser);
    if (loggedInUser) {
     // store username  in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', user.email);

      return true;
    }
    return false;
  }
   logout(): void {
        // clear token remove user from local storage to log user out     
        localStorage.removeItem('currentUser');
    }
}
