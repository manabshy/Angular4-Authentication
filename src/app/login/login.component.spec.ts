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

  beforeEach(async(() => {

    // stub UserService for test purposes
    loginServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };   
    class RouterStub {
      navigateByUrl(url: string) { return url; }
    }
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:    [ {provide: LoginService, useValue: loginServiceStub },//Don't provide a real service,provide a test double instead
                      {provide: Router, useClass: RouterStub} ], 
      imports: [ FormsModule ]
      
    }) 
    .compileComponents(); // compile template and css
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 
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
  it('should request login if not logged in', () => {
    loginServiceStub.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('button'));
    let el = de.nativeElement;
    const content = el.textContent;
    expect(content).toMatch(/Sign in/i, '"Sign in"'); 

  });
  it('should check for input fields Email and Password',() =>{
    fixture.detectChanges();
    
    let emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement
    let passwordInput = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement
    
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();   
  });
  it('should inject the component\'s UserService instance',
    inject([LoginService], (service: LoginService) => {
    expect(service).toBe(componentLoginService);
  }));

  it('TestBed and Component UserService should be the same', () => {
    expect(loginService === componentLoginService).toBe(true);
  });
  it('Tell ROUTER to navigate when Sign in button clicked',

    inject([Router], (router: Router) => { // ...

    const spy = spyOn(router, 'navigateByUrl');

    }));

});

