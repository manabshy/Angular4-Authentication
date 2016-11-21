import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormsModule } from '@angular/forms';
import { MetaDataModel } from "./metadata.model";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
  //@Input() model: MetaDataModel;
  metaDataForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    let model = new MetaDataModel("cust123", "angular app", "jpeg", new Date(12/10/2016), new Date(18/11/2016));

    this.metaDataForm = this._formBuilder.group({
      "customerId": new FormControl(model.customerId),
      "sourceSystem" : new FormControl(model.sourceSystem),
      "contentType": new FormControl(model.contentType),
      "receivedDate": new FormControl(model.receivedDate),
      "uploadDate": new FormControl(model.uploadDate)
    });

  }

}

