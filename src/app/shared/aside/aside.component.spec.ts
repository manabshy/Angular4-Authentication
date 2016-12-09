/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { AsideComponent } from './aside.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import {CommonModule, LocationStrategy, HashLocationStrategy} from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import { Component } from '@angular/core';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideComponent ],
      providers:[{provide:Router},
        {provide: ActivatedRoute},
        {provide: LocationStrategy},
        {provide: HashLocationStrategy }
      ],
      imports: [ RouterModule, CommonModule, BrowserModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
