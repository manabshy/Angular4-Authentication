import {Injectable} from '@angular/core';
import {MetaDataModel, MetaDataResponseModel} from "../metadata/metadata.model";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class FileUploadService {

  metaDataArray : MetaDataModel[];
  fileUploadResponse: MetaDataResponseModel;
  fileUploadEndPoint: string = 'http://172.19.32.45:8080/ingestion-service-web/igs/document/upload/';

  constructor(private _http: Http){  }

  InitFileUploadResponse(fileUploadMetaData: MetaDataModel): void {
    //this.fileUploadResponse = new MetaDataResponseModel(fileUploadMetaData);
    // this.fileUploadResponse.utr ="4343455454323";
    // this.fileUploadResponse.responseCode = "200";
    // this.fileUploadResponse.totalExecutionTime = "12.12ms";
    // this.fileUploadResponse.DocId = "12345";
  }

  updateMetaData(fileUpdateMetaData: MetaDataResponseModel): void{
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('joe:bloggspwd'));
  }

  makeFileRequest(fileUploadMetaData: MetaDataModel, fileUploadArray: Array<any>): Observable<MetaDataResponseModel> {
    console.log("in service makeFileRequest:", fileUploadMetaData, fileUploadArray[0]);
    let headers = new Headers({'Content-Type' : 'multipart/form-data', 'file': fileUploadArray[0]});
    this.createAuthorizationHeader(headers);
    // let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(fileUploadMetaData);

    return this._http.post(this.fileUploadEndPoint, body, {headers: headers})
      .map((res: Response) =>  {
      console.log("in service response:");
      this.fileUploadResponse = <MetaDataResponseModel>res.json();
      return <MetaDataResponseModel>res.json();
    })
      .catch(this.handleError);
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
    console.log(jsonMetadata);

    return jsonMetadata;
  }

  makeFileRequestXHR(params: Array<string>, files: Array<File>) {
    // added params log to silence linting until we need it
    // params will include header options
    if(params){
      console.log(params);
    }

    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i], files[i].name);
        formData.append('metaData', this.populateFileModel(files[i]));
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      console.log(formData, files.length, files);
      let token: string = btoa('joe:bloggspwd');
      xhr.open('POST', this.fileUploadEndPoint, true);
      xhr.setRequestHeader('Authorization', 'Basic ' + token);
      xhr.send(formData);
    });
  }

  private handleError(error: Response) {
    console.log("in service error: ", error);
    return Observable.throw(error.json() || 'server error');
  }

}

