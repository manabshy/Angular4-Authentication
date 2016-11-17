import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'; // may need header later, removed for linting
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {User} from './user.model';


@Injectable()
export class LoginService {

  private _userDataUrl = './assets/mock-data/userDb.json';
  private _users;

  constructor(private _http: Http) {
  }

  login(user: User): Observable<boolean> {
    return this._http.get(this._userDataUrl)
      .map((res: Response) => {
        this._users = <User[]>res.json();
        let loggedinUser = this._users.find(u => u.email === user.email && u.password === user.password);//
        if (loggedinUser) {
          localStorage.setItem('userName', loggedinUser.firstName + ' ' + loggedinUser.lastName);
          return true;
        } else {
          return false;
        }
      })
      .do(data => console.log(JSON.stringify(data)))
      ._catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw('server error');
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('userName');
  }

}
