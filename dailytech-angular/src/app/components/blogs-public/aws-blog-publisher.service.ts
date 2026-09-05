import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AwsBlogPayload } from '../../model/aws-blog-payload.model';
import { WritingMod } from '../../model/writing-mods.model';
import { BlogsService } from './blogs.service';

@Injectable({
  providedIn: 'root'
})
export class AwsBlogPublisherService {
  private readonly postUrl = `${environment.awsUrlDevId}/dev/post`;

  constructor(
    private http: HttpClient,
    private blogsService: BlogsService
  ) {}

  publish(writing: WritingMod): Observable<unknown> {
    const payload = this.toPayload(writing);
    return this.http.post<unknown>(this.postUrl, payload).pipe(
      tap(() => this.blogsService.clearCache())
    );
  }

  toPayload(writing: WritingMod): AwsBlogPayload {
    const post = writing.post || '';

    return {
      date: this.toDisplayDate(writing.date),
      cat3: writing.cat3 || writing.category || '',
      post,
      author: writing.author || 'by Thomas Maestas, MA',
      title: writing.title || '',
      did: writing.did || this.toDid(new Date()),
      blogcite: writing.blogcite || '',
      wordCount: writing.wordCount || this.calculateWordCount(post)
    };
  }

  calculateWordCount(html: string): number {
    if (!html) {
      return 0;
    }

    return html
      .replace(/<[^>]*>/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .length;
  }

  private toDisplayDate(value?: Date | string): string {
    const date = value ? new Date(value) : new Date();

    if (Number.isNaN(date.getTime())) {
      return String(value || '');
    }

    const day = date.getDate();
    const suffix = day >= 11 && day <= 13
      ? 'th'
      : ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[day % 10] || 'th';
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    return `${month} ${day}${suffix}, ${date.getFullYear()}`;
  }

  private toDid(date: Date): string {
    const yy = date.getFullYear().toString().slice(-2);
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    return `${yy}-${mm}-${dd}`;
  }
}
