import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {
  AUTHENTICATED_USER,
  AUTH_STORAGE_KEY,
  AwsAuthenticationService,
  TOKEN
} from './aws-authentication.service';

// Firebase session/profile behavior lives in FirebaseAuthService.
describe('AwsAuthenticationService', () => {
  let service: AwsAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AwsAuthenticationService);
  });

  afterEach(() => {
    service.clearSession();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should report an active session when auth storage has user and token', () => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTHENTICATED_USER, 'writer@example.com');
    sessionStorage.setItem(TOKEN, 'Bearer token');

    expect(service.getAuthenticatedUser()).toBe('writer@example.com');
    expect(service.getAuthenticatedToken()).toBe('Bearer token');
    expect(service.hasActiveSession()).toBeTrue();
  });

  it('should clear sessionStorage auth details on logout', async () => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTHENTICATED_USER, 'writer@example.com');
    sessionStorage.setItem(TOKEN, 'Bearer token');

    service.logout();

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBeNull();
    expect(sessionStorage.getItem(TOKEN)).toBeNull();
    expect(service.hasActiveSession()).toBeFalse();
  });
});
