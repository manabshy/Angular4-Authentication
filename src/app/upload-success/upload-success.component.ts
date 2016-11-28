import { Component, OnInit } from '@angular/core';
import {FileUploadService } from "../file-upload/file-upload.service";
import {MetaDataResponseModel} from "../metadata/metadata.model";
import {FormBuilder, FormArray, FormGroup} from "@angular/forms";
import {Router, ActivatedRouteSnapshot, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-upload-success',
  templateUrl: './upload-success.component.html',
  styleUrls: ['./upload-success.component.css']
})
export class UploadSuccessComponent implements OnInit{

  myForm: FormGroup;
  constructor(private _service: FileUploadService, private _fb: FormBuilder, private _route: ActivatedRoute) { }

  ngOnInit() {
    //let mdResponseModel = this._service.fileUploadResponse;
    let mdResponseModel = this._route.snapshot.data['uploadResponse'];
      console.log("ngonInit: ", mdResponseModel);
    this.myForm = this._fb.group({
      metaDataArray: this._fb.array([])
    });
    this.addMetaDataForm(mdResponseModel);
  }

  addMetaDataForm(metaDataResponse: MetaDataResponseModel) {
    const control = <FormArray>this.myForm.controls['metaDataArray'];
    control.setControl(0, this.initializeMetaDataForm(metaDataResponse));
  }

  initializeMetaDataForm(metaDataResponse: MetaDataResponseModel) {
    return this._fb.group({
      customerId: [metaDataResponse.customerId],
      sourceSystem: [metaDataResponse.sourceSystem],
      contentType: [metaDataResponse.contentType],
      receivedDate: [metaDataResponse.receivedDate],
      uploadDate: [metaDataResponse.uploadDate],
      utr: [metaDataResponse.utr],
      responseCode: [metaDataResponse.responseCode],
      documentId: [metaDataResponse.DocId],
      totalExecutionTime: [metaDataResponse.totalExecutionTime]
    });
  }

  updateMetaData(): void{

    let metaDataResponseModel = <MetaDataResponseModel>this.myForm.value.metaDataArray[0];
    this._service.updateMetaData(metaDataResponseModel);
    console.log( metaDataResponseModel);

  }

}
