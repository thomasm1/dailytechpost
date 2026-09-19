import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { map, tap, timeout } from 'rxjs/operators';
import { Blog } from '../../model/blog.model';
import { environment } from '../../../environments/environment';
interface PublicBlogSnapshot {
  version: 1;
  fetchedAt: string;
  posts: Blog[];
}

export interface PublicBlogState {
  posts: Blog[];
  refreshing: boolean;
  refreshFailed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  baseAwsUrl: string;
  private allBlogsCache: Blog[] = null;
  private cacheTimestamp: number = null;
  private readonly CACHE_DURATION_MS = 120 * 60 * 1000;  // 2hours

  constructor(private http: HttpClient) { }

  private readonly snapshotUrl = 'https://d2cn5yubgz8yjt.cloudfront.net/recent-posts.json';

  private get recentPostsKey(): string {
    return `dailytech:recent-public-posts:v1:${this.urlDevAll}`;
  }

  /** Show saved posts immediately, then replace them with the live API result. */
  getPublicBlogs(): Observable<PublicBlogState> {
    return new Observable(subscriber => {
      const requests = new Subscription();
      let local: PublicBlogSnapshot | null = null;
      try {
        const stored = JSON.parse(localStorage.getItem(this.recentPostsKey) || 'null');
        if (this.validSnapshot(stored)) local = { ...stored, posts: this.newestFirst(stored.posts).slice(0, 5) };
      } catch { /* Missing or unavailable browser storage does not block reading. */ }

      let posts = local?.posts || [];
      let apiFinished = false;
      let snapshotFinished = false;
      let refreshFailed = false;
      const update = () => {
        subscriber.next({ posts, refreshing: !apiFinished, refreshFailed });
        if (apiFinished && snapshotFinished) subscriber.complete();
      };
      update();

      const snapshotRequest = this.http.get<unknown>(this.snapshotUrl).pipe(timeout(8000)).subscribe({
        next: snapshot => {
          if (this.validSnapshot(snapshot)) {
            // Newer observations win overlapping IDs, regardless of request order.
            const copies = local && Date.parse(local.fetchedAt) > Date.parse(snapshot.fetchedAt)
              ? [snapshot, local] : [local, snapshot];
            const merged = new Map<string, Blog>();
            copies.forEach(copy => copy?.posts.forEach(post => merged.set(String(post.id), post)));
            posts = this.newestFirst([...merged.values()]);
          }
        },
        error: () => { snapshotFinished = true; update(); },
        complete: () => { snapshotFinished = true; update(); }
      });
      requests.add(snapshotRequest);

      // Reach AWS instead of the existing service-worker API cache.
      requests.add(this.http.get<unknown>(`${this.urlDevAll}/dev/posts?ngsw-bypass=true`).pipe(
        timeout(20000),
        map(response => {
          if (!this.validPosts(response)) throw new Error('Invalid blog response');
          return this.newestFirst(response);
        })
      ).subscribe({
        next: response => {
          posts = response;
          this.allBlogsCache = posts;
          this.cacheTimestamp = Date.now();
          try {
            const recent = posts.slice(0, 5).map(({ id, did, date, title, post, cat3, blogcite, author }) =>
              ({ id, did, date, title, post, cat3, blogcite, author }));
            localStorage.setItem(this.recentPostsKey, JSON.stringify({
              version: 1, fetchedAt: new Date().toISOString(), posts: recent
            }));
          } catch { /* Fresh posts still display if storage is blocked or full. */ }
          // A late JSON response must never replace fresh API data.
          snapshotRequest.unsubscribe();
          apiFinished = snapshotFinished = true;
          update();
        },
        error: () => {
          apiFinished = refreshFailed = true;
          update(); // A slower shared snapshot may still rescue this failed request.
        }
      }));
      return requests;
    });
  }

  private newestFirst(posts: Blog[]): Blog[] {
    const date = (post: Blog) => /^\d{2}-/.test(post.did || '') ? `20${post.did}` : post.did || '';
    return [...posts].sort((a, b) => date(b).localeCompare(date(a)) || String(a.id).localeCompare(String(b.id)));
  }

  private validPosts(value: unknown): value is Blog[] {
    return Array.isArray(value) && value.every(post => post &&
      (typeof post.id === 'string' || typeof post.id === 'number') &&
      typeof post.title === 'string' && typeof post.post === 'string' &&
      typeof post.cat3 === 'string' && typeof post.did === 'string');
  }

  private validSnapshot(value: unknown): value is PublicBlogSnapshot {
    const snapshot = value as PublicBlogSnapshot;
    return !!snapshot && snapshot.version === 1 && typeof snapshot.fetchedAt === 'string' &&
      Number.isFinite(Date.parse(snapshot.fetchedAt)) && this.validPosts(snapshot.posts);
  }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  protected urlDevAll: string = `${environment.awsUrlDevAll}`;
  protected urlDevId: string = `${environment.awsUrlDevId}`; // ByID (or dev)

  blogsUpdated = new Subject();
  private blogs;

  /**
   * Check if cache is still valid based on timestamp
   */
  private isCacheValid(): boolean {
    if (!this.allBlogsCache || !this.cacheTimestamp) {
      return false;
    }
    const now = Date.now();
    const cacheAge = now - this.cacheTimestamp;
    return cacheAge < this.CACHE_DURATION_MS;
  }

  /**
   * Get all blogs with caching support
   * @param forceRefresh - if true, bypass cache and fetch fresh data
   */
  getAllBlogs(forceRefresh: boolean = false): Observable<Blog[]> {
    if (!forceRefresh && this.isCacheValid()) {
      console.log('Returning cached blogs:', this.allBlogsCache.length, 
        `(age: ${Math.round((Date.now() - this.cacheTimestamp) / 1000)}s)`);
      return of(this.allBlogsCache);
    }
    
    const url = `${this.urlDevAll}/dev/posts`;
    console.log('Fetching all blogs from AWS Lambda:', url);
    
    return this.http.get<Blog[]>(url).pipe(
      tap(blogs => {
        console.log('Received blogs from AWS:', blogs.length);
        this.allBlogsCache = blogs;
        this.cacheTimestamp = Date.now();
      })
    );
  }

  /**
   * Clear the cache manually
   */
  clearCache(): void {
    console.log('Cache cleared');
    this.allBlogsCache = null;
    this.cacheTimestamp = null;
  }

  getBlog(id): Observable<Blog> {
    if (this.allBlogsCache){
      const cachedBlog = this.allBlogsCache.find(blog => blog.id === id);
      if (cachedBlog) {
        console.log('Returning cached blog with id:', id);
        return of(cachedBlog);
      }
    }
    const url = `${this.urlDevId}/dev/posts/${id}`;
    console.log('Fetching blog by id from AWS Lambda:', url);
    return this.http.get<Blog>(url);
  }

  getCategories(): Observable<string[]> {
  if (this.allBlogsCache){
    const categories = Array.from(new Set(this.allBlogsCache.map(blog => blog.cat3).filter(cat => cat)));
    console.log('Returning cached categories:', categories);
    return of(categories);
    }
    return of([]);
 
  }

  getBlogsByCategories(category: string): Observable<Blog[]> {
     if (this.allBlogsCache){
      const filteredBlogs = this.allBlogsCache.filter(blog => blog.cat3 === category);
      if (filteredBlogs.length > 0) {
        console.log('Returning cached blogs with category:', category);
        return of(filteredBlogs);
      }
    }
    return of([]);
  }

  hideBlog(blogName: string) {
    this.blogs = this.blogs.filter(b => b !== blogName);
    this.blogsUpdated.next({ value: this.blogs });
  }
}
