import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'; // may need header later, removed for linting
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {User} from './user.model';


@Injectable()
export class LoginService {
  
   isLoggedIn = false;
   user = {email: '',password:''};

  private _userDataUrl = './assets/mock-data/userDb.json';
  private _users;

  constructor(private _http: Http) {}
  
  getUsers (): Observable<User[]> {
    console.log('in getUsers');
    return this._http.get(this._userDataUrl)
                    .map(this.extractData)
                    .do(data => console.log('Hola data' + data)) // eyeball results in the console
                    .catch(this.handleError);
  }
  
  login(user: User): Observable<boolean> {
    return this._http.get(this._userDataUrl)
        .map((res: Response) => {
        this._users = <User[]>res.json();
        
        console.log('user.email:' + user.email);
        console.log('user.password:' + user.password);

        let loggedinUser = this._users.find(u => u.email === user.email && u.password === user.password);//
        if (loggedinUser) {
          console.log('loggedinUser:' + loggedinUser);
          this.isLoggedIn = true;
          localStorage.setItem('userName', loggedinUser.firstName + ' ' + loggedinUser.lastName);
          return true;
        } else {
          this.isLoggedIn = false;
           console.log('loggedinUser:' + loggedinUser);         
          return false;
        }
     })
      .do(data => console.log('data in loginService:' + JSON.stringify(data)))
      ._catch(this.handleError);
  }
  
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
     console.log('body:' + body );
    return body.data || { };
  }
  
  private handleError(error: any) {
    console.log(error);
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    //return Observable.throw('server error');
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('userName');
  }

}
