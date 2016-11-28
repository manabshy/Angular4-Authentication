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
  fileUploadEndPoint: string = 'http://172.19.32.73:8081/ingestion-service-web/igs/document/upload';

  constructor(private _http: Http){  }

  InitFileUploadResponse(fileUploadMetaData: MetaDataModel): void {
    this.fileUploadResponse = new MetaDataResponseModel(fileUploadMetaData);
    this.fileUploadResponse.utr ="4343455454323";
    this.fileUploadResponse.responseCode = "200";
    this.fileUploadResponse.totalExecutionTime = "12.12ms";
    this.fileUploadResponse.DocId = "12345";
  }

  updateMetaData(fileUpdateMetaData: MetaDataResponseModel): void{
  }

  makeFileRequest(fileUploadMetaData: MetaDataModel): Observable<MetaDataResponseModel> {
    let headers = new Headers({'Content-Type' : 'application/json'});
    headers.append('Authorization', 'Basic ' + 'am9lOmJsb2dnc3B3ZA==​');
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(fileUploadMetaData);

    return this._http.post(this.fileUploadEndPoint, body, headers)
      .map((res: Response) =>  {
      console.log("got response:");
      this.fileUploadResponse = <MetaDataResponseModel>res.json();
      return <MetaDataResponseModel>res.json();
    })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log("upload error: ", error);
    return Observable.throw(error.json() || 'server error');
  }

}

