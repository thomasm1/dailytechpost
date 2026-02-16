import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { WritingService } from '../writing.service';
import { WritingMod } from '../../../models/writing-mods.model';
import { UiService } from '../../../service/ui.service';
import * as fromWriting from '../../../reducers/writing.reducer';
import { Store } from '@ngrx/store';
import { FirebaseAuthService } from 'src/app/service/auth/firebase-auth.service';
import * as fromRoot from '../../../reducers/app.reducer';
import { CategoryMod } from 'src/app/models/category-mods.model';
import * as fromCategories from '../../../reducers/category.reducer';

@Component({
  selector: 'app-new-writing',
  templateUrl: './new-writing.component.html',
  styleUrls: ['./new-writing.component.scss']
})
export class NewWritingComponent implements OnInit { //, OnDestroy {
  // @Output() writingStart = new EventEmitter<void>();
  // writingMods: WritingMod[] = [];
  // writingMods: Observable<WritingMod[]>;

  // private writingSubscription: Subscription;
  // writingMods: WritingMod[];
  writingMods$: Observable<WritingMod[]>;
  categoryMods$: Observable<CategoryMod[]>;

  isAuth$: Observable<boolean>;

  isLoading = true;
  private loadingSubscription: Subscription;
  // isLoading$: Observable<boolean>;

  constructor(
    private writingService: WritingService,
    private uiService: UiService,
    private store: Store<fromWriting.State>

  ) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);

    if (this.isAuth$) {
      console.log('isAuth$ is true');
      this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
        isLoading => { this.isLoading = isLoading; }    // GONNA KEEP SUBSCRIPTION FOR THIS LOADING SPINNER
      );
      // this.isLoading$ = this.store.select(fromRoot.getIsLoading);

      // this.writingSubscription = this.writingService.writingsChanged.subscribe(
      //   writingMods => { this.writingMods = writingMods; }
      // );
      this.store.select(fromCategories.getCurrentCategoryMods).subscribe();
      
      this.categoryMods$ = this.store.select(fromCategories.getCurrentCategoryMods);
      this.fetchCategories();

      this.writingMods$ = this.store.select(fromWriting.getAvailableWritingMods);
      this.fetchWritings();
    } else {
      console.log('isAuth$ is false');

    }

    // FUNCTIONALITY FOR Non-logged-in users
  }

  // getDefaultWritings() {
  //   return this.writingService.getDefaultWritingMods();
  // }
  fetchWritings() {
    this.writingService.fetchAvailableWritingMods();
  }
  fetchCategories() {
    this.writingService.getCategories();
  }
  onStartWriting(ngForm: NgForm) {
    console.log('NewWritingComponent onStartWriting cat3: ', ngForm.value.category_five);
    this.writingService.startWriting(ngForm.value.category_five);  //pass in the id
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
    // if (this.writingSubscription) {
    //   this.writingSubscription.unsubscribe();
    // }
  }
}
