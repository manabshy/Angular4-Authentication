
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormsModule } from '@angular/forms';
import { MetaDataModel } from "./metadata.model";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent {
  @Input() model: MetaDataModel;
}

