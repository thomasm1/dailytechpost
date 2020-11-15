import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class DailyTechBean {
  constructor(public post: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  baseUrl:string;

  constructor(
    private http: HttpClient
  ) {

    this.baseUrl = environment.API_URL;

   }

  executeParameterService(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<DailyTechBean>(`${this.baseUrl}/dailytech/user/${name}`,
    // {headers: header}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user'
  //   let password = 'pass'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  executeAdminService() {
    return this.http.get<DailyTechBean>(`${this.baseUrl}/dailytech`);
  }
  errorService() {
    return this.http.get<DailyTechBean>(`${this.baseUrl}/dailytech/error`);
  }
}
