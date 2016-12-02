import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload-update',
  templateUrl: './file-upload-update.component.html',
  styleUrls: ['./file-upload-update.component.css']
})
export class FileUploadUpdateComponent implements OnInit {
  
  @Input() viewUploadInCreate: boolean;

  constructor() { }

  ngOnInit() {
  }

}
