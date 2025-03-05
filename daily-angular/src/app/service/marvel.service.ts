import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
import { Groot } from '../models/Groot'; 
import { environment } from '../../environments/environment';

// @Injectable is a decorator that marks a class as a target for
// dependency injection. The class needs to have the HttpClient
// object injected into it. This class is a candidate for dependency
// injection because it is declared inside the AppModule's providers array.
@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  baseUrl: string;
  marvel_Key: string;
   
  marvelHash: string = 'AB967B3F3F478EDC1B44816D9BDCBEBA';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {

 
    this.marvel_Key = environment.marvelKey;
    // this.hash = environment.marvelHash;
  }

  // addCharacter(char :Character) :Observable<Character> {
  //   return this.http.post<Character>("http://localhost:8080/GrootApp/addCharacters.do", char, {headers: this.headers});
  // }

  // getGroot= function() {
  //   console.log(this.title);
  // }
  // ts: any = Math.floor(Date.now() / 1000);
  ts: number = 1;
  sts: string = "1";
  // new Date().getTime() 
  // new Date().valueOf()
  // NASA
  //   let url = "https://api.nasa.gov/planetary/apod?api_key=mF6DQEqY3WtCubgab5P2otQQ6bP1b8nY24VmiJw0";
  // STAR WARS 
  //  xhttp.open("GET", "https://swapi.co/api/people/" + randomNum + "/?format=json", true);
  /*  char.name;   char.height;   char.eye_color; */

  getCharacters =  () => {
    return this.http.get(`http://gateway.marvel.com/v1/public/characters?ts=${this.sts}&apikey=${this.marvel_Key}&hash=${this.marvelHash}`);              
  }

  getPhotos(albumId: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    // return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

  }
 

  getStarWars =  () => {
    return this.http.get('https://swapi.co/api/people/1/?format=json');
  }
 
}
