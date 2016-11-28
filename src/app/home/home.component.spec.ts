/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement,Directive} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MetaDataComponent } from '../metadata/metadata.component';
<<<<<<< HEAD
import { NavigationComponent } from '../navigation/navigation.component';
=======
import { NavigationComponent} from '../navigation/navigation.component';
>>>>>>> 0ec8ae0561b0bc15df8a1fa003fbb7ba365f71ae
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MetaDataModel} from "../metadata/metadata.model";
import {LoginService} from "../login/login.service";
import {FileUploadService} from "../file-upload/file-upload.service";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let logoutBtn: DebugElement;
<<<<<<< HEAD

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FileUploadComponent, MetaDataComponent, NavigationComponent ],
      providers:[{provide: LoginService },
=======
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FileUploadComponent,MetaDataComponent,NavigationComponent ],
      providers:[{provide: FileUploadService},{provide:LoginService},
>>>>>>> 0ec8ae0561b0bc15df8a1fa003fbb7ba365f71ae
                  {provide: Router},FormBuilder  ],
      imports:[HttpModule,ReactiveFormsModule,FormsModule ]
    })
    .compileComponents();
    fixture   = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    logoutBtn = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();

  }));

  it('check HomeComponent', () => {
    expect(component).toBeTruthy();
  });

});
