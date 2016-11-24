import {Injectable} from '@angular/core';
import {MetaDataModel} from "../metadata/metadata.model";

@Injectable()
export class FileUploadService {

  metaDataArray : MetaDataModel[];
  fileUploadResponse: MetaDataResponseModel;

  constructor(){

  }

  InitFileUploadResponse(fileUploadMetaData: MetaDataModel): void {
    this.fileUploadResponse = new MetaDataResponseModel(fileUploadMetaData);
    this.fileUploadResponse.responseCode = "0";
    this.fileUploadResponse.totalExecutionTime = "12.12ms";
    this.fileUploadResponse.DocId = "12345";
  }

  // populateFileModel(file) {
  //   let fileReader = new FileReader();
  //   fileReader.onload = function (e) {
  //     console.log(e);
  //   };
  //
  //   let fileMetadata = new MetaDataModel(
  //     localStorage.getItem('userName'),
  //     'angular app',
  //     file.type,
  //     file.lastModifiedDate,
  //     new Date(),
  //   );
  //
  //   return fileMetadata;
  // }

  // makeFileRequest(url: string, params: Array<string>, files: Array<File>, metaDataObj) {
  //   // added params log to silence linting until we need it
  //   // params will include header options
  //   if(params){
  //     console.log(params);
  //   }
  //   const jsonMetadata = JSON.stringify(metaDataObj);
  //
  //   return new Promise((resolve, reject) => {
  //     let formData: any = new FormData();
  //     let xhr = new XMLHttpRequest();
  //     //for (let i = 0; i < files.length; i++) {
  //     formData.append('file', files[0], files[0].name);
  //     formData.append('metaData', jsonMetadata);
  //     //}
  //     console.log(formData.getAll('metaData'));
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === 4) {
  //         if (xhr.status === 200) {
  //           resolve(JSON.parse(xhr.response));
  //         } else {
  //           reject(xhr.response);
  //         }
  //       }
  //     };
  //
  //     //console.log(formData, files.length, files);
  //     xhr.open('POST', url, true);
  //     xhr.send(formData);
  //
  //   });
  // }


}

export class MetaDataResponseModel extends MetaDataModel {
  responseCode: string;
  totalExecutionTime: string;
  DocId: string;
  constructor(private _metaData: MetaDataModel){ super(_metaData.customerId, _metaData.sourceSystem, _metaData.contentType, _metaData.receivedDate, _metaData.uploadDate)}
}
