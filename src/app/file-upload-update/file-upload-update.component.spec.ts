/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {FormBuilder, FormArray, FormsModule,FormGroup,ReactiveFormsModule} from "@angular/forms";

import { FileUploadComponent } from '../file-upload/file-upload.component';

import { FileUploadUpdateComponent } from './file-upload-update.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { HeaderComponent } from '../shared/header/header.component';

import {MetaDataComponent} from '../metadata/metadata.component';
import {FileUploadService} from '../file-upload/file-upload.service';
import {LoginService} from '../login/login.service';
import { Router,RouterModule,ActivatedRoute,RouterLink } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Provider } from '@angular/core';

describe('FileUploadUpdateComponent', () => {
  let component: FileUploadUpdateComponent;
  let fixture: ComponentFixture<FileUploadUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadComponent,FileUploadUpdateComponent,AsideComponent,HeaderComponent,MetaDataComponent ],
      providers:[{provide:FormGroup},{provide:Router},{provide:FileUploadService},{provide:LoginService}],
      imports:[ FormsModule,ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
