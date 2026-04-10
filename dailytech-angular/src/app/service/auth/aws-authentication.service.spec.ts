import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AwsAuthenticationService } from './aws-authentication.service';

describe('AwsAuthenticationService', () => {
  let service: AwsAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AwsAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
