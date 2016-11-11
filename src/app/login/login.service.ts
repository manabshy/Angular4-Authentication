import { Injectable } from '@angular/core';

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

  constructor() { }
  login(user){
    var loggedInUser = users.find(u=> u.email === user.email);
    console.log(loggedInUser);  
    if(loggedInUser){
      return true;
    }
    return false;
  }

}
