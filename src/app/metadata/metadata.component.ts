import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MetaDataModel} from "./metadata.model";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
  metaDataForm: FormGroup;
  customerId = new FormControl("", Validators.required);
  sourceSystem = new FormControl("", Validators.required);
  contentType = new FormControl("", Validators.required);
  receivedDate = new FormControl("", Validators.required);
  uploadDate = new FormControl("", Validators.required);

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    let model = new MetaDataModel ("cust123", "angular app", "jpeg", new Date(12/10/2016), new Date(18/11/2016));
    this.metaDataForm = this._formBuilder.group({
      "customerId": model.customerId,
      "sourceSystem" : model.sourceSystem,
      "contentType": model.contentType,
      "receivedDate": model.receivedDate,
      "uploadDate": model.uploadDate
    });
  }

}

