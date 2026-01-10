import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { KeysService } from 'src/app/service/keys.service';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  nytKey: string = '';
  apiUrlNYT: string = '';
  
  // Cache storage
  private articlesCache = new Map<string, any>();
  private searchCache = new Map<string, any>();
  private articlesCacheTimestamp = new Map<string, number>();
  private searchCacheTimestamp = new Map<string, number>();
  private readonly CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutes for news

  constructor(private http: HttpClient, private keys: KeysService) {   }

  getNytKey() {
    this.nytKey = this.keys.getNytApi();
    return this.nytKey;
  }

  /**
   * Check if cache is still valid based on timestamp
   */
  private isCacheValid(timestamp: number): boolean {
    if (!timestamp) {
      return false;
    }
    const now = Date.now();
    const cacheAge = now - timestamp;
    return cacheAge < this.CACHE_DURATION_MS;
  }

  /**
   * Generate cache key from search parameters
   */
  private getSearchCacheKey(data: any): string {
    return JSON.stringify({
      q: data.q || '',
      begin_date: data.begin_date || '',
      end_date: data.end_date || '',
      sort: data.sort || ''
    });
  }

  /**
   * Search NYT articles with caching
   * @param data - search parameters
   * @param forceRefresh - if true, bypass cache and fetch fresh data
   */
  search(data: any, forceRefresh: boolean = false): Observable<any> {
    const cacheKey = this.getSearchCacheKey(data);
    const cachedTimestamp = this.searchCacheTimestamp.get(cacheKey);
    
    if (!forceRefresh && this.isCacheValid(cachedTimestamp)) {
      const cached = this.searchCache.get(cacheKey);
      console.log('Returning cached search results', 
        `(age: ${Math.round((Date.now() - cachedTimestamp) / 1000)}s)`);
      return of(cached);
    }

    this.getNytKey();

    let params: HttpParams = new HttpParams();
    params = params.set('api-key', '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5'); // this.nytKey);

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
    
    console.log('Fetching search results from NYT API');
    return this.http.get(
      `${environment.apiUrlNYT}/search/v2/articlesearch.json`,
      { params }
    ).pipe(
      tap(result => {
        this.searchCache.set(cacheKey, result);
        this.searchCacheTimestamp.set(cacheKey, Date.now());
        console.log('Cached search results');
      })
    );
  }

  /**
   * Get NYT articles by section with caching
   * @param section - article section (default 'technology')
   * @param forceRefresh - if true, bypass cache and fetch fresh data
   */
  getArticles(section: string = 'technology', forceRefresh: boolean = false): Observable<any> {
    const cachedTimestamp = this.articlesCacheTimestamp.get(section);
    
    if (!forceRefresh && this.isCacheValid(cachedTimestamp)) {
      const cached = this.articlesCache.get(section);
      console.log(`Returning cached ${section} articles`, 
        `(age: ${Math.round((Date.now() - cachedTimestamp) / 1000)}s)`);
      return of(cached);
    }

    let params: HttpParams = new HttpParams();
    params = params.set('api-key', '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5'); // this.nytKey);

    console.log(`Fetching ${section} articles from NYT API`);
    return this.http.get(
      `${environment.apiUrlNYT}/topstories/v2/${section}.json`,
      { params }
    ).pipe(
      tap(result => {
        this.articlesCache.set(section, result);
        this.articlesCacheTimestamp.set(section, Date.now());
        console.log(`Cached ${section} articles`);
      })
    );
  }

  /**
   * Clear all news caches
   */
  clearCache(): void {
    this.articlesCache.clear();
    this.searchCache.clear();
    this.articlesCacheTimestamp.clear();
    this.searchCacheTimestamp.clear();
    console.log('News cache cleared');
  }

  /**
   * Clear cache for specific section
   */
  clearArticlesCache(section: string): void {
    this.articlesCache.delete(section);
    this.articlesCacheTimestamp.delete(section);
    console.log(`Cache cleared for ${section} articles`);
  }
}
