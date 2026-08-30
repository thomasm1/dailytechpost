// import { API_URL } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { is } from 'date-fns/locale/is';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'AuthenticatedUser';
export const AUTH_STORAGE_KEY = 'dailytech.auth.isAuthenticated';
export const AUTH_PROVIDER_KEY = 'dailytech.auth.provider';
export const AWS_USER_INFO_STORAGE_KEY = 'userInfoAws';

interface AwsJwtPayload {
  sub?: string;
  roles?: string[];
  iat?: number;
  exp?: number;
}

interface AwsUserInfo {
  email: string;
  roles: string[];
  issuedAt?: number;
  expiresAt?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AwsAuthenticationService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_URL;
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
          const jwtPayload = this.decodeJwtPayload(data.accessToken);
          const userInfoAws: AwsUserInfo = {
            email: jwtPayload.sub || usernameOrEmail,
            roles: jwtPayload.roles || [],
            issuedAt: jwtPayload.iat,
            expiresAt: jwtPayload.exp,
          };

          sessionStorage.setItem(AUTH_PROVIDER_KEY, 'aws');
          sessionStorage.setItem(AUTHENTICATED_USER, usernameOrEmail);
          sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
          sessionStorage.setItem(AWS_USER_INFO_STORAGE_KEY, JSON.stringify(userInfoAws));
          return data;
        }),
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem(TOKEN);
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
    return this.getAwsUserInfo()?.roles || [];
  }

  isAdminLoggedIn(): boolean {
    let isAdminLoggedIn:boolean = false;
    isAdminLoggedIn = (
      this.hasActiveSession() &&
      sessionStorage.getItem(AUTH_PROVIDER_KEY) === 'aws' &&
      this.getRoles().includes('ROLE_ADMIN')
    );
    console.log("isAdminLoggedIn: ",  isAdminLoggedIn); 
    return isAdminLoggedIn;
  }

  hasActiveSession() {
    let isActiveSession:boolean = false;
    isActiveSession = (
      sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' &&
      !!sessionStorage.getItem(TOKEN) &&
      !!this.getAuthenticatedUser()
    );
    console.log("isActiveSession: ", isActiveSession);
    return isActiveSession;
  }

  clearSession() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTH_PROVIDER_KEY);
    sessionStorage.removeItem(AWS_USER_INFO_STORAGE_KEY);
  }

  logout() {
    this.clearSession();
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
