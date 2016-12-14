/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Directive} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MetaDataComponent } from '../metadata/metadata.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { HeaderComponent } from '../shared/header/header.component';

// import { NavigationComponent} from '../navigation/navigation.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetaDataModel} from '../metadata/metadata.model';
import { LoginService} from '../login/login.service';
import { FileUploadService} from '../file-upload/file-upload.service';
import { Router, RouterModule, ActivatedRoute, RouterLink } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Provider, Component } from '@angular/core';

@Component({selector: 'app-aside', template: ''})
class AsideStubComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let logoutBtn: DebugElement;



  beforeEach(async(() => {
    TestBed.configureTestingModule( {
      declarations: [ HomeComponent, FileUploadComponent, MetaDataComponent, AsideStubComponent, HeaderComponent ],
      providers: [{provide: FileUploadService}, {provide: LoginService},
                  {provide: Router}, {provide: ActivatedRoute}, {provide: LocationStrategy}, FormBuilder  ],
      imports: [HttpModule, ReactiveFormsModule, FormsModule, RouterModule ]
    })
    .compileComponents();
    fixture   = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    logoutBtn = fixture.debugElement.query(By.css('.btn'));
    fixture.detectChanges();

  }));

  it('check HomeComponent', () => {
    expect(component).toBeTruthy();
  });

});
