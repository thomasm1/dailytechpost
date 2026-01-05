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

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  protected urlDevAll: string = `${environment.awsUrlDevAll}`;
  protected urlDevId: string = `${environment.awsUrlDevId}`; // ByID (or dev)

  blogsUpdated = new Subject();
  private blogs;

  getAllBlogs(): Observable<Blog[]> {
    if (this.allBlogsCache) {
      console.log('Returning cached blogs:', this.allBlogsCache.length);
      return of(this.allBlogsCache);
    }
    
    const url = `${this.urlDevAll}/dev/posts`;
    console.log('Fetching all blogs from AWS Lambda:', url);
    
    return this.http.get<Blog[]>(url).pipe(
      tap(blogs => {
        console.log('Received blogs from AWS:', blogs.length);
        this.allBlogsCache = blogs;
      })
    );
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