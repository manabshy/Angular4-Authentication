/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {MetaDataComponent} from '../metadata/metadata.component';
import {MetaDataResponseModel} from '../metadata/metadata.model';
import {FormBuilder, FormArray, FormsModule,FormGroup,ReactiveFormsModule} from '@angular/forms';
import {FileUploadService} from '../file-upload/file-upload.service';
import {LoginService} from "../login/login.service";
import { UploadSuccessComponent } from './upload-success.component';
import { Component, OnInit } from '@angular/core';
import { Router,RouterModule,ActivatedRoute,RouterLink,ActivatedRouteSnapshot } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Provider } from '@angular/core';

describe('UploadSuccessComponent',() => {
  let component: UploadSuccessComponent;
  let fixture: ComponentFixture<UploadSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSuccessComponent,MetaDataComponent ],
      providers:[{provide:FileUploadService},{provide:FormGroup},{provide:Router},{provide:LoginService},{provide:ActivatedRoute}],
      imports:[ FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
