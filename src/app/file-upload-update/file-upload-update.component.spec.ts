/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadUpdateComponent } from './file-upload-update.component';
import {NavigationComponent} from "../navigation/navigation.component";

describe('FileUploadUpdateComponent', () => {
  let component: FileUploadUpdateComponent;
  let fixture: ComponentFixture<FileUploadUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadUpdateComponent, NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
