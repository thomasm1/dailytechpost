import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  nasaUrl:string = '';
  googleUrl:string = '';
  nytUrl: string = '';

  nasaApi:string = '';
  nytApi: string = '';
 //crupto
      
 private rinkebyUrl = environment.rinkebyUrl;
 moralisApi:string =  `${environment.cle_url}/getMoralisApi`;
 moralisKey:string = "";
  constructor(
    private http: HttpClient,
    ) {
      this.googleUrl = environment.google_url;
      this.nasaUrl = environment.nasa_url;
      this.nytUrl = environment.nyt_url;
     

    }

  getGoogleApi() {
    this.http
      .get(`${this.googleUrl}`)
      .subscribe((response) => {
        //console.log(response);
        if (response["googleMapAPIKey"] != undefined) {
          new Promise<void>((resolve) => {
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
      .get(`${this.nasaUrl}`)
      .subscribe((response) => {
            // console.log(response["nasaAPIKey"][0]);
            this.nasaApi = response["nasaAPIKey"][0];
      });
      return this.nasaApi;
  }
  getNytApi() {
    this.http
      .get(`${this.nytUrl}`)
      .subscribe((response) => {
            // console.log(response["NYT_API"][0]);
            this.nytApi = response["NYT_API"][0];
      });
      return this.nytApi;
  }
  
  getMoralisKey() {
    this.http.get(`${this.moralisApi}`)
    .subscribe((data:any) => {
      if(data["MORALIS_API_KEY"] != undefined){
        this.moralisKey = data["MORALIS_API_KEY"][0];
      }
      });
      return this.moralisKey;
  } 

}
