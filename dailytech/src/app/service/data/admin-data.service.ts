import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeAdminService() {
   return this.http.get('http://localhost:8089/dailytech'); // /user/{name}')
    // console.log("admin");
  }
}
