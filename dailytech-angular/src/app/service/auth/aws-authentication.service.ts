// import { API_URL } from './../app.constants';
import { AuthSessionStorageService } from './auth-session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'AuthenticatedUser';
export const AUTH_STORAGE_KEY = 'dailytech.auth.isAuthenticated';
export const AUTH_PROVIDER_KEY = 'dailytech.auth.provider';
export const AWS_USER_INFO_STORAGE_KEY = 'userInfoAws';

interface AwsJwtPayload {
  sub?: string;
  roles?: unknown[];
  iat?: number;
  exp?: number;
}

interface AwsUserInfo {
  email: string;
  userId?: number;
  firstName?: string;
  lastName?: string;
  roles: string[];
  issuedAt?: number;
  expiresAt?: number;
}

interface AuthenticatedAwsUser {
  email: string;
  tokenJWT: string;
}

@Injectable({
  providedIn: 'root',
})
export class AwsAuthenticationService {
  baseUrl: string;

constructor(
  private http: HttpClient,
  private sessionStorageService: AuthSessionStorageService
) {
  this.baseUrl = environment.API_URL;
  this.initAuthState();
}

  // executeAuthenticationService(adminName, password) {
  // Basic Authentication
  // let basicAuthHeaderString = 'Basic ' + window.btoa(adminName + ':' + password);
  // let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   })
  // return this.http.get<BasicAuthBean>(
  //   `${this.baseUrl}/dailytech/login`,
  //   {headers}).pipe(
  //     map(
  //       data => {
  //         sessionStorage.setItem(AUTHENTICATED_USER, adminName);
  //         sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  //         return data;
  //       }
  //     )
  //   );

  executeAuthAwsService(email: string, password: string) {
    const usernameOrEmail = email.trim();

    return this.http
      .post<any>(`${this.baseUrl}/users/auth/login`, {
        usernameOrEmail,
        password,
      })
      .pipe(
        map((data) => {
          const accessToken = data.accessToken || data.tokenJWT || data.token || '';
          this.persistAwsSession(usernameOrEmail, accessToken);
          return data;
        }),
        switchMap((data) =>
          this.collectUserInfoAws().pipe(
            map(() => data),
            catchError(() => of(data)),
          ),
        ),
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.hasActiveSession()) return sessionStorage.getItem(TOKEN);
    return null;
  }

  collectUserInfoAws(): Observable<any> {
    const token = sessionStorage.getItem(TOKEN);

    if (!this.hasActiveSession() || !token) {
      return new Observable((subscriber) => {
        subscriber.error(new Error('No active AWS authentication token in session storage'));
      });
    }

    return this.http.get<any>(`${this.baseUrl}/users/me`).pipe(
      map((data) => {
        const currentInfo = this.getAwsUserInfo();
        const userInfoAws: AwsUserInfo = {
          email: data?.email || currentInfo?.email || this.getAuthenticatedUser() || '',
          userId: Number(data?.userId || currentInfo?.userId || 0),
          firstName: data?.firstName || currentInfo?.firstName,
          lastName: data?.lastName || currentInfo?.lastName,
          roles: this.normalizeRoles(data?.roles || currentInfo?.roles || []),
          issuedAt: currentInfo?.issuedAt,
          expiresAt: currentInfo?.expiresAt,
        };

        sessionStorage.setItem(AWS_USER_INFO_STORAGE_KEY, JSON.stringify(userInfoAws));
        return data;
      }),
    );
  }

  getAwsUserInfo(): AwsUserInfo | null {
    const rawValue = sessionStorage.getItem(AWS_USER_INFO_STORAGE_KEY);
    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue) as AwsUserInfo;
    } catch {
      return null;
    }
  }

  getRoles(): string[] {
    return this.normalizeRoles(this.getAwsUserInfo()?.roles || []);
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  isAdminLoggedIn(): boolean {
    let isAdminLoggedIn:boolean = false;
    isAdminLoggedIn = (
      this.hasActiveSession() &&
      sessionStorage.getItem(AUTH_PROVIDER_KEY) === 'aws' &&
      this.hasRole('ROLE_ADMIN')
    );
    console.log("isAdminLoggedIn: ",  isAdminLoggedIn); 
    return isAdminLoggedIn;
  }

  hasActiveSession() {
    const authenticatedUser = this.parseAuthenticatedAwsUser();
    let isActiveSession = false;

    if (
      sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' &&
      sessionStorage.getItem(AUTH_PROVIDER_KEY) === 'aws' &&
      !!sessionStorage.getItem(TOKEN) &&
      !!authenticatedUser
    ) {
      const jwtPayload = this.decodeJwtPayload(authenticatedUser.tokenJWT);
      isActiveSession = !!jwtPayload.exp && jwtPayload.exp * 1000 > Date.now();
    }

    console.log("isActiveSession: ", isActiveSession);
    return isActiveSession;
  }

  initAuthState(): void {
    if (sessionStorage.getItem(AUTH_PROVIDER_KEY) === 'aws' && !this.hasActiveSession()) {
      this.clearSession();
    }
  }

clearSession() {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  sessionStorage.removeItem(AUTHENTICATED_USER);
  sessionStorage.removeItem(TOKEN);
  sessionStorage.removeItem(AUTH_PROVIDER_KEY);
  sessionStorage.removeItem(AWS_USER_INFO_STORAGE_KEY);
  this.sessionStorageService.clearSession('aws');
}

  logout() {
    this.clearSession();
  }

  private persistAwsSession(email: string, tokenJWT: string): void {
    const jwtPayload = this.decodeJwtPayload(tokenJWT);
    const userInfoAws: AwsUserInfo = {
      email,
      roles: this.normalizeRoles(jwtPayload.roles || []),
      issuedAt: jwtPayload.iat,
      expiresAt: jwtPayload.exp,
    };

    sessionStorage.setItem(AUTH_PROVIDER_KEY, 'aws');
    sessionStorage.setItem(AUTHENTICATED_USER, email);
    sessionStorage.setItem(TOKEN, `Bearer ${tokenJWT}`);
    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AWS_USER_INFO_STORAGE_KEY, JSON.stringify(userInfoAws));

    this.sessionStorageService.setActiveSession({
      provider: 'aws',
      email,
      token: `Bearer ${tokenJWT}`,
      roles: userInfoAws.roles,
      issuedAt: userInfoAws.issuedAt,
      expiresAt: userInfoAws.expiresAt,
    });
  }

  private parseAuthenticatedAwsUser(): AuthenticatedAwsUser | null {
    const bearerToken = sessionStorage.getItem(TOKEN);
    const email = sessionStorage.getItem(AUTHENTICATED_USER);

    if (!bearerToken || !email || !bearerToken.startsWith('Bearer ')) {
      return null;
    }

    return {
      email,
      tokenJWT: bearerToken.substring(7),
    };
  }

  private normalizeRoles(roles: unknown): string[] {
    if (!Array.isArray(roles)) {
      return [];
    }

    return roles
      .map((role) => {
        if (typeof role === 'string') {
          return role;
        }

        if (role && typeof role === 'object' && 'name' in role) {
          return String((role as { name?: unknown }).name ?? '');
        }

        return '';
      })
      .filter((roleName) => roleName.length > 0);
  }

  private decodeJwtPayload(token: string): AwsJwtPayload {
    try {
      const payload = token.split('.')[1];
      const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
      const base64 = normalizedPayload.padEnd(
        normalizedPayload.length + ((4 - normalizedPayload.length % 4) % 4),
        '=',
      );
      const json = decodeURIComponent(
        atob(base64)
          .split('')
          .map((character) => `%${character.charCodeAt(0).toString(16).padStart(2, '0')}`)
          .join(''),
      );
      return JSON.parse(json) as AwsJwtPayload;
    } catch {
      return {};
    }
  }
}

export class BasicAuthBean {
  constructor(public message: string) {}
}
