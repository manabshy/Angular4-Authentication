/* tslint:disable:no-unused-variable */

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { Component }                 from '@angular/core';
import { LoginComponent }           from './login/login.component';
import { HomeComponent }             from './home/home.component';
import { FileUploadComponent }      from './file-upload/file-upload.component';
import { MetadataComponent} from './metadata/metadata.component';
import { LoginService } from './login/login.service';
import { RouterLinkStubDirective }   from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({selector: ' app-fileupload', template: ''})
  class HomeStubComponent {}

let comp:    HomeComponent;
let fixture: ComponentFixture<HomeComponent>;

describe('AppComponent & TestModule', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent, HomeComponent,FileUploadComponent,
        RouterLinkStubDirective, RouterOutletStubComponent,MetadataComponent
      ],
      providers:[FormBuilder,{provide:LoginService},{provide:Router}],
      imports:[FormsModule]
    })
    
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      comp    = fixture.componentInstance;
    });
  }));
  tests();
});


function tests() {
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));  

    // get the attached link directive instances using the DebugElement injectors
    //console.log('linkDes:' + linkDes);
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

    // find buttons
    const buttons    = fixture.debugElement.queryAll(By.css('button'));
   // this.logBtn = buttons[0];
  });
  
  it('can instantiate it', () => {
      expect(comp).not.toBeNull();
    });
  
  it('can get RouterLinks from HomeComponent template', () => {
    console.log('links.length:' +  links.length);
    expect(links.length).toBe(1, 'should have No links as there are No links at present');
  });  
}
