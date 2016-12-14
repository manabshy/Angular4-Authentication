import {Injectable} from '@angular/core';
import {MetaDataModel, MetaDataResponseModel} from '../metadata/metadata.model';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {HttpClient} from '../core/http-client'

import { AppConfigs } from '../app.config'

@Injectable()
export class FileUploadService {

  metaDataArray : MetaDataModel[];
  fileUploadResponse: MetaDataResponseModel;

  constructor(private _http: Http, private appConfig: AppConfigs, private httpClient: HttpClient){  }

  InitFileUploadResponse(fileUploadMetaData: MetaDataModel): void {
    // this.fileUploadResponse = new MetaDataResponseModel(fileUploadMetaData);
    // this.fileUploadResponse.utr ='4343455454323';
    // this.fileUploadResponse.responseCode = '200';
    // this.fileUploadResponse.totalExecutionTime = '12.12ms';
    // this.fileUploadResponse.DocId = '12345';
  }

  updateMetaData(fileUpdateMetaData: MetaDataResponseModel): void{
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('joe:bloggspwd'));
  }

  populateFileModel(file, metadata) {
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e);
    };

    let fileMetadata = new MetaDataModel(
      'customer1',
      'angular app',
      file.type,
      file.lastModifiedDate
    );

    if(metadata) {
      fileMetadata.customerId = metadata.customerId;
      fileMetadata.sourceSystem =  metadata.sourceSystem;
    }

    const jsonMetadata = JSON.stringify(fileMetadata);
    return jsonMetadata;
  }

  makeFileRequestXHR(params: Array<string>, files: Array<File>) {
    // added params log to silence linting until we need it
    // params will include header options

    let formData: any = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i], files[i].name);
      formData.append('metaData', this.populateFileModel(files[i], null));
    }

    return this._http.post(this.appConfig.uploadUri, formData, this.httpClient.getHeaders() )
        .map((res: Response) =>  {
          console.log('in service response:');
          this.fileUploadResponse = <MetaDataResponseModel>res.json();
          return <MetaDataResponseModel>res.json();
        })
        .catch(this.handleError)
  }

  updateFileRequestXHR(params: Array<string>, files: Array<File>, metadata: MetaDataResponseModel) {
     // added params log to silence linting until we need it
     // params will include header options
     
     let formData: any = new FormData();
     if (files.length) {
       for (let i = 0; i < files.length; i++) {
          formData.append('file', files[i], files[i].name);
          formData.append('metaData', this.populateFileModel(files[i], metadata) );
        }
     } else if (metadata) {
         formData.append('metaData', JSON.stringify(metadata) );
     }

     return this._http.put(this.appConfig.updateUri + metadata.documentId, formData, this.httpClient.getHeaders() )
        .map((res: Response) =>  {
          console.log('in service response:');
          this.fileUploadResponse = <MetaDataResponseModel>res.json();
          return <MetaDataResponseModel>res.json();
        })
        .catch(this.handleError)
   }

  private handleError(error: Response) {
    console.log('in service error: ', error);
    return Observable.throw(error.json() || 'server error');
  }

}

