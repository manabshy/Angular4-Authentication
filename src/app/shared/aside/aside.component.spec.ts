import { async, ComponentFixture, TestBed
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { Component }                 from '@angular/core';
import { AsideComponent }              from './aside.component';
import { HomeComponent }           from '../../home/home.component';
import { HomeModule } from '../../home/home.module';

import { RouterLinkStubDirective }   from '../../testing';
import { RouterOutletStubComponent } from '../../testing';
import { Router,Routes, RouterModule } from '@angular/router';


@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-fileupload', template: ''})
class FileUploadStubComponent {}

let comp:    AsideComponent;
let fixture: ComponentFixture<AsideComponent>;

describe('AsideComponent & TestModule', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AsideComponent,
        HomeComponent, HeaderStubComponent,FileUploadStubComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      providers:[{provide:Router}]
    })

    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AsideComponent);
      comp    = fixture.componentInstance;
    });
  }));
  tests();
});

//////// Testing w/ NO_ERRORS_SCHEMA //////
describe('AsideComponent & NO_ERRORS_SCHEMA', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideComponent, RouterLinkStubDirective ],
      providers:[{provide:Router}],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })

    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AsideComponent);
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
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('can instantiate it', () => {
    expect(comp).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    //console.log('Links in Aside Component:' + links.length);
    expect(links.length).toBe(2, 'should have 2 links');
    expect(links[0].linkParams).toBe('/', '1st link should go to HomeComponent');
    expect(links[1].linkParams).toBe('/create', '1st link should go to HomeComponent');
  });

  it('can click IFS link in template', () => {
    const createLinkDe = linkDes[1];
    const createLink = links[1];

    expect(createLink.navigatedTo).toBeNull('link should not have navigated yet');

    createLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(createLink.navigatedTo).toBe('/create');
  });
}


