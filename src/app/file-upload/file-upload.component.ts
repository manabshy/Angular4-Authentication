import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { MetaDataModel, MetaDataResponseModel } from '../metadata/metadata.model';
import { FileUploadService } from './file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fileupload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent  implements OnInit {
  @Input() updatable: boolean = false;

  viewUploadInCreate: boolean;
  @Input() showUploadButton: boolean;

  myForm: FormGroup;
  filesToUpload: Array<File>;
  metaData: MetaDataModel;
  metaDataResponse: MetaDataResponseModel;
  errorMessage: string;

  constructor(private _fb: FormBuilder, private _service: FileUploadService, private _router: Router) {
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

    this.showUploadButton = true;
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
      uploadDate: null,
      utr: [''],
      version: null
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
      file.lastModifiedDate
    );
    return fileMetadata;
  }

  // create New document 
  upload() {
    this._service.makeFileRequestXHR([], this.filesToUpload)
      .subscribe((result) => {
        console.log('results: ', result);
        this._service.fileUploadResponse = <MetaDataResponseModel>result;
        this._router.navigate(['upload-success']);
      }, (error) => {
        console.error(error);
      });
  }
}

