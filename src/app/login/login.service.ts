import {Injectable} from '@angular/core';

export class User {

  constructor(public email: string, public password: string) {
  }

}

const users = [
  new User('ali@qa.com', 'a'),
  new User('mj@qa.com', 'b')
];

@Injectable()
export class LoginService {

  constructor() {
  }

  login(user) {
    let loggedInUser = users.find(u => u.email === user.email); //should be changed to filter
    console.log(loggedInUser);
    if (loggedInUser) {
      return true;
    }
    return false;
  }

}
