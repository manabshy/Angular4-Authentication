/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { LoginService } from '../login/login.service';
import { Router,RouterModule,ActivatedRoute,RouterLink } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Provider } from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers:[{provide:LoginService},{provide: Router},
      {provide:ActivatedRoute},{provide:LocationStrategy}],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navigation', () => {
    expect(component).toBeTruthy();
  });
});
