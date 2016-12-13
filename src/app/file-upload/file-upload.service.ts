import {Injectable} from '@angular/core';
import {MetaDataModel, MetaDataResponseModel} from "../metadata/metadata.model";

@Injectable()
export class FileUploadService {

  metaDataArray : MetaDataModel[];
  fileUploadResponse: MetaDataResponseModel;
  uploadUrl: string = "http://172.19.32.45:8080/ingestion-service-web/igs/document/upload";

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
    // console.log(jsonMetadata);

    return jsonMetadata;
  }

  makeFileRequestXHR(params: Array<string>, files: Array<File>) {
    // added params log to silence linting until we need it
    // params will include header options
    if(params){
      // console.log(params);
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
          if (xhr.status === 201) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      let token: string = btoa('joe:bloggspwd');
      xhr.open('POST', this.uploadUrl, true);
      xhr.setRequestHeader('Authorization', 'Basic ' + token);
      xhr.send(formData);
    });
  }
}

