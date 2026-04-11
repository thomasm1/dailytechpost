import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of, Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WritingMod } from '../../models/writing-mods.model';
import { CategoryMod } from '../../models/category-mods.model';
import { UiService } from '../../service/ui.service';
import * as Writing from '../../reducers/writing.actions';
import * as fromWriting from '../../reducers/writing.reducer';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import * as Categories from '../../reducers/category.actions';
import * as fromCategories from '../../reducers/category.reducer';
@Injectable({
  providedIn: 'root'
})

export class WritingService {
  // writingChanged = new Subject<WritingMod>();
  // writingsChanged = new Subject<WritingMod[]>();
  // finishedWritingsChanged = new Subject<WritingMod[]>();

  urlsWebDev = ['https://www.wired.com/tag/the-web/', 'https://www.infoworld.com/category/web-development/'];
  urlsBlockchain = ['https://www.wired.com/tag/blockchain/', 'https://cointelegraph.com/tags/blockchain'];
  urlsAI = ['https://www.wired.com/tag/artificial-intelligence/', 'https://www.sciencedaily.com/news/computers_math/artificial_intelligence/'];
  urlsSoc = ['https://www.wired.com/', 'https://www.sociologylens.net/article-types/opinion/digital-sociology-reinvention-social-research-noortje-marres-digital-technology-contributes-sociology/18108'];
  urlsQuantum = ['https://www.wired.com/tag/quantum-computing/', 'https://phys.org/physics-news/quantum-physics/'];
  private readonly DEFAULT_DURATION_GOAL_MINUTES = 15;

  private defaultWritingMods: WritingMod[] = [  /// Functionality for non-logged-in users
    {
      id: '0a',
      cat3: 'Web Dev Affairs',
      news: this.urlsWebDev,
      durationGoal: this.DEFAULT_DURATION_GOAL_MINUTES, wordCount: 0, date: new Date(), state: null
    },
    {
      id: '1a',
      cat3: 'Quantum Data',
      news: this.urlsQuantum,
      durationGoal: this.DEFAULT_DURATION_GOAL_MINUTES, wordCount: 0, date: new Date(), state: null
    },
    {
      id: '2a',
      cat3: 'Musing Blockchain',
      news: this.urlsBlockchain,
      durationGoal: this.DEFAULT_DURATION_GOAL_MINUTES, wordCount: 0, date: new Date(), state: null
    },
    {
      id: '3a',
      cat3: 'Sociology Tomorrow!',
      news: this.urlsSoc,
      durationGoal: this.DEFAULT_DURATION_GOAL_MINUTES, wordCount: 0, date: new Date(), state: null
    },
    {
      id: '4a',
      cat3: 'A.I.Now.',
      news: this.urlsAI,
      durationGoal: this.DEFAULT_DURATION_GOAL_MINUTES, wordCount: 0, date: new Date(), state: null
    },


  ];
  // private ongoingWriting: WritingMod; 
  private firebaseSubs: Subscription[] = [];

  private currentCategorySubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UiService,
    private store: Store<fromWriting.State>,
    private snackBar: MatSnackBar
  ) { }

  getDefaultWritingMods(): Observable<WritingMod[]> {  /// Functionality for non-logged-in users
    return of(this.defaultWritingMods);
  }

  private getDefaultCategoryMods(): CategoryMod[] {
    return this.defaultWritingMods.map((writingMod, index) => ({
      id: writingMod.id,
      cat3: writingMod.cat3,
      name: writingMod.cat3,
      news: writingMod.news,
      durationGoal: writingMod.durationGoal!,
      categoryId: `${10 + index}` as CategoryMod['categoryId'],
      description: `${writingMod.cat3} starter topic`,
    }));
  }

  getCategories() { 
    this.uiService.loadingStateChanged.next(true); // GONNA KEEP SUBSCRIPTION LOADER FOR NOW
    this.currentCategorySubs.push(
      this.db.collection('writing-mods').snapshotChanges()
        .pipe(map(docArray => {
          return docArray.map(doc => {
            const data = doc.payload.doc.data() as any;
            return {
              id: doc.payload.doc.id,
              // spread operator pulling objects out of payload, and adding to object returned
              cat3: data['cat3'],
              news: data['news'], 
              description: data['description'],
              name: data['name'],
              durationGoal: data['durationGoal'],
              categoryId: data['categoryId'],
            };  
          });
        })).subscribe((categoryModsArr: CategoryMod[]) => {
          console.log('categoryModsArr');
          console.dir(categoryModsArr);
          this.uiService.loadingStateChanged.next(false);
          this.store.dispatch(new Categories.SetCurrentCategories(
            categoryModsArr.length ? categoryModsArr : this.getDefaultCategoryMods()
          ));
        }, error => {
          this.uiService.loadingStateChanged.next(false);
          this.store.dispatch(new Categories.SetCurrentCategories(this.getDefaultCategoryMods()));
          this.uiService.showSnackBar('Database is down, and fetching Categories failed, please try again later', null, 3000);
        }));
}

  fetchAvailableWritingMods() {
    // return this.availableWritingMods.slice();
    this.uiService.loadingStateChanged.next(true); // GONNA KEEP SUBSCRIPTION LOADER FOR NOW
    // this.store.dispatch(new UI.StartLoading());
    this.firebaseSubs.push(
      this.db.collection('writing-mods').snapshotChanges()
        .pipe(map(docArray => {
          return docArray.map(doc => {
            const data = doc.payload.doc.data() as any;
            return {
              id: doc.payload.doc.id,
              // spread operator pulling objects out of payload, and adding to object returned
              cat3: data['cat3'],
              news: data['news'],
              durationGoal: data['durationGoal'],
              wordCount: data['wordCount'],
              date: data['date'],
              state: data['state'],
              title: data['title'],
              post: data['post'],
            };
          });
        })
        ).subscribe((writingModsArr: WritingMod[]) => {
          console.dir("writingModsArr");
          console.dir(writingModsArr);
          this.uiService.loadingStateChanged.next(false);
          this.store.dispatch(new Writing.SetAvailableWritings(
            writingModsArr.length ? writingModsArr : this.defaultWritingMods
          ));
        }, error => {
          this.uiService.loadingStateChanged.next(false);
          this.store.dispatch(new Writing.SetAvailableWritings(this.defaultWritingMods));
          this.uiService.showSnackBar('Database is down, and fetching Mods failed, please try again later', null, 3000);
        }));  // END FIREBASE SUBSCRIPTION ARRAY
  }

  startWriting(selectedCategory: string) {
    if (selectedCategory) {
      this.store.dispatch(new Writing.StartWriting(selectedCategory));
      return;
    }  

    this.store.select(fromWriting.getAvailableWritingMods).pipe(take(1)).subscribe((writingMods) => {
      const fallbackCategory = writingMods?.[0]?.cat3;
      if (fallbackCategory) {
        this.store.dispatch(new Writing.StartWriting(fallbackCategory));
      }
    });
  }
  updateNewsUrls(newUrl: string): Promise<void> {
    return this.store.select(fromCategories.getCurrentCategoryMods).pipe(take(1)).toPromise().then(categoryObj  => {
      const updatedNewsUrls = categoryObj ? [...(categoryObj[0].news || []), newUrl] : [newUrl];
      if (!categoryObj || !categoryObj[0]) {
        return Promise.reject('No category found');
      }
      return this.db.collection('writing-mods').doc(categoryObj[0].id).update({ news: updatedNewsUrls })
        .then(() => {
          console.log('News URLs updated successfully in writing-mods collection');
        })
        .catch(error => {
          console.error('Error updating News URLs in writing-mods collection: ', error);
          this.snackBar.open('Error updating News URLs in writing-mods collection: ', undefined, {
            duration: 3000
          });
          throw error;
        });
    });
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
  hardQuitWriting() {
    // this.ongoingWriting = null;
    // this.writingChanged.next(null);
    this.store.dispatch(new Writing.StopWriting());

  }
  cancelWriting(progress: number) {
    // this.writingMods.push({
    this.store.select(fromWriting.getActiveWriting).pipe(take(1)).subscribe(writingModObj => {
      this.addDataToDatabase({
        // ...this.ongoingWriting,
        ...writingModObj,
        // durationGoal: this.ongoingWriting.durationGoal * (progress / 100),
        durationGoal: this.DEFAULT_DURATION_GOAL_MINUTES,
        wordCount: (writingModObj.durationGoal ?? 0) * (progress / 100),
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
    this.firebaseSubs.push(
      this.db.collection('finished-writing-mods').valueChanges()
        .subscribe((writingModsArr: WritingMod[]) => {
          this.store.dispatch(new Writing.SetFinishedWritings(writingModsArr))
        }, () => {
          this.store.dispatch(new Writing.SetFinishedWritings([]));
        })
    );  // END FIREBASE SUBSCRIPTION ARRAY
  }

  cancelSubscriptions() {
    this.firebaseSubs.forEach(sub => sub.unsubscribe());
  }

  submitWriting(writingData: WritingMod): void {
    this.snackBar.open('Submission successful', undefined, { duration: 3000 });

    this.addDataToDatabase(writingData);
  }


  addFullDataToDatabase(writingModObj: WritingMod): Promise<void> {
    return this.db.collection('finished-writing-mods').add(writingModObj)
      .then(() => {
        console.log('Data added successfully');
      })
      .catch(error => {
        console.error('OOPS! Must be logged in to Database - Error adding data: ', error);
        this.snackBar.open('OOPS! Must be logged in to Database - Error adding data: ', undefined, {
          duration: 3000
        });
        throw error;
      });
  }
  private addDataToDatabase(writingModObj: WritingMod): Promise<void> {
    return this.db.collection('finished-writing-mods').add(writingModObj)
      .then(() => {
        console.log('Data added successfully');
      })
      .catch(error => {
        console.error('OOPS! Must be logged in to Database - Error adding data: ', error);
        this.snackBar.open('OOPS! Must be logged in to Database - Error adding data: ', undefined, {
          duration: 3000
        });
        throw error;
      });
  }

}

