import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly baseUrl = `${environment.API_URL.replace(/\/+$/, '')}/news`;
  private readonly cache = new Map<string, { expires: number; data: any }>();
  private readonly cacheDuration = 10 * 60 * 1000;

  constructor(private http: HttpClient) {}

  search(data: any, forceRefresh = false): Observable<any> {
    let params = new HttpParams();
    // Only supported search inputs cross the API boundary. No provider credential is needed.
    for (const key of ['q', 'begin_date', 'end_date', 'sort']) {
      if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
        params = params.set(key, data[key]);
      }
    }
    return this.fetch(`search:${params.toString()}`, `${this.baseUrl}/search`, params, forceRefresh);
  }

  getArticles(section = 'technology', forceRefresh = false): Observable<any> {
    return this.fetch(`section:${section}`, `${this.baseUrl}/top-stories/${encodeURIComponent(section)}`,
      new HttpParams(), forceRefresh);
  }

  clearCache(): void { this.cache.clear(); }
  clearArticlesCache(section: string): void { this.cache.delete(`section:${section}`); }

  private fetch(key: string, url: string, params: HttpParams, forceRefresh: boolean): Observable<any> {
    const cached = this.cache.get(key);
    if (!forceRefresh && cached && cached.expires > Date.now()) return of(cached.data);
    return this.http.get(url, { params }).pipe(tap(data => {
      if (this.cache.size >= 128) this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, { expires: Date.now() + this.cacheDuration, data });
    }));
  }
}
