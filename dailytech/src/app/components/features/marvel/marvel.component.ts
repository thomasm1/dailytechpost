import { Component, OnInit } from '@angular/core';
import { Character } from '../../../models/Character';
import { MarvelService } from '../../../service/marvel.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  title = 'Guardians of the Galaxy API';
  constructor(private marvelService: MarvelService, ) { }

  ngOnInit() {
      // this.displayAllCharacters();
  }
    characterList: Character[] = [];  // :Groot[] = :Array:Groot
  allCharacters: Observable<Character[]> |any = this.marvelService.getCharacters();

  getCharacter() {
    console.log(this.marvelService.getCharacters());
  }
  // displayCharacters() {
  //   console.log(this.displayAllCharacters());
  // }
  characters = this.marvelService.getCharacters();

  id!: number;
  name!: string;
  type!: string;

  displayAllCharacters() {
    this.allCharacters.subscribe(
      (response: Character[]) => {
        this.characterList = response;
        console.log(this.characterList);
      },
      //function to execute when the Observabler receives
      //incorrect/faulty information -> call is unsuccessful.
      (response: any) => {
        return "Sorry it failed";
      }
    );
  }
    // grootList :Groot[] = [];  // :Groot8[] = :Array:Groot
  // allGroot :Observable<Groot[]> = this.pokeService.getAllGroot();


}

////////////////////////////////////////////////////////
// 5fbd9e22b0c348faa25fd3d07bee8248

// private key
// dce73dc128d232d3a6c22decdf3b5f272bbc5178

// http(s)://gateway.marvel.com/.
// GET /v1/public/charactersFetches lists of characters.
// GET /v1/public/characters/{characterId}
// GET /v1/public/characters/{characterId}/series
// GET /v1/public/stories/{storyId}/characters

// GET /v1/public/comics/{comicId}/characters

// 	Request Url: http://gateway.marvel.com/v1/public/comics
// 	Request Method: GET
// 	Params: {
// 	  "apikey": "your api key",
// 	  "ts": "a timestamp",
// 	  "hash": "your hash"
// 	}
// 	Headers: {
// 	  Accept: */*
// 	}
// Initial response:

// Status Code: 200
// Access-Control-Allow-Origin: *
// Date: Wed, 18 Dec 2013 22:00:55 GMT
// Connection: keep-alive
// ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
// Content-Length: 54943
// Content-Type: application/json


// 	Subsequent request:

// 	Request Url: http://gateway.marvel.com/v1/public/comics
// 	Request Method: GET
// 	Params: {
// 	  "apikey": "your api key",
// 	  "ts": "a timestamp",
// 	  "hash": "your hash"
// 	}
// 	Headers: {
// 	  Accept: */*
// 	  If-None-Match: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
// 	}


// Subsequent response:

// Status Code: 304
// Access-Control-Allow-Origin: *
// Date: Wed, 18 Dec 2013 22:03:20 GMT
// Connection: keep-alive
// ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3

// 	Cross-origin requests and JSONP
// 	Responses returned by the Marvel Comics API are compliant with the W3C CORS specification, which allows any properly-authorized requests to be made from any origin domain. This means that you should not need to wrap calls in JSONP callbacks in order to make calls from browser-based applications. If you do prefer to use JSONP, however, all endpoints will accept a callback parameter to all endpoints that will wrap results in a JSONP wrapper.

// 	Examples
// 	Without a callback:

// 	Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY
// 	Response:
// 	{
// 	  "code": 200,
// 	  "status": "Ok",
// 	  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
// 	  "data": {
// 	  … [other data points]
// 	}

// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73",
//   "extension": "jpg"
// }

