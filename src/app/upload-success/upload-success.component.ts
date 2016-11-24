import { Component, OnInit } from '@angular/core';
import {FileUploadService, MetaDataResponseModel} from "../file-upload/file-upload.service";

@Component({
  selector: 'app-upload-success',
  templateUrl: './upload-success.component.html',
  styleUrls: ['./upload-success.component.css']
})
export class UploadSuccessComponent implements OnInit{

  mdResponseModel: MetaDataResponseModel;
  constructor(private _service: FileUploadService) { }

  ngOnInit() {
    this.mdResponseModel = this._service.fileUploadResponse;
  }

}
