import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WritingBlog } from '../models/writing-blogs.model';
import { UiService } from '../service/ui.service';
import * as UI from '../reducers/ui.actions';
import * as Writing from '../reducers/writing.actions';
import * as fromWriting from '../reducers/writing.reducer';

@Injectable({
  providedIn: 'root'
})

export class WritingService {
  writingChanged = new Subject<WritingBlog>();
  writingsChanged = new Subject<WritingBlog[]>();
  finishedWritingsChanged = new Subject<WritingBlog[]>();

  // urlsWebDev = ['https://www.wired.com/tag/the-web/','https://www.infoworld.com/category/web-development/'];
  // urlsBlockchain = ['https://www.wired.com/tag/blockchain/','https://cointelegraph.com/tags/blockchain'];
  // urlsAI = ['https://www.wired.com/tag/artificial-intelligence/','https://www.sciencedaily.com/news/computers_math/artificial_intelligence/'];
  // urlsSoc = ['https://www.wired.com/','https://www.sociologylens.net/article-types/opinion/digital-sociology-reinvention-social-research-noortje-marres-digital-technology-contributes-sociology/18108'];
  // urlsQuantum = ['https://www.wired.com/tag/quantum-computing/','https://phys.org/physics-news/quantum-physics/'];

  private availableWritingBlogs: WritingBlog[] = [
    // { id: '1a', name: 'Web Dev Affairs', news: this.urlsWebDev, category: 'web-dev-affairs', durationGoal: 120, wordCount: 4550, date: new Date(), state: null },
     // ....
  ];
  private ongoingWriting: WritingBlog;
  // private writingBlogs: WritingBlog[] = [];
  private firebaseSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UiService,
    private store: Store<fromWriting.State>
    ) { }

  fetchAvailableWritingBlogs() {
    // return this.availableWritingBlogs.slice();
    this.uiService.loadingStateChanged.next(true);
    this.firebaseSubs.push(
      this.db
      .collection('writing-blogs')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          console.log("docArray.map(doc =>... ", doc);
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
        console.log(writingBlogs);
        this.uiService.loadingStateChanged.next(false);
        // this.availableWritingBlogs = writingBlogs;
        // this.writingsChanged.next([...this.availableWritingBlogs]);
        this.store.dispatch(new Writing.SetAvailableWritings(writingBlogs));
      }, error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar('Database is down, and fetching Blogs failed, please try again later', null, 3000);
        this.writingsChanged.next(null);
       }));  // END FIREBASE SUBSCRIPTION ARRAY
  }

  startWriting(selectedId: string) {
    // this.ongoingWriting = this.availableWritingBlogs.find(
    //   ex => ex.id === selectedId
    // );
    // this.writingChanged.next({ ...this.ongoingWriting });
    this.store.dispatch(new Writing.StartWriting(selectedId));
  }

  completeWriting() {
    // this.writingBlogs.push({
    this.addDataToDatabase({
      ...this.ongoingWriting,
      date: new Date(),
      state: 'completed'
    });
    // this.ongoingWriting = null;
    // this.writingChanged.next(null);
    this.store.dispatch(new Writing.StopWriting());
  }

  cancelWriting(progress: number) {
    // this.writingBlogs.push({
    this.addDataToDatabase({
      ...this.ongoingWriting,
      durationGoal: this.ongoingWriting.durationGoal * (progress / 100),
      wordCount: this.ongoingWriting.durationGoal * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    // this.ongoingWriting = null;
    // this.writingChanged.next(null);
    this.store.dispatch(new Writing.StopWriting());
  }

  getWritingExercise() {
    return { ...this.ongoingWriting };
  }

  fetchCompletedOrCancelledWritings() {
    // return this.writingBlogs.slice();
    this.firebaseSubs.push(
      this.db
      .collection('finished-writing-blogs')
      .valueChanges()
      .subscribe((finishedWritingBlogs: WritingBlog[]) => {
        // this.finishedWritingsChanged.next(finishedWritingBlogs);
        this.store.dispatch(new Writing.SetFinishedWritings(finishedWritingBlogs))
      })
    );  // END FIREBASE SUBSCRIPTION ARRAY
  }

  cancelSubscriptions() {
    this.firebaseSubs.forEach(sub =>sub.unsubscribe());
  }

  private addDataToDatabase(finishedWritingBlog: WritingBlog) {
    this.db.collection('finished-writing-blogs').add(finishedWritingBlog);
  }

}
