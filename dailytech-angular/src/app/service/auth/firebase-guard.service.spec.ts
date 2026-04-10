import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { FirebaseGuardService } from './firebase-guard.service';
import { AwsAuthenticationService } from './aws-authentication.service';

describe('FirebaseGuardService', () => {
  let service: FirebaseGuardService;

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
        provideMockStore({ initialState: {} }),
      ],
    });
    service = TestBed.inject(FirebaseGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 
