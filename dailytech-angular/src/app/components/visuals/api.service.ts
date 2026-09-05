import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { retry } from 'rxjs/internal/operators/retry';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  getJsonDataFromUrl(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(
        retry(3),
        map((data) => {
          // console.log('covid data:', data);
          return data;
        })
      );
  }

  getDataArray(url?:string): Observable<number[]> {
    url = url ||  'assets/data/data-demo.json';
    return this.http.get<number[]>(url)
    .pipe(
      retry(3),
      map((answer) =>  answer)
    );
  }
 
  getD3CsvParseFromUrl(url: string): Observable<any[]> {
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        retry(3),
        map((csv) => d3.csvParse(csv))
      );
  }
 
 
    getParsedIrisCsv(url?: string): Observable<any> {
    url = url || 'assets/data-csv/data-iris.csv';
    return this.http.get(url, { responseType: 'text' })
    .pipe(
      retry(3),
      map((csv) => 
        csv.split('\n').slice(1).map(line => {
          const [sepal_length, sepal_width, petal_length, petal_width, species] = line.split(',');
          // console.dir({ sepal_length, sepal_width, petal_length, petal_width, species });
          return {
            sepal_length: parseFloat(sepal_length),
            sepal_width: parseFloat(sepal_width),
            petal_length: parseFloat(petal_length),
            petal_width: parseFloat(petal_width),
            species: species?.trim()
          };
        })
      )
    );  
  } 

  /// MAP
  getCountriesGeoData(url: string): Observable<any> {
    url = url || 'assets/data/CNTR_RG_60M_2020_4326.json';
    return this.getJsonDataFromUrl(url);
  }

  
  getCovidByCountry(url: string): Observable<any> {
    url = url || 'assets/data/megafile--deaths.json';
    return this.getJsonDataFromUrl(url);
  }
  
  getCountryCodes(url: string): Observable<any> {
    url = url || 'assets/data/mapcountries.json';
    return this.getJsonDataFromUrl(url);
  }
}