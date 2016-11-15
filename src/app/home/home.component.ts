import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userName: string;
  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem("userName");
  }

}
