import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { environment } from '../../../environments/environment';

describe('NewsService backend integration', () => {
  let service: NewsService;
  let http: HttpTestingController;
  const base = `${environment.API_URL.replace(/\/+$/, '')}/news`;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(NewsService);
    http = TestBed.inject(HttpTestingController);
  });
  afterEach(() => http.verify());

  it('fetches news data from DailyTech without fetching or sending a provider key', () => {
    const result = { results: [{ title: 'Article' }] };
    service.getArticles().subscribe(data => expect(data).toEqual(result));
    const request = http.expectOne(`${base}/top-stories/technology`);
    expect(request.request.params.has('api-key')).toBeFalse();
    request.flush(result);
  });

  it('only forwards supported search inputs to the backend', () => {
    service.search({ q: 'science & space', sort: 'newest', begin_date: '20260101',
      'api-key': 'must-not-leave-browser', url: 'https://untrusted.example' }).subscribe();
    const request = http.expectOne(r => r.url === `${base}/search`);
    expect(request.request.params.keys().sort()).toEqual(['begin_date', 'q', 'sort']);
    expect(request.request.params.get('q')).toBe('science & space');
    request.flush({ response: { docs: [] } });
  });

  it('caches results and refreshes after expiry', fakeAsync(() => {
    service.getArticles().subscribe();
    http.expectOne(`${base}/top-stories/technology`).flush({ results: [] });
    service.getArticles().subscribe();
    http.expectNone(`${base}/top-stories/technology`);
    tick(10 * 60 * 1000 + 1);
    service.getArticles().subscribe();
    http.expectOne(`${base}/top-stories/technology`).flush({ results: [] });
  }));

  it('supports explicit refresh and does not cache failures', () => {
    service.getArticles().subscribe({ error: error => expect(error.status).toBe(503) });
    http.expectOne(`${base}/top-stories/technology`).flush({}, { status: 503, statusText: 'Unavailable' });
    service.getArticles().subscribe();
    http.expectOne(`${base}/top-stories/technology`).flush({ results: [] });
    service.getArticles('technology', true).subscribe();
    http.expectOne(`${base}/top-stories/technology`).flush({ results: [] });
  });
});
