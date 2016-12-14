import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HomeComponent } from './home.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';

import { MetaDataComponent } from '../metadata/metadata.component';
import { UploadSuccessComponent } from '../upload-success/upload-success.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
 imports: [FormsModule, BrowserModule, ReactiveFormsModule, RouterModule ],
  declarations: [
    HomeComponent,
    AsideComponent,
    HeaderComponent,
    FileUploadComponent,
    MetaDataComponent,
    UploadSuccessComponent
    ],
})
export class HomeModule {}
