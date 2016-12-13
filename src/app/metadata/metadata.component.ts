
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MetaDataModel, MetaDataResponseModel } from '../metadata/metadata.model';
import { FileUploadService } from '../file-upload/file-upload.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html'
})
export class MetaDataComponent {
    @Output() myEvent = new EventEmitter();
    myForm: FormGroup;
    filesToUpload: Array<File>;
    metaData: MetaDataModel;
    metaDataResponse: MetaDataResponseModel;
    errorMessage: string;

    @Input('group')
    public metaDataForm: FormGroup;
    @Input() viewType: boolean = false;
    @Input() isUploadDateVisible: boolean;
    @Input() metaDataModel : MetaDataModel;

    constructor(private _fb: FormBuilder, private _service: FileUploadService, private _router: Router) {
        this.filesToUpload = [];
    }

    fileChangeEvent(fileInput: any) {
        let selectedFile = <Array<File>>fileInput.target.files;
        this.filesToUpload = selectedFile;

        let file:File = <File>selectedFile[0];
        this.metaDataForm.controls['contentType'].setValue(file.type);
        this.metaDataForm.controls['receivedDate'].setValue(file.lastModifiedDate);
    }

      //upload new document for existing document based on its doucmentId;
    updateMe() {
      let oldMetadata = this.metaDataForm.value;//here updated metadata...
      
      this._service.updateFileRequestXHR([], this.filesToUpload, oldMetadata)
       .subscribe((result) => {
         //console.log('results to update: ', result);
         this._service.fileUploadResponse = <MetaDataResponseModel>result;

         //update responce
         //this.metaDataForm.controls['documentId'].setValue(result.documentId);
         this.metaDataForm.controls['uploadDate'].setValue(result.uploadDate);
         this.metaDataForm.controls['version'].setValue(result.version);
         // this._router.navigate(['update-success']);

         alert('The new document verison ('+result.version+') updated successfully!');

       }, (error) => {
         console.error(error);
       });
   }
}
