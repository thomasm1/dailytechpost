import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class DailyTechBean {
  constructor(public post: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeParameterService(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    // })
    return this.http.get<DailyTechBean>(`http://localhost:8089/dailytech/user/${name}`,
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
    return this.http.get<DailyTechBean>('http://localhost:8089/dailytech');
    // console.log("admin");
  }
  errorService() {
    return this.http.get<DailyTechBean>('http://localhost:8089/dailytech/error');
  }
}
