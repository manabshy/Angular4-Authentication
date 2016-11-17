/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';

describe('Service: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [ HttpModule ]
    });
  });

  it('should check for LoginService', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
