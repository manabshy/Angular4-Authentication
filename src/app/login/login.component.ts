import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user.model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user = new User('', '');
  public errorMsg = '';
  public loading = false;
  title = "Please sign in";


  constructor(private router: Router,
              private loginService: LoginService) {
  }
  login(): void {
    this.loginService.login(this.user)
      .subscribe(result => {
        if (result) {             
             this.router.navigate(['/']);
        } else {
          this.errorMsg = 'Username or password is incorrect';
          this.loading = false;
        }
      }, error => this.errorMsg = <any> error);
  }
}
