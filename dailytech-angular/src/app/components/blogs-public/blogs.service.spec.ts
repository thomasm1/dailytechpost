import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogsService, PublicBlogState } from './blogs.service';
import { environment } from '../../../environments/environment';

describe('Public blog snapshots', () => {
  let service: BlogsService;
  let http: HttpTestingController;
  let saved: string | null;
  let state: PublicBlogState;
  const api = `${environment.awsUrlDevAll}/dev/posts?ngsw-bypass=true`;
  const shared = 'https://d2cn5yubgz8yjt.cloudfront.net/recent-posts.json';
  const post = (id: number, did = '26-09-19') => ({ id, did, title: `Post ${id}`, post: 'Content', cat3: 'Web Dev Affairs' });
  const snapshot = (posts: any[], fetchedAt = '2026-09-19T10:00:00Z') => ({ version: 1, fetchedAt, posts });

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(BlogsService);
    service.clearCache();
    http = TestBed.inject(HttpTestingController);
    saved = null;
    spyOn(localStorage, 'getItem').and.callFake(() => saved);
    spyOn(localStorage, 'setItem').and.callFake((key, value) => { saved = value; });
  });
  afterEach(() => http.verify());
  const start = () => service.getPublicBlogs().subscribe(value => state = value);

  it('shows shared JSON before the API responds for a visitor with no browser cache', () => {
    start();
    const request = http.expectOne(api);
    http.expectOne(shared).flush(snapshot([post(1)]));
    expect(state.posts.map(p => p.id)).toEqual([1]);
    expect(state.refreshing).toBeTrue();
    request.flush([post(2)]);
    expect(state).toEqual({ posts: [post(2)], refreshing: false, refreshFailed: false });
  });

  it('immediately shows five browser posts and merges stale shared data without duplicates', () => {
    saved = JSON.stringify(snapshot([post(1), post(2), post(3), post(4), post(5), post(6)]));
    start();
    expect(state.posts.length).toBe(5);
    http.expectOne(shared).flush(snapshot([{ ...post(1), title: 'Old' }, post(7, '26-09-01')], '2026-09-18T10:00:00Z'));
    expect(state.posts.filter(p => p.id === 1).length).toBe(1);
    expect(state.posts.find(p => p.id === 1).title).toBe('Post 1');
    expect(state.posts.length).toBe(6);
    http.expectOne(api).flush([post(8)]);
    expect(JSON.parse(saved).posts).toEqual([post(8)]);
  });

  it('cancels a slower snapshot so it cannot overwrite fresh API data', () => {
    start();
    const request = http.expectOne(shared);
    http.expectOne(api).flush([post(8)]);
    expect(request.cancelled).toBeTrue();
    expect(state.posts).toEqual([post(8)]);
  });

  it('retains a slower shared snapshot when the API fails', () => {
    start();
    http.expectOne(api).flush({}, { status: 503, statusText: 'Unavailable' });
    http.expectOne(shared).flush(snapshot([post(1)]));
    expect(state).toEqual({ posts: [post(1)], refreshing: false, refreshFailed: true });
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('uses the API when shared JSON is absent and browser storage is corrupt', () => {
    saved = '{invalid';
    start();
    http.expectOne(shared).flush({}, { status: 404, statusText: 'Not Found' });
    http.expectOne(api).flush([post(1)]);
    expect(state.refreshFailed).toBeFalse();
    expect(state.posts.length).toBe(1);
  });

  it('saves only the five newest posts, then reads them on the next page load', () => {
    start();
    http.expectOne(shared).flush(snapshot([]));
    http.expectOne(api).flush(Array.from({ length: 8 }, (_, i) => post(i, `26-09-${10 + i}`)));
    expect(JSON.parse(saved).posts.map(p => p.id)).toEqual([7, 6, 5, 4, 3]);
    const nextService = new BlogsService((service as any).http);
    const subscription = nextService.getPublicBlogs().subscribe(value => state = value);
    expect(state.posts.map(p => p.id)).toEqual([7, 6, 5, 4, 3]);
    http.expectOne(shared);
    http.expectOne(api);
    subscription.unsubscribe();
  });

  it('shows fresh data when browser storage is blocked or full', () => {
    (localStorage.getItem as jasmine.Spy).and.throwError('Blocked');
    (localStorage.setItem as jasmine.Spy).and.throwError('Full');
    start();
    http.expectOne(shared).flush(snapshot([]));
    http.expectOne(api).flush([post(1)]);
    expect(state.posts.length).toBe(1);
    expect(state.refreshFailed).toBeFalse();
  });

  it('replaces cached posts with an authoritative empty API result', () => {
    saved = JSON.stringify(snapshot([post(1)]));
    start();
    http.expectOne(shared).flush(snapshot([post(1)]));
    http.expectOne(api).flush([]);
    expect(state.posts).toEqual([]);
    expect(JSON.parse(saved).posts).toEqual([]);
  });

  it('rejects malformed API and snapshot data without replacing the browser copy', () => {
    saved = JSON.stringify(snapshot([post(1)]));
    const previous = saved;
    start();
    http.expectOne(shared).flush({ posts: [null] });
    http.expectOne(api).flush({ error: 'Bad envelope' });
    expect(state.refreshFailed).toBeTrue();
    expect(state.posts).toEqual([jasmine.objectContaining(post(1))]);
    expect(saved).toBe(previous);
  });

  it('cancels both requests when leaving the page', () => {
    const subscription = start();
    const json = http.expectOne(shared);
    const live = http.expectOne(api);
    subscription.unsubscribe();
    expect(json.cancelled).toBeTrue();
    expect(live.cancelled).toBeTrue();
  });

  it('ends loading when both requests time out', fakeAsync(() => {
    let completed = false;
    service.getPublicBlogs().subscribe({ next: value => state = value, complete: () => completed = true });
    http.expectOne(shared);
    http.expectOne(api);
    tick(20001);
    expect(completed).toBeTrue();
    expect(state.refreshing).toBeFalse();
    expect(state.refreshFailed).toBeTrue();
  }));
});
