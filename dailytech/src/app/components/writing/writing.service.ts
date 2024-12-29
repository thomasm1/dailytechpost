import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WritingMod } from '../../models/writing-mods.model';
import { UiService } from '../../service/ui.service';
import * as UI from '../../reducers/ui.actions';
import * as Writing from '../../reducers/writing.actions';
import * as fromWriting from '../../reducers/writing.reducer';

@Injectable({
  providedIn: 'root'
})

export class WritingService {
  // writingChanged = new Subject<WritingMod>();
  // writingsChanged = new Subject<WritingMod[]>();
  // finishedWritingsChanged = new Subject<WritingMod[]>();

  // urlsWebDev = ['https://www.wired.com/tag/the-web/','https://www.infoworld.com/category/web-development/'];
  // urlsBlockchain = ['https://www.wired.com/tag/blockchain/','https://cointelegraph.com/tags/blockchain'];
  // urlsAI = ['https://www.wired.com/tag/artificial-intelligence/','https://www.sciencedaily.com/news/computers_math/artificial_intelligence/'];
  // urlsSoc = ['https://www.wired.com/','https://www.sociologylens.net/article-types/opinion/digital-sociology-reinvention-social-research-noortje-marres-digital-technology-contributes-sociology/18108'];
  // urlsQuantum = ['https://www.wired.com/tag/quantum-computing/','https://phys.org/physics-news/quantum-physics/'];

  // private availableWritingMods: WritingMod[] = [
    // { id: '1a', cat3: 'Web Dev Affairs', news: this.urlsWebDev, category: 'web-dev-affairs', durationGoal: 120, wordCount: 4550, date: new Date(), state: null },
     // ....
  // ];
  // private ongoingWriting: WritingMod;
  // private writingMods: WritingMod[] = [];
  private firebaseSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UiService,
    private store: Store<fromWriting.State>
    ) { }

  fetchAvailableWritingMods() {
    // return this.availableWritingMods.slice();
    this.uiService.loadingStateChanged.next(true); // GONNA KEEP SUBSCRIPTION LOADER FOR NOW
    // this.store.dispatch(new UI.StartLoading());
    this.firebaseSubs.push(
      this.db
      .collection('writing-mods')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            // spread operator pulling objects out of payload, and adding to object returned
            cat3: doc.payload.doc.data()['cat3'],
            news: doc.payload.doc.data()['news'],
            durationGoal: doc.payload.doc.data()['durationGoal'],
            wordCount: doc.payload.doc.data()['wordCount'],
            date: doc.payload.doc.data()['date'],
            state: doc.payload.doc.data()['state'],
            title: doc.payload.doc.data()['title'],
            post: doc.payload.doc.data()['post'],
          };
        });
      })
      ).subscribe((writingModsArr: WritingMod[]) => {
        console.log(writingModsArr);
        this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch(new UI.StopLoading());

        // this.availableWritingMods = writingMods;
        // this.writingsChanged.next([...this.availableWritingMods]);
        this.store.dispatch(new Writing.SetAvailableWritings(writingModsArr));
      }, error => {
        this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch(new UI.StopLoading());

        this.uiService.showSnackBar('Database is down, and fetching Mods failed, please try again later', null, 3000);
        // this.writingsChanged.next(null);
       }));  // END FIREBASE SUBSCRIPTION ARRAY
  }

  startWriting(selectedId: string) {
    // this.ongoingWriting = this.availableWritingMods.find(
    //   ex => ex.id === selectedId
    // );
    // this.writingChanged.next({ ...this.ongoingWriting });
    this.store.dispatch(new Writing.StartWriting(selectedId));
  }

  completeWriting() {
    // this.writingMods.push({
    this.store.select(fromWriting.getActiveWriting).pipe(take(1)).subscribe(writingModObj => {
    this.addDataToDatabase({
      // ...this.ongoingWriting,
      ...writingModObj,
      date: new Date(),
      state: 'completed'
    });
    // this.ongoingWriting = null;
    // this.writingChanged.next(null);
    this.store.dispatch(new Writing.StopWriting());
  });
  }

  cancelWriting(progress: number) {
    // this.writingMods.push({
    this.store.select(fromWriting.getActiveWriting).pipe(take(1)).subscribe(writingModObj => {
    this.addDataToDatabase({
      // ...this.ongoingWriting,
      ...writingModObj,
      // durationGoal: this.ongoingWriting.durationGoal * (progress / 100),
      durationGoal: writingModObj.durationGoal * (progress / 100),
      wordCount: writingModObj.durationGoal * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    // this.ongoingWriting = null;
    // this.writingChanged.next(null);
    this.store.dispatch(new Writing.StopWriting());
  });
  }

  // getWritingExercise() {
  //   return { ...this.ongoingWriting };
  // }

  fetchCompletedOrCancelledWritings() {
    // return this.writingMods.slice();
    this.firebaseSubs.push(
      this.db
      .collection('finished-writing-mods')
      .valueChanges()
      .subscribe((writingModsArr: WritingMod[]) => {
        // this.finishedWritingsChanged.next(writingMods);
        this.store.dispatch(new Writing.SetFinishedWritings(writingModsArr))
      })
    );  // END FIREBASE SUBSCRIPTION ARRAY
  }

  cancelSubscriptions() {
    this.firebaseSubs.forEach(sub =>sub.unsubscribe());
  }

  submitWriting(writingData: WritingMod):  void {
    return this.addDataToDatabase(writingData);
  }

 
  addFullDataToDatabase(writingModObj: WritingMod): Promise<void> {
    return this.db.collection('finished-writing-mods').add(writingModObj)
      .then(() => {
        console.log('Data added successfully');
      })
      .catch(error => {
        console.error('Error adding data: ', error);
        throw error;
      });
  }
  private addDataToDatabase(writingModObj: WritingMod) {
    this.db.collection('finished-writing-mods').add(writingModObj);
  }

}
