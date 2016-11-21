import {Component, Directive} from '@angular/core';
import {Router} from '@angular/router';
import {FileUploadService} from './file-upload.service';
// import {MetadataComponent} from "../metadata/metadata.component";

@Directive({ selector: 'app-fileupload' })

@Component({
  selector: 'app-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [FileUploadService]
})

export class FileUploadComponent {

  filesToUpload: Array<File>;
  // metadataComponent: MetadataComponent;

  constructor(public router: Router, private _service: FileUploadService) {
    this.filesToUpload = [];
  }


  upload() {
    // upload to /document when live
    this._service.makeFileRequest('http://localhost:3000/upload', [], this.filesToUpload)
      .then((result) => {
        console.log(result);

        // this.metadataComponent = <MetadataComponent> result;
        // console.log("test after conversion: " + this.metadataComponent);

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

