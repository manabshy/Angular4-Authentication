import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-success',
  templateUrl: './upload-success.component.html',
  styleUrls: ['./upload-success.component.css']
})
export class UploadSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("on init upload success");
  }

}
