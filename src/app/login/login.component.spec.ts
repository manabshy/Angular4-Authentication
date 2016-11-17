/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { async, ComponentFixture, inject,TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';


describe('LoginComponent', () => {
let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let loginService: LoginService; // the TestBed injected service
let componentLoginService: LoginService; // the actually injected service
let loginServiceStub: {
    isLoggedIn: boolean;
    user: { name: string}
  };

  beforeEach(() => {

    // stub UserService for test purposes
    loginServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };   

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:    [ {provide: LoginService, useValue: loginServiceStub },//Don't provide a real service,provide a test double instead
                      {provide: Router} ], 
      imports: [ FormsModule ]
      
    })
    
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //console.log('after fixture: ' + fixture);

   // LoginService actually injected into the component
    loginService = fixture.debugElement.injector.get(LoginService);
    componentLoginService = loginService;
    // loginService from the root injector
    loginService = TestBed.get(LoginService);


  });

  it('check for component', () => {
    expect(component).toBeTruthy();
  });
  it('should check for title', () => {
    let de = fixture.debugElement.query(By.css('h2'));
    expect(de.nativeElement.textContent).toContain(component.title);
  });
  it('should inject the component\'s UserService instance',
    inject([LoginService], (service: LoginService) => {
    expect(service).toBe(componentLoginService);
  }));

  it('TestBed and Component UserService should be the same', () => {
    expect(loginService === componentLoginService).toBe(true);
  });

});

