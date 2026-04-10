import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AwsGuardService } from './aws-guard.service';
import { AwsAuthenticationService } from './aws-authentication.service';

describe('AwsGuardService', () => {
  let service: AwsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AwsAuthenticationService,
          useValue: jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', ['isAdminLoggedIn']),
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate']),
        },
      ],
    });
    service = TestBed.inject(AwsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
