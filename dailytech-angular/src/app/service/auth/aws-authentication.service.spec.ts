import { TestBed } from '@angular/core/testing';

import { AwsAuthenticationService } from './aws-authentication.service';

describe('AwsAuthenticationService', () => {
  let service: AwsAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
