import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<DailyTechBean>(`http://localhost:8089/dailytech/user/${name}`);
    // console.log("admin");
  }
  executeAdminService() {
    return this.http.get<DailyTechBean>('http://localhost:8089/dailytech');
    // console.log("admin");
  }
  errorService() {
    return this.http.get<DailyTechBean>('http://localhost:8089/dailytech/error');
  }
}
