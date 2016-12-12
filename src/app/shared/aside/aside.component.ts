import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  // styleUrls: ['./aside.component.css'],
})
export class AsideComponent {

  constructor(private _router: Router) {}

  navigateTo(location: string): void{
    this._router.navigate([location]);
  }

}
