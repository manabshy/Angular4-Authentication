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

import { RouterLinkStubDirective }   from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';

import { FormGroup, FormControl, Validators, FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({selector: ' app-fileupload', template: ''})
  class HomeStubComponent {}


let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent & TestModule', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent, HomeComponent,FileUploadComponent,MetadataComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      providers:[FormBuilder],
      imports:[FormsModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));
  tests();
});
//////// Testing w/ NO_ERRORS_SCHEMA //////
describe('AppComponent & NO_ERRORS_SCHEMA', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, RouterLinkStubDirective ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));
 // tests();
});
//////// Testing w/ real root module //////
// Tricky because we are disabling the router and its configuration
// Better to use RouterTestingModule
import { AppModule }    from './app.module';
import { AppRoutingModule }    from './routing/routing.component';

describe('AppComponent & AppModule', () => {

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })

    // Get rid of app's Router configuration otherwise many failures.
    // Doing so removes Router declarations; add the Router stubs
    .overrideModule(AppModule, {
      remove: {
        imports: [ AppRoutingModule ]
      },
      add: {
        declarations: [ RouterLinkStubDirective, RouterOutletStubComponent ]
      }
    })

    .compileComponents()

    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp    = fixture.componentInstance;
    });
  }));
//  tests();
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
  });
  
  it('can instantiate it', () => {
      expect(comp).not.toBeNull();
    });
 
  it('can get RouterLinks from template', () => {
    //console.log('links.length:' + + links.length);
    expect(links.length).toBe(0, 'should have No links as there are No links at present');
  });
}
