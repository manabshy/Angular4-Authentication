import {Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {MetaDataModel, MetaDataResponseModel} from "../metadata/metadata.model";
import {FileUploadService} from "./file-upload.service";

@Component({
  selector: 'app-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent  implements OnInit{

  myForm: FormGroup;
  filesToUpload: Array<File>;
  metaData: MetaDataModel;
  metaDataResponse: MetaDataResponseModel;
  errorMessage: string;

  constructor(private _fb: FormBuilder, private _service: FileUploadService) {
    this.filesToUpload = [];
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      file: ['', [Validators.required]],
      metaDataArray: this._fb.array([])
    });
  }
  fileChangeEvent(fileInput: any) {
    let file = fileInput.target.files;
    this.filesToUpload = <Array<File>>file;
    this.metaData = this.populateFileModel(this.filesToUpload[0]);
    this.addMetaDataForm(this.metaData);
  }
  addMetaDataForm(newMetaData: MetaDataModel) {
    const control = <FormArray>this.myForm.controls['metaDataArray'];
    control.setControl(0, this.initializeMetaDataForm(newMetaData));
  }

  initializeMetaDataForm(newMetaData: MetaDataModel) {
    return this._fb.group({
      customerId: [newMetaData.customerId],
      sourceSystem: [newMetaData.sourceSystem],
      contentType: [newMetaData.contentType],
      receivedDate: [newMetaData.receivedDate],
      uploadDate: [newMetaData.uploadDate],
      utr: ['']
    });
  }
  populateFileModel(file: any) {
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e);
    };

    let fileMetadata = new MetaDataModel(
      localStorage.getItem('userName'),
      'angular app',
      file.type,
      file.lastModifiedDate,
      new Date(),
    );

    return fileMetadata;
  }

  upload() {

    let currentMetaData = <MetaDataModel>this.myForm.value.metaDataArray[0];
    this._service.makeFileRequest(currentMetaData)
      .subscribe( response => this.metaDataResponse = response, error=> this.errorMessage = <any>error );

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

}
