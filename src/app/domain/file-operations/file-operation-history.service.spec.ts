/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileOperationHistoryService } from './file-operation-history.service';

describe('Service: FileOperationHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileOperationHistoryService]
    });
  });

  it('should ...', inject([FileOperationHistoryService], (service: FileOperationHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
