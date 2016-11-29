/* tslint:disable:no-unused-variable */

import { FileOperationHistoryService } from './file-operation-history.service';
import {FileOperationResolver} from './file-operations-resolver';
import{ Component} from '@angular/core';
import { async, ComponentFixture, inject,TestBed } from '@angular/core/testing';

import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FileOperationRecord} from './file-operation-record';

describe('Resolver: FileOperationResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileOperationResolver,{provide:FileOperationHistoryService},{provide:FileOperationRecord}]
    });
  });

  it('should ...', inject([FileOperationResolver], (resolver: FileOperationResolver) => {
    expect(resolver).toBeTruthy();
  }));

  it('should ...', inject([FileOperationHistoryService], (service: FileOperationHistoryService) => {
    expect(service).toBeTruthy();
  }));

});
