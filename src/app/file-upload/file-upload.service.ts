import {Injectable} from '@angular/core';


@Injectable()
export class FileUploadService {

  constructor() {
  }
  populateFileModel(file) {
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      console.log(e);
    };
    let fileMetadata = {
      customerId: 'userModel.username',
      sourceSystem: 'angular app',
      receivedDate: file.lastModifiedDate,
      uploadDate: new Date().toString(),
      contentType: file.type,
    };
    const jsonMetadata = JSON.stringify(fileMetadata);
    console.log(jsonMetadata);

    return jsonMetadata;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    // added params log to silence linting until we need it
    // params will include header options
    if(params){
      console.log(params);
    }

    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i].name);
        formData.append('metadata[]', this.populateFileModel(files[i]));
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
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }

}
