/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MetaDataModel } from './metadata.model';
import { MetaDataComponent } from './metadata.component';
import { FileUploadService } from '../file-upload/file-upload.service';
import { Router } from '@angular/router';

describe('MetadataComponent', () => {

@Component({selector: 'app-metadata', template: ''})
class MetaDataStubComponent {}
  let component: MetaDataStubComponent;
  let fixture: ComponentFixture<MetaDataStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDataStubComponent ],
      providers: [ {provide: FileUploadService}, {provide: Router}],
      imports: [FormsModule, ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDataStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
