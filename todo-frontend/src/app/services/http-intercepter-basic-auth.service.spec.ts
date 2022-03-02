import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';

describe('HttpIntercepterBasicAuthService', () => {
  let service: HttpIntercepterBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
