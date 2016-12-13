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

export class MetaDataService {

  metaDataArray : MetaDataModel[];
  fileUploadResponse: MetaDataResponseModel;

  constructor(private _http: Http, private appConfig: AppConfigs, private httpClient: HttpClient) {  }

  InitFileUploadResponse(fileUploadMetaData: MetaDataModel): void { }

  updateMetaData(fileUpdateMetaData: MetaDataResponseModel): void { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('joe:bloggspwd'));
  }
    
  populateFileModel(file) {
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

    const jsonMetadata = JSON.stringify(fileMetadata);

    return jsonMetadata;
  }

  updateFileRequestXHR(params: Array<string>, files: Array<File>, documentId:string) {
     // added params log to silence linting until we need it
     // params will include header options
     if(params){
       console.log('params:updateFileRequestXHR::',  params);
     }
     
     let formData: any = new FormData();
     for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i], files[i].name);
      formData.append('metaData', this.populateFileModel(files[i]));
     }

     return this._http.put(this.appConfig.updateUri + documentId, formData, this.httpClient.getHeaders() )
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
