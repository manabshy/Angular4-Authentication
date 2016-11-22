/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from '@angular/router';
import { FileUploadComponent } from './file-upload.component';
import { MetadataComponent } from '../metadata/metadata.component';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';



describe('FileUploadComponent', () => {
  let component:FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async(() => {

    let fileUploadServiceStub: {
      isFileUploaded: boolean;
      fileMeta: {
        customerId: string,
        sourceSystem: string,
        receivedDate: string,
        uploadDate: string,
        contentType: string,
      }
    };


    TestBed.configureTestingModule({
      declarations: [ FileUploadComponent,MetadataComponent ],
      providers: [{provide: Router}, {provide: FileUploadComponent, usesValue: fileUploadServiceStub}],
      imports:[ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoud have a file upload input', () => {

  });
  it('should accept a file for upload', () => {
    //var file = new File()
  });
  
});

