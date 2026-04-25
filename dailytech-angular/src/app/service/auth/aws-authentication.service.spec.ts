import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {
  AUTHENTICATED_USER,
  AUTH_STORAGE_KEY,
  AwsAuthenticationService,
  FIREBASE_USER_INFO_STORAGE_KEY,
  TOKEN
} from './aws-authentication.service';

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

  it('should persist Firebase session details in sessionStorage', async () => {
    const firebaseUser = {
      email: 'writer@example.com',
      uid: 'firebase-uid-1',
      getIdTokenResult: () => Promise.resolve({
        token: 'firebase-jwt',
        claims: {
          email: 'writer@example.com',
          admin: false
        },
        expirationTime: 'Sat, 25 Apr 2026 23:00:00 GMT',
        issuedAtTime: 'Sat, 25 Apr 2026 22:00:00 GMT',
        signInProvider: 'password',
        signInSecondFactor: null
      })
    };

    await service.persistFirebaseSession(firebaseUser);

    const userInfo = JSON.parse(sessionStorage.getItem(FIREBASE_USER_INFO_STORAGE_KEY) || '{}');
    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBe('true');
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBe('writer@example.com');
    expect(sessionStorage.getItem(TOKEN)).toBe('Bearer firebase-jwt');
    expect(userInfo.email).toBe('writer@example.com');
    expect(userInfo.permissions.admin).toBeFalse();
    expect(service.getAuthenticatedUser()).toBe('writer@example.com');
    expect(service.hasActiveSession()).toBeTrue();
  });

  it('should clear sessionStorage auth details on logout', async () => {
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTHENTICATED_USER, 'writer@example.com');
    sessionStorage.setItem(TOKEN, 'Bearer token');
    sessionStorage.setItem(FIREBASE_USER_INFO_STORAGE_KEY, JSON.stringify({ email: 'writer@example.com' }));

    service.logout();

    expect(sessionStorage.getItem(AUTH_STORAGE_KEY)).toBeNull();
    expect(sessionStorage.getItem(AUTHENTICATED_USER)).toBeNull();
    expect(sessionStorage.getItem(TOKEN)).toBeNull();
    expect(sessionStorage.getItem(FIREBASE_USER_INFO_STORAGE_KEY)).toBeNull();
    expect(service.hasActiveSession()).toBeFalse();
  });
});
