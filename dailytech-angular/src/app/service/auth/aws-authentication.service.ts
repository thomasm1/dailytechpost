// import { API_URL } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'AuthenticatedUser'
export const AUTH_STORAGE_KEY = 'dailytech.auth.isAuthenticated'

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
    return sessionStorage.getItem(AUTHENTICATED_USER)
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

  clearSession() {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  logout(){
    this.clearSession()
  }

}

export class BasicAuthBean{
  constructor(public message:string) { }
}
