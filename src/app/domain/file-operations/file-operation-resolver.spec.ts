/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileOperationHistoryService } from './file-operation-history.service';
import {FileOperationResolver} from './file-operations-resolver';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

describe('Resolver: FileOperationResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileOperationResolver,{provide:FileOperationHistoryService}]
    });
  });

  it('should ...', inject([FileOperationResolver], (resolver: FileOperationResolver) => {
    expect(resolver).toBeTruthy();
  }));
  it('should ...', inject([FileOperationHistoryService], (service: FileOperationHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
