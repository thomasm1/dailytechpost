import { TestBed } from '@angular/core/testing';

import { AuthPolicyService } from './auth-policy.service';
import { AuthSessionStorageService } from './auth-session-storage.service';
import { AuthProvider, AuthSession } from './auth-session.model';

describe('AuthPolicyService', () => {
  let service: AuthPolicyService;
  let storage: AuthSessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPolicyService);
    storage = TestBed.inject(AuthSessionStorageService);
    sessionStorage.clear();
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  function setSession(provider: AuthProvider, roles: string[], expiresAt?: number): void {
    const session: AuthSession = {
      provider,
      email: `${provider}@example.com`,
      token: `Bearer ${provider}-token`,
      roles,
      expiresAt,
    };

    storage.setActiveSession(session);
  }

  it('should allow admin access for any active provider with ROLE_ADMIN', () => {
    setSession('firebase', ['ROLE_ADMIN']);

    expect(service.canAccessAdmin()).toBeTrue();
  });

  it('should deny admin access when ROLE_ADMIN is missing', () => {
    setSession('aws', ['ROLE_USER']);

    expect(service.canAccessAdmin()).toBeFalse();
  });

  it('should not return an expired active token', () => {
    setSession('aws', ['ROLE_ADMIN'], Math.floor(Date.now() / 1000) - 60);

    expect(service.canAccessAdmin()).toBeFalse();
    expect(service.getActiveToken()).toBeNull();
  });
});
