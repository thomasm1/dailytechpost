import { Injectable } from '@angular/core';
import { AuthSession } from './auth-session.model';
import { AuthSessionStorageService } from './auth-session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPolicyService {
  constructor(private storage: AuthSessionStorageService) {}

  isAuthenticated(): boolean {
    const session = this.storage.getActiveSession();
    return !!session && this.isNotExpired(session);
  }

  canAccessAdmin(): boolean {
    const session = this.storage.getActiveSession();

    return (
      !!session &&
      session.roles.includes('ROLE_ADMIN') &&
      this.isNotExpired(session)
    );
  }

  canAccessMember(): boolean {
    const session = this.storage.getActiveSession();

    return (
      !!session &&
      session.provider === 'firebase' &&
      this.isNotExpired(session)
    );
  }

  hasProvider(provider: AuthSession['provider']): boolean {
    return this.storage.getActiveSession()?.provider === provider;
  }

  hasRole(role: string): boolean {
    const session = this.storage.getActiveSession();
    return !!session && session.roles.includes(role);
  }

  getActiveEmail(): string {
    return this.storage.getActiveSession()?.email || '';
  }

  getActiveToken(): string | null {
    const session = this.storage.getActiveSession();

    if (!session || !this.isNotExpired(session)) {
      return null;
    }

    return session.token;
  }

  private isNotExpired(session: AuthSession): boolean {
    if (!session.expiresAt) {
      return true;
    }

    return session.expiresAt * 1000 > Date.now();
  }
}
