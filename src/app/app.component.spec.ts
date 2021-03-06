/* tslint:disable:no-unused-variable */

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Component }                 from '@angular/core';
import { LoginComponent }           from './login/login.component';
import { HomeComponent }             from './home/home.component';
import { FileUploadComponent }      from './file-upload/file-upload.component';
import { MetaDataComponent} from './metadata/metadata.component';
import { LoginService } from './login/login.service';
import {FileUploadService} from './file-upload/file-upload.service';
import { RouterLinkStubDirective }   from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';
import { Router} from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideComponent } from './shared/aside/aside.component';
import { HeaderComponent } from './shared/header/header.component';



let comp:    HomeComponent;
let fixture: ComponentFixture<HomeComponent>;

describe('AppComponent & TestModule', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent, HomeComponent, FileUploadComponent, AsideComponent, HeaderComponent,
        RouterLinkStubDirective, RouterOutletStubComponent, MetaDataComponent
      ],
      providers: [FormBuilder, {provide: LoginService}, {provide: Router}, {provide: FileUploadService}],
      imports: [FormsModule, ReactiveFormsModule]
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
    // console.log('linkDes:' + linkDes);
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
    // console.log('links.length:' +  links.length);
    expect(links.length).toBe(2, 'should have two RouterLinks present');
  });
}
