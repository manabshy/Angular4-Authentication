/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalEventsManagerService } from './global-events-manager.service';

describe('Service: GlobalEventsManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalEventsManagerService]
    });
  });

  it('should ...', inject([GlobalEventsManagerService], (service: GlobalEventsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
