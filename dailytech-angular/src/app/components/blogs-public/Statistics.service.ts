import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from '../../models/blog.model';
import { BlogStatistics } from '../../models/blog.model';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private blogsSubject = new BehaviorSubject<Blog[]>([]);
  public blogs$ = this.blogsSubject.asObservable();

  constructor() { }

  setBlogs(blogs: Blog[]): void {
    this.blogsSubject.next(blogs);
  }

  getBlogs(): Blog[] {
    return this.blogsSubject.value;
  }

  getBlogStatistics(): Observable<BlogStatistics> {
    return this.blogs$.pipe(
      map(blogs => this.calculateStatistics(blogs))
    );
  }

// ...existing code...

private calculateStatistics(blogs: Blog[]): BlogStatistics {
  const totalBlogs = blogs.length;
  console.log('Calculating statistics for', totalBlogs, 'blogs');
  
  // Calculate word count if not present
  const blogsWithWordCount = blogs.map(blog => ({
    ...blog,
    wordCount: blog.wordCount || this.calculateWordCount(blog.post || '')
  }));
  
  const totalWordCount = blogsWithWordCount.reduce((sum, blog) => sum + (blog.wordCount || 0), 0);
  console.log('Total word count:', totalWordCount);
  console.log('Sample blog word counts:', blogsWithWordCount.slice(0, 3).map(b => ({ 
    title: b.title, 
    wordCount: b.wordCount 
  })));
  
  const totalComments = blogs.reduce((sum, blog) => sum + (blog.comments?.length || 0), 0);
  console.log('Total comments count:', totalComments);
  const averageWordCount = totalBlogs > 0 ? Math.round(totalWordCount / totalBlogs) : 0;
  
  // Blogs by category (cat3)
  const categoryMap = new Map<string, number>();
  blogsWithWordCount.forEach(blog => {
    const category = blog.cat3 || 'Uncategorized';
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });
  
  const blogsByCategory = Array.from(categoryMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);

  // Blogs by author
  const authorMap = new Map<string, number>();
  blogsWithWordCount.forEach(blog => {
    const author = blog.author || 'Unknown';
    authorMap.set(author, (authorMap.get(author) || 0) + 1);
  });
  
  const blogsByAuthor = Array.from(authorMap.entries())
    .map(([author, count]) => ({ author, count }))
    .sort((a, b) => b.count - a.count);

  // Blogs by month (using monthOrder)
  const monthMap = new Map<string, number>();
  blogsWithWordCount.forEach(blog => {
    if (blog.monthOrder) {
      monthMap.set(blog.monthOrder, (monthMap.get(blog.monthOrder) || 0) + 1);
    }
  });
  
  const blogsByMonth = Array.from(monthMap.entries())
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => a.month.localeCompare(b.month));

  // Blogs by state
  const stateMap = new Map<string, number>();
  blogsWithWordCount.forEach(blog => {
    const state = blog.state || 'draft';
    stateMap.set(state, (stateMap.get(state) || 0) + 1);
  });
  
  const blogsByState = Array.from(stateMap.entries())
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalBlogs,
    totalWordCount,
    totalComments,
    averageWordCount,
    blogsByCategory,
    blogsByAuthor,
    blogsByMonth,
    blogsByState
  };
}

private calculateWordCount(text: string): number {
  if (!text) return 0;
  // Remove HTML tags and count words
  const plainText = text.replace(/<[^>]*>/g, ' ');
  const words = plainText.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

  getBlogsByCategory(): Observable<Array<{ category: string; count: number }>> {
    return this.blogs$.pipe(
      map(blogs => {
        const categoryMap = new Map<string, number>();
        blogs.forEach(blog => {
          const category = blog.cat3 || 'Uncategorized';
          categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
        });
        
        return Array.from(categoryMap.entries())
          .map(([category, count]) => ({ category, count }))
          .sort((a, b) => b.count - a.count);
      })
    );
  }

  getTopAuthors(limit: number = 5): Observable<Array<{ author: string; count: number; totalWords: number }>> {
    return this.blogs$.pipe(
      map(blogs => {
        const authorMap = new Map<string, { count: number; totalWords: number }>();
        
        blogs.forEach(blog => {
          const author = blog.author || 'Unknown';
          const current = authorMap.get(author) || { count: 0, totalWords: 0 };
          authorMap.set(author, {
            count: current.count + 1,
            totalWords: current.totalWords + (blog.wordCount || 0)
          });
        });
        
        return Array.from(authorMap.entries())
          .map(([author, stats]) => ({ author, ...stats }))
          .sort((a, b) => b.count - a.count)
          .slice(0, limit);
      })
    );
  }
}