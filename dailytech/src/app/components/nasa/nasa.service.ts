import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KeysService } from 'src/app/service/keys.service';
import { Nasa } from '../../models/nasa.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  nasaKey: string = '';
  private newId: number;
  private aws_url;
  private json_url;
  private listNasa: Nasa[] = [];
  object;

  constructor(private http: HttpClient, private keys: KeysService) {
    this.json_url = environment.json_url; //local-server
    this.aws_url = environment.aws_url; // AWS ENDPOINT

    this.getNasaStores().subscribe(
      (response) => {
        this.listNasa = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getNasaKey() {
    this.nasaKey = this.keys.getNasaApi();
    return this.nasaKey;
  }
  getNasa() {
    this.getNasaKey();
    console.log(this.nasaKey);

    this.http
      .get(`https://api.nasa.gov/planetary/apod?api_key=${this.nasaKey}`)
      .subscribe((response) => {
        this.object = response;
        console.log("getNasa: "+ this.object);
      });
    return this.object;
  }

  getNasaStores(): Observable<Nasa[]> {
    // return this.http.get<Nasa[]>(this.json_url)
    return this.http.get<Nasa[]>(this.aws_url)

    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })
    );  
  }

  storeNasa(nasa: Nasa): Observable<Nasa>  {
    this.newId = this.listNasa.length + 1;
    console.log("id: "+this.newId+" title: " +nasa.title);
    nasa.id = this.newId;
    console.log(nasa.id);
    // return this.http.post<Nasa>(`${this.json_url}/${this.newId}`,
      return this.http.post<Nasa>(`${this.aws_url}`, nasa
    //   , {
    //   headers: new HttpHeaders({
    //     Accept: 'application/json',    // NO LONGER NEED WITH HTTP-INTERCEPTER ////////////
    //   }),
    // }
    )
    .pipe( 
      catchError(err => {
      throw 'error in source. Details: ' + err;
    }));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message)
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    // return new ErrorObservable('Oops, there is a problem with the
       throw 'Oops, there is a problem with the service ... IT is notified & working on it. Please try again later, thanks :-)'
  }
}
