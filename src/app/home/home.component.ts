import {Component,Input, OnInit, Directive} from '@angular/core';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn:boolean = true;
  constructor() {
  }

  ngOnInit() { }


}

