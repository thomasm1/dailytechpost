import { Injectable } from '@angular/core';
import {
  ACTIVE_AUTH_PROVIDER_KEY,
  AUTH_SESSION_KEYS,
  AuthProvider,
  AuthSession,
} from './auth-session.model';

@Injectable({ providedIn: 'root' })
export class AuthSessionStorageService {
  setActiveSession(session: AuthSession): void {
    sessionStorage.setItem(
      AUTH_SESSION_KEYS[session.provider],
      JSON.stringify(session),
    );

    sessionStorage.setItem(ACTIVE_AUTH_PROVIDER_KEY, session.provider);
  }

  getActiveProvider(): AuthProvider | null {
    const provider = sessionStorage.getItem(ACTIVE_AUTH_PROVIDER_KEY);

    return provider === 'aws' ||
      provider === 'firebase' ||
      provider === 'cognito' ||
      provider === 'google'
      ? provider
      : null;
  }

  getSession(provider: AuthProvider): AuthSession | null {
    const raw = sessionStorage.getItem(AUTH_SESSION_KEYS[provider]);

    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as AuthSession;
    } catch {
      return null;
    }
  }

  getActiveSession(): AuthSession | null {
    const provider = this.getActiveProvider();
    return provider ? this.getSession(provider) : null;
  }

  clearSession(provider: AuthProvider): void {
    sessionStorage.removeItem(AUTH_SESSION_KEYS[provider]);

    if (this.getActiveProvider() === provider) {
      sessionStorage.removeItem(ACTIVE_AUTH_PROVIDER_KEY);
    }
  }

  clearAll(): void {
    Object.values(AUTH_SESSION_KEYS).forEach((key) =>
      sessionStorage.removeItem(key),
    );
    sessionStorage.removeItem(ACTIVE_AUTH_PROVIDER_KEY);
  }
}