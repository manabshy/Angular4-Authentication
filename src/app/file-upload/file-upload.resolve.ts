import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {FileUploadService} from './file-upload.service';

@Injectable()
export class FileUploadResolve implements Resolve<any> {

  constructor(private _fileUploadService: FileUploadService){}

  resolve(route: ActivatedRouteSnapshot) {

    let metaDataResponseModel = this._fileUploadService.fileUploadResponse;
    console.log('in resolver: ', metaDataResponseModel);
    return metaDataResponseModel;
  }

}

