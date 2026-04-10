import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';
import { AwsAuthenticationService } from './aws-authentication.service';

describe('HttpIntercepterBasicAuthService', () => {
  let service: HttpIntercepterBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AwsAuthenticationService,
          useValue: jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', [
            'getAuthenticatedToken',
            'getAuthenticatedUser',
          ]),
        },
      ],
    });
    service = TestBed.inject(HttpIntercepterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
