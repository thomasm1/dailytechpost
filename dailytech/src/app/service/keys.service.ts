import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  nasaApi:string = '';
  googleApi:string = '';
  constructor(
    private http: HttpClient,
    ) {
      this.googleApi = environment.google_url;
      this.nasaApi = environment.nasa_url;
    }

  getGoogleApi() {
    this.http
      .get(`${this.googleApi}`)
      .subscribe((response) => {
        //console.log(response);
        if (response["googleMapAPIKey"] != undefined) {
          new Promise((resolve) => {
            let script: HTMLScriptElement = document.createElement("script");
            script.addEventListener("load", (r) => resolve());

            script.src = `http://maps.googleapis.com/maps/api/js?key=${response["googleMapAPIKey"][0]}`;
            // script.src = `http://maps.googleapis.com/maps/api/js?key=${environment.googleMapAPIKey}`;

            document.head.appendChild(script);
          });
        }
      });
  }

  getNasaApi() {
    this.http
      .get(`${this.nasaApi}`)
      .subscribe((response) => {
            console.log(response["nasaAPIKey"][0]);
            this.nasaApi = response["nasaAPIKey"][0];
      });
      return this.nasaApi;
  }
}
