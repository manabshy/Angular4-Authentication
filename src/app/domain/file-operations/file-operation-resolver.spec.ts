/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileOperationHistoryService } from './file-operation-history.service';
import {FileOperationResolver} from './file-operations-resolver';

describe('Resolver: FileOperationResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileOperationResolver]
    });
  });

  it('should ...', inject([FileOperationResolver], (resolver: FileOperationResolver) => {
    expect(resolver).toBeTruthy();
  }));
  it('should ...', inject([FileOperationHistoryService], (service: FileOperationHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
