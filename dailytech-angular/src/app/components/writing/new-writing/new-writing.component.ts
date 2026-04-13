import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { WritingService } from '../writing.service';
import { WritingMod } from '../../../models/writing-mods.model';
import { UiService } from '../../../service/ui.service';
import * as fromWriting from '../../../reducers/writing.reducer';
import * as WritingActions from '../../../reducers/writing.actions';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/app.reducer';
import { CategoryMod } from '../../../models/category-mods.model';
import * as fromCategories from '../../../reducers/category.reducer';
import { Router } from '@angular/router';

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
  writingMods$!: Observable<WritingMod[]>;
  categoryMods$!: Observable<CategoryMod[]>;

  isAuth$!: Observable<boolean>;
  hasSavedDraft = false;
  savedDraftCategory = '';
  selectedCategory = '';

  isLoading = true;
  private loadingSubscription!: Subscription;
  private draftSubscription!: Subscription;
  // isLoading$: Observable<boolean>;

  constructor(
    private writingService: WritingService,
    private uiService: UiService,
    private store: Store<fromWriting.State>,
    private router: Router

  ) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.store.dispatch(new WritingActions.HydrateWritingDraft());
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
      (isLoading) => { this.isLoading = isLoading; }
    );
    this.categoryMods$ = this.store.select(fromCategories.getCurrentCategoryMods);
    this.writingMods$ = this.store.select(fromWriting.getAvailableWritingMods);
    this.fetchCategories();
    this.fetchWritings();
    this.checkForSavedDraft();
  }

  private checkForSavedDraft() {
    this.draftSubscription = this.store.select(fromWriting.getWritingDraft).subscribe((draft) => {
      if (!draft) {
        this.hasSavedDraft = false;
        this.savedDraftCategory = '';
        return;
      }
      const title = (draft.title || '').toString().trim();
      const post = (draft.post || '').toString().trim();
      const cat3 = (draft.cat3 || '').toString().trim();
      this.hasSavedDraft = !!(title || post);
      this.savedDraftCategory = cat3;
      if (cat3) {
        this.selectedCategory = cat3;
      }
    });
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
    const chosenCategory = this.selectedCategory || ngForm.value.category_five;
    console.log('NewWritingComponent onStartWriting cat3: ', chosenCategory);
    this.writingService.startWriting(chosenCategory);  //pass in the id
    this.router.navigate(['/writing/current']);
  }

  onContinueDraft() {
    const draftCategory = this.savedDraftCategory || this.selectedCategory;
    this.writingService.startWriting(draftCategory);
    this.router.navigate(['/writing/current']);
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
    if (this.draftSubscription) {
      this.draftSubscription.unsubscribe();
    }
    // if (this.writingSubscription) {
    //   this.writingSubscription.unsubscribe();
    // }
  }
}
