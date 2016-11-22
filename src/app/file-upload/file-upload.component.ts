import {Component, Directive, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import {FileUploadService} from './file-upload.service';
import {MetaDataModel} from "../metadata/metadata.model";

@Directive({selector: 'app-fileupload'})

@Component({
  selector: 'app-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [FileUploadService]
})

export class FileUploadComponent {
  @Output() metaDataChange: EventEmitter<MetaDataModel> = new EventEmitter<MetaDataModel>();

  filesToUpload: Array<File>;
  private localMetaData: MetaDataModel;
  metaDataObj: MetaDataModel;

  constructor(public router: Router, private _service: FileUploadService) {
    this.filesToUpload = [];
  }

  makeFileRequestDone(newMetaData: MetaDataModel): void {
    this.metaDataObj = newMetaData;
    this.metaDataChange.emit(this.metaDataObj);
  }

  upload() {
    this._service.makeFileRequest('http://localhost:3000/upload', [], this.filesToUpload, this.metaDataObj)
      .then((result) => {
        // this.router.navigate(['upload-success']);
      }, (error) => {
        console.error(error);
      });
  }

  fileChangeEvent(fileInput: any) {
    let file = fileInput.target.files;
    this.filesToUpload = <Array<File>> file;
    this.localMetaData = this._service.populateFileModel(this.filesToUpload[0]);
    this.makeFileRequestDone(this.localMetaData);
  }
}

