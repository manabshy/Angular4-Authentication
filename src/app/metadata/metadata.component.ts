import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormsModule } from '@angular/forms';
import { MetaDataModel } from "./metadata.model";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
  @Input() model: MetaDataModel;

  metaDataForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // let model = new MetaDataModel("cust123", "angular app", "jpeg", new Date(12/10/2016), new Date(18/11/2016));

    this.metaDataForm = this._formBuilder.group({
      "customerId": new FormControl(this.model.customerId),
      "sourceSystem" : new FormControl(this.model.sourceSystem),
      "contentType": new FormControl(this.model.contentType),
      "receivedDate": new FormControl(this.model.receivedDate),
      "uploadDate": new FormControl(this.model.uploadDate)
    });

  }

}

