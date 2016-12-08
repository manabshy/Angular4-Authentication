import {Component, Input, OnInit} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {MetaDataModel, MetaDataResponseModel, FileDocument} from "../metadata/metadata.model";
import {FileUploadService} from "./file-upload.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  myForm: FormGroup;
  filesToUpload: Array<File>;
  metaData: MetaDataModel;
  FileSelected: boolean = false;
  files: Array<FileDocument>;

  constructor(private _fb: FormBuilder, private _service: FileUploadService, private _router: Router) {
    this.filesToUpload = [];
  }

  fileChangeEvent(fileInput: any) {
    this.files = new Array<FileDocument>();
    let file = fileInput.target.files;
    let selectedFiles: Array<File> = <Array<File>>file;
    for(let f of selectedFiles){
      this.files.push(this.getFileDocument(f));
    }
    this.FileSelected = true;
  }

  getFileDocument(f: File): FileDocument {
    let fDoc: FileDocument = new FileDocument();
    fDoc.file = f;
    fDoc.customer = "Customer1";
    fDoc.type = f.type;
    fDoc.name =f.name;
    fDoc.size =f.size.toString();
    fDoc.receivedDate = f.lastModifiedDate;
    fDoc.creationDate = f.lastModifiedDate;
    fDoc.uploadDate = new Date(Date.now());
    return fDoc;
  }

  addAnotherFile(fileInput: any) {
    let selectedFiles = <Array<File>>fileInput.target.files;
    let file = selectedFiles[0];
    this.files.push(this.getFileDocument(file));
  }

  cancelUpload(): void {
    this.files = [];
    this.FileSelected = false;
  }

  DiscardFile(f: FileDocument){
    console.log("Will not be uploaded: ", f);
  }

  update() {
    this._service.updateFileRequestXHR([], this.filesToUpload)
      .then((result) => {
        console.log("results to update: ", result);
        this._service.fileUploadResponse = <MetaDataResponseModel>result;
        this._router.navigate(['upload-success']);
      }, (error) => {
        console.error(error);
      });
  }

  upload() {

    // let currentMetaData = <MetaDataModel>this.myForm.value.metaDataArray[0];
    // this._service.makeFileRequest(currentMetaData, this.filesToUpload)
    //   .subscribe(
    //     (response) => {
    //       console.log('got a upload response');
    //       this.metaDataResponse = response;
    //       this._router.navigate(['upload-success']);
    //     },
    //     error=> this.errorMessage = <any>error );

    this._service.makeFileRequestXHR([], this.filesToUpload)
      .then((result) => {
        console.log("results: ", result);
        this._service.fileUploadResponse = <MetaDataResponseModel>result;
        this._router.navigate(['upload-success']);
      }, (error) => {
        console.error(error);
      });

    //   .then((result) => {
    //     // this.router.navigate(['upload-success']);
    //   }, (error) => {
    //     console.error(error);
    //   });
    //
    // let metaData = <MetaDataModel>this.myForm.value.metaDataArray[0];
    // this._service.InitFileUploadResponse(metaData);
    // console.log(this._service.fileUploadResponse.DocId);
  }

  upload_update() {

    this._service.updateFileRequestXHR([], this.filesToUpload)
      .then((result) => {
        console.log("results: ", result);
        this._service.fileUploadResponse = <MetaDataResponseModel>result;
        this._router.navigate(['upload-success']);
      }, (error) => {
        console.error(error);
      });
  }

}

