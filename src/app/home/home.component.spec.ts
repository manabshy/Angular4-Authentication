/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { FileUploadComponent } from '../fileupload/file-upload.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FileUploadComponent ],
      providers:[{provide: LoginService },
                  {provide: Router}  ],
      imports:[HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create/check HomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
