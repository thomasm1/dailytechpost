import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { WritingBlog } from '../models/writing-blogs.model';

@Injectable({
  providedIn: 'root'
})
export class WritingService {
  writingChanged = new Subject<WritingBlog>();

  private availableWritingBlogs: WritingBlog[] = [
    { id: 'web-dev-affairs', name: 'Web Dev Affairs', category: '', duration: 0, wordCount: 0, date: new Date, state: null },
    { id: 'musing-blockchain', name: 'Musing Blockchain', category: '', duration: 0, wordCount: 0, date: new Date, state: null },
    { id: 'a-i-now', name: 'A.I.Now.', category: '', duration: 0, wordCount: 0, date: new Date, state: null },
    { id: 'sociology-tomorrow', name: 'Sociology Tomorrow!', category: '', duration: 0, wordCount: 0, date: new Date, state: null },
    { id: 'quantum-data', name: 'Quantum Data', category: '', duration: 0, wordCount: 0, date: new Date, state: null }
  ];
  private ongoingWriting: WritingBlog;
  private writingBlogs: WritingBlog[] = [];

  getAvailableWritingBlogs() {
    return this.availableWritingBlogs.slice();
  }

  startWriting(selectedId: string) {
    this.ongoingWriting = this.availableWritingBlogs.find(
      ex => ex.id === selectedId
    );
    this.writingChanged.next({ ...this.ongoingWriting });
  }

  completeWriting() {
    this.writingBlogs.push({
      ...this.ongoingWriting,
      date: new Date(),
      state: 'completed'
    });
    this.ongoingWriting = null;
    this.writingChanged.next(null);
  }

  cancelWriting(progress: number) {
    this.writingBlogs.push({
      ...this.ongoingWriting,
      duration: this.ongoingWriting.duration * (progress / 100),
      wordCount: this.ongoingWriting.duration * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.ongoingWriting = null;
    this.writingChanged.next(null);
  }

  getWritingExercise() {
    return { ...this.ongoingWriting };
  }
}
