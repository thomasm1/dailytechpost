import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  AUTHENTICATED_USER,
  AUTH_PROVIDER_KEY,
  AUTH_STORAGE_KEY,
  AWS_USER_INFO_STORAGE_KEY,
  AwsAuthenticationService,
  TOKEN
} from './aws-authentication.service';
import { environment } from '../../../environments/environment';

// Firebase session/profile behavior lives in FirebaseAuthService.
describe('AwsAuthenticationService', () => {
  let service: AwsAuthenticationService;
  let httpMock: HttpTestingController;

  function createToken(payload: Record<string, unknown>): string {
    const encodedPayload = btoa(JSON.stringify(payload))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return `header.${encodedPayload}.signature`;
  }

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
    const accessToken = createToken({
      sub: 'writer@example.com',
      roles: ['ROLE_USER'],
      iat: Math.floor(Date.now() / 1000) - 60,
      exp: Math.floor(Date.now() / 1000) + 3600
    });

    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTH_PROVIDER_KEY, 'aws');
    sessionStorage.setItem(AUTHENTICATED_USER, 'writer@example.com');
    sessionStorage.setItem(TOKEN, `Bearer ${accessToken}`);

    expect(service.getAuthenticatedUser()).toBe('writer@example.com');
    expect(service.getAuthenticatedToken()).toBe(`Bearer ${accessToken}`);
    expect(service.hasActiveSession()).toBeTrue();
  });

  it('should clear sessionStorage auth details on logout', async () => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTHENTICATED_USER, 'writer@example.com');
    sessionStorage.setItem(TOKEN, `Bearer ${createToken({
      sub: 'writer@example.com',
      roles: ['ROLE_USER'],
      iat: Math.floor(Date.now() / 1000) - 60,
      exp: Math.floor(Date.now() / 1000) + 3600
    })}`);

    service.logout();

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBeNull();
    expect(sessionStorage.getItem(TOKEN)).toBeNull();
    expect(service.hasActiveSession()).toBeFalse();
  });

  it('should post native JWT login credentials and store returned access token', () => {
    const issuedAt = Math.floor(Date.now() / 1000) - 60;
    const expiresAt = Math.floor(Date.now() / 1000) + 3600;
    const accessToken = createToken({
      sub: 'admin@example.com',
      roles: ['ROLE_ADMIN'],
      iat: issuedAt,
      exp: expiresAt
    });

    service.executeAuthAwsService(' admin@example.com ', 'secret').subscribe(data => {
      expect(data.accessToken).toBe(accessToken);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/users/auth/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({
      usernameOrEmail: 'admin@example.com',
      password: 'secret'
    });

    req.flush({ accessToken, tokenType: 'Bearer' });

    const meReq = httpMock.expectOne(`${environment.API_URL}/users/me`);
    expect(meReq.request.method).toBe('GET');
    meReq.flush({
      email: 'admin@example.com',
      userId: 1,
      firstName: 'Thomas',
      lastName: 'Maestas',
      roles: [{ name: 'ROLE_ADMIN' }]
    });

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBe('true');
    expect(sessionStorage.getItem(AUTH_PROVIDER_KEY)).toBe('aws');
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBe('admin@example.com');
    expect(sessionStorage.getItem(TOKEN)).toBe(`Bearer ${accessToken}`);
    expect(JSON.parse(sessionStorage.getItem(AWS_USER_INFO_STORAGE_KEY) || '{}')).toEqual({
      email: 'admin@example.com',
      userId: 1,
      firstName: 'Thomas',
      lastName: 'Maestas',
      roles: ['ROLE_ADMIN'],
      issuedAt,
      expiresAt
    });
    expect(service.getRoles()).toEqual(['ROLE_ADMIN']);
    expect(service.isAdminLoggedIn()).toBeTrue();
  });
});
