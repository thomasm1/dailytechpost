import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
        if (response["GOOGLE_API_KEY"] != undefined) {
          new Promise<void>((resolve) => {
            let script: HTMLScriptElement = document.createElement("script");
            script.addEventListener("load", (r) => resolve());

            script.src = `http://maps.googleapis.com/maps/api/js?key=${response["GOOGLE_API_KEY"][0]}`; 

            document.head.appendChild(script);
          });
        }
      });
  }

  getNasaApi() {
    this.http
      .get(`${this.nasaUrl}`)
      .subscribe((response) => {
            this.nasaApi = response["NASA_API_KEY"][0];
      });
      return this.nasaApi;
  }
  getNytApi() {
    this.http
      .get(`${this.nytUrl}`)
      .subscribe((response) => {
            this.nytApi = response["NYT_API_KEY"][0];
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
