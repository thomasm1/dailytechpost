import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Blog } from '../../models/blog.model';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  baseAwsUrl: string;
  private allBlogsCache: Blog[] = null;
  private cacheTimestamp: number = null;
  private readonly CACHE_DURATION_MS = 120 * 60 * 1000;  // 2hours

  constructor(private http: HttpClient) { }

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