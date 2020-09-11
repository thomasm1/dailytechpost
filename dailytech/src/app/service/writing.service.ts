import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { WritingBlog } from '../models/writing-blogs.model';

@Injectable({
  providedIn: 'root'
})
export class WritingService {
  writingChanged = new Subject<WritingBlog>();
  writingsChanged = new Subject<WritingBlog[]>();

  // urlsWebDev = ['https://www.wired.com/tag/the-web/','https://www.infoworld.com/category/web-development/'];
  // urlsBlockchain = ['https://www.wired.com/tag/blockchain/','https://cointelegraph.com/tags/blockchain'];
  // urlsAI = ['https://www.wired.com/tag/artificial-intelligence/','https://www.sciencedaily.com/news/computers_math/artificial_intelligence/'];
  // urlsSoc = ['https://www.wired.com/','https://www.sociologylens.net/article-types/opinion/digital-sociology-reinvention-social-research-noortje-marres-digital-technology-contributes-sociology/18108'];
  // urlsQuantum = ['https://www.wired.com/tag/quantum-computing/','https://phys.org/physics-news/quantum-physics/'];

  private availableWritingBlogs: WritingBlog[] = [
    // { id: '1a', name: 'Web Dev Affairs', news: this.urlsWebDev, category: 'web-dev-affairs', durationGoal: 120, wordCount: 4550, date: new Date(), state: null },
    // { id: '1b', name: 'Musing Blockchain', news: this.urlsBlockchain, category: 'musing-blockchain', durationGoal: 120, wordCount: 40, date: new Date(), state: null },
    // { id: '1c', name: 'A.I.Now.', news: this.urlsAI, category: 'a-i-now', durationGoal: 120, wordCount: 450, date: new Date(), state: null },
    // { id: '1d', name: 'Sociology Tomorrow!', news: this.urlsSoc, category: 'sociology-tomorrow', durationGoal: 120, wordCount: 550, date: new Date(), state: null },
    // { id: '1e', name: 'Quantum Data', news: this.urlsQuantum, category: 'quantum-data', durationGoal: 120, wordCount: 4555, date: new Date(), state: null }
  ];
  private ongoingWriting: WritingBlog;
  private writingBlogs: WritingBlog[] = [];

  constructor(private db: AngularFirestore) { }

  fetchAvailableWritingBlogs() {
    // return this.availableWritingBlogs.slice();
    this.db
      .collection('writing-blogs')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            // spread operator pulling objects out of payload, and adding to object returned
            name: doc.payload.doc.data()['name'],
            news: doc.payload.doc.data()['news'],
            durationGoal: doc.payload.doc.data()['durationGoal'],
            wordCount: doc.payload.doc.data()['wordCount'],
            date: doc.payload.doc.data()['date'],
            state: doc.payload.doc.data()['state']
          };
        });
      })
      ).subscribe((writingBlogs: WritingBlog[]) => {
        console.log(writingBlogs)
        this.availableWritingBlogs = writingBlogs;
        this.writingsChanged.next([...this.availableWritingBlogs])
      });
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
      durationGoal: this.ongoingWriting.durationGoal * (progress / 100),
      wordCount: this.ongoingWriting.durationGoal * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.ongoingWriting = null;
    this.writingChanged.next(null);
  }

  getWritingExercise() {
    return { ...this.ongoingWriting };
  }

  getCompletedOrCancelledWritings() {
    return this.writingBlogs.slice();
  }
}
