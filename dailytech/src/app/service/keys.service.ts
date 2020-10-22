import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor(
    private http: HttpClient
    ) { }

  getGoogleApi() {
    this.http
      .get(`http://54.174.82.153:8080/login/getGoogleApi`)
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
      .get(`http://54.174.82.153:8080/nasa/getNasaApi`)
      .subscribe((response) => {
        //console.log(response);
        if (response["nasaAPIKey"] != undefined) {
          new Promise((resolve) => {
            let script: HTMLScriptElement = document.createElement("script");
            script.addEventListener("load", (r) => resolve());

            script.src = `https://api.nasa.gov/planetary/apod?api_key=${response["nasaAPIKey"][0]}`;
            // script.src = `https://api.nasa.gov/planetary/apod?api_key=${environment.nasaKey}`;

            document.head.appendChild(script);
          });
        }
      });
  }

}
