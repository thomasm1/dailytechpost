// import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'AuthenticatedUser'
export const AUTH_STORAGE_KEY = 'dailytech.auth.isAuthenticated'
export const FIREBASE_USER_INFO_STORAGE_KEY = 'userInfoFirebase'

@Injectable({
  providedIn: 'root'
})


export class AwsAuthenticationService {

   baseUrl:string;

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

  executeAuthAwsService(email:string, password:string) {
    return this.http.post<any>(
        `${this.baseUrl}/auth/login`,{
          emailOrEmail: email,
          password
        }).pipe(
          map(
            data => {
              sessionStorage.setItem(AUTHENTICATED_USER, email);
              sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
              sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
              return data;
            }
          )
        );

  }

  getAuthenticatedUser() {
    const firebaseUserInfo = this.getFirebaseUserInfo();
    return firebaseUserInfo?.email || sessionStorage.getItem(AUTHENTICATED_USER)
  }
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isAdminLoggedIn() {
    return this.hasActiveSession()
  }

  hasActiveSession() {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true'
      && !!sessionStorage.getItem(TOKEN)
      && !!this.getAuthenticatedUser()
  }

  async persistFirebaseSession(user: any): Promise<void> {
    const tokenResult = await user.getIdTokenResult();
    const email = user.email || tokenResult.claims?.email || '';
    const userInfoFirebase = {
      email,
      uid: user.uid,
      permissions: tokenResult.claims || {},
      claims: tokenResult.claims || {},
      expirationTime: tokenResult.expirationTime,
      issuedAtTime: tokenResult.issuedAtTime,
      signInProvider: tokenResult.signInProvider,
      signInSecondFactor: tokenResult.signInSecondFactor
    };

    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTHENTICATED_USER, email);
    sessionStorage.setItem(TOKEN, `Bearer ${tokenResult.token}`);
    sessionStorage.setItem(FIREBASE_USER_INFO_STORAGE_KEY, JSON.stringify(userInfoFirebase));
  }

  getFirebaseUserInfo(): any | null {
    const rawValue = sessionStorage.getItem(FIREBASE_USER_INFO_STORAGE_KEY);
    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue);
    } catch (error) {
      return null;
    }
  }

  clearSession() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
    sessionStorage.removeItem(FIREBASE_USER_INFO_STORAGE_KEY)
  }
  logout(){
    this.clearSession()
  }

}

export class BasicAuthBean{
  constructor(public message:string) { }
}
