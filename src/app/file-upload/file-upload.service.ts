import {Injectable} from '@angular/core';
import {MetaDataModel, MetaDataResponseModel} from "../metadata/metadata.model";

@Injectable()
export class FileUploadService {

  metaDataArray : MetaDataModel[];
  fileUploadResponse: MetaDataResponseModel;

  constructor(){  }

  InitFileUploadResponse(fileUploadMetaData: MetaDataModel): void {
    this.fileUploadResponse = new MetaDataResponseModel(fileUploadMetaData);
    this.fileUploadResponse.utr ="4343455454323";
    this.fileUploadResponse.responseCode = "200";
    this.fileUploadResponse.totalExecutionTime = "12.12ms";
    this.fileUploadResponse.DocId = "12345";
  }


  updateMetaData(fileUpdateMetaData: MetaDataResponseModel): void{

  }
}

