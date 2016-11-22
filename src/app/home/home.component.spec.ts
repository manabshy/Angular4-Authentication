/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement,Directive} from '@angular/core';

import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MetadataComponent } from '../metadata/metadata.component';

import { FormGroup, FormControl, Validators, FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let logoutBtn: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FileUploadComponent,MetadataComponent ],
      providers:[{provide: LoginService },
                  {provide: Router},FormBuilder  ],
      imports:[HttpModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    logoutBtn  = fixture.debugElement.query(By.css('.btn'));

    fixture.detectChanges();
  });

  it('check HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
