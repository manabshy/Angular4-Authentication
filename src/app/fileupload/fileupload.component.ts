import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploadService} from './fileupload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
  providers: [FileUploadService]
})

export class FileuploadComponent {

  filesToUpload: Array<File>;

  constructor(public router: Router, private _service: FileUploadService) {
    this.filesToUpload = [];
  }


  upload() {
    // upload to /document when live
    this._service.makeFileRequest('http://localhost:3000/upload', [], this.filesToUpload)
      .then((result) => {
        console.log(result);
        this.router.navigate(['upload-success']);
      }, (error) => {
        console.error(error);
      });
  }

  fileChangeEvent(fileInput: any) {
    let file = fileInput.target.files;
    this.filesToUpload = <Array<File>> file;
  }
}

