// import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'AuthenticatedUser'

@Injectable({
  providedIn: 'root'
})


export class AdminAuthenticationService {

  baseUrl:string;

  constructor(private http: HttpClient) {

    this.baseUrl = environment.API_URL;

   }

  executeAuthenticationService(adminName, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(adminName + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.http.get<BasicAuthBean>(
      `${this.baseUrl}/dailytech/login`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, adminName);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
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
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class BasicAuthBean{
  constructor(public message:string) { }
}
