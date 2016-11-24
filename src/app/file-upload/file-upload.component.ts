import {Component, Directive,OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
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

export class FileUploadComponent  implements OnInit{

  myForm: FormGroup;
  filesToUpload: Array<File>;
  metaData: MetaDataModel;



  constructor(private _fb: FormBuilder,public router: Router, private _service: FileUploadService) {
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
      uploadDate: [newMetaData.uploadDate]
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

    // this._service.makeFileRequest('http://localhost:3000/upload', [], this.filesToUpload, this.myForm.value.metaDataArray[0])
    //   .then((result) => {
    //     // this.router.navigate(['upload-success']);
    //   }, (error) => {
    //     console.error(error);
    //   });

    let metaData = <MetaDataModel>this.myForm.value.metaDataArray[0];
    let tempData : tempMetaData =  new tempMetaData(metaData);
    console.log(tempData.DocId);

    this.router.navigate('/upload-success');

  }

}

export class tempMetaData extends MetaDataModel {
  DocId: string = "DocId123";
  constructor(private _metaData: MetaDataModel){ super(_metaData.customerId, _metaData.sourceSystem, _metaData.contentType, _metaData.receivedDate, _metaData.uploadDate)}
}


