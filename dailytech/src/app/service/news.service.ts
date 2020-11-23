import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { KeysService } from 'src/app/service/keys.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  nytKey: string = '';
  apiUrlNYT: string = '';

  constructor(private http: HttpClient, private keys: KeysService) {   }

  getNytKey() {
    this.nytKey = this.keys.getNytApi();
    return this.nytKey;
  }
  search(data) {
    // this.getNytKey();

    let params: HttpParams = new HttpParams();
    params = params.set('api-key', this.nytKey);
    if (data.q !== undefined) {
      params = params.set('q', data.q);
    }
    if (data.begin_date !== undefined) {
      params = params.set('begin_date', data.begin_date);
    }
    if (data.end_date !== undefined) {
      params = params.set('end_date', data.end_date);
    }
    if (data.sort !== undefined) {
      params = params.set('sort', data.sort);
    }
    return this.http.get(
      `${environment.apiUrlNYT}/search/v2/articlesearch.json`,
      {
        params,
      }
    );
  }
  getArticles(section: string = 'technology') {
    this.getNytKey();

    let params: HttpParams = new HttpParams();
    params = params.set('api-key', this.nytKey);

    return this.http.get(
      `${environment.apiUrlNYT}/topstories/v2/${section}.json`,
      { params }
    );
  }
}
