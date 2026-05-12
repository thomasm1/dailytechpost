import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  AUTHENTICATED_USER,
  AUTH_STORAGE_KEY,
  AwsAuthenticationService,
  TOKEN
} from './aws-authentication.service';
import { environment } from '../../../environments/environment';

// Firebase session/profile behavior lives in FirebaseAuthService.
describe('AwsAuthenticationService', () => {
  let service: AwsAuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AwsAuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
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

  it('should post native JWT login credentials and store returned access token', () => {
    service.executeAuthAwsService(' admin@example.com ', 'secret').subscribe(data => {
      expect(data.accessToken).toBe('jwt-token');
    });

    const req = httpMock.expectOne(`${environment.API_URL}/users/auth/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      usernameOrEmail: 'admin@example.com',
      password: 'secret'
    });

    req.flush({ accessToken: 'jwt-token', tokenType: 'Bearer' });

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBe('true');
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBe('admin@example.com');
    expect(sessionStorage.getItem(TOKEN)).toBe('Bearer jwt-token');
  });
});
