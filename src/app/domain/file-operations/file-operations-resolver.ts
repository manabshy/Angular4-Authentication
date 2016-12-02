import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FileOperationHistoryService} from './file-operation-history.service';
import {FileOperationRecord} from './file-operation-record';


@Injectable()
export class FileOperationResolver implements  Resolve <any> {

      private service: FileOperationHistoryService;

       constructor(private  _service: FileOperationHistoryService) {
              this.service = _service;
       }

       resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise < FileOperationRecord > {

           return Promise.resolve( this.service.getRecordbyDocID(route.params['documentId']));

         };

}
