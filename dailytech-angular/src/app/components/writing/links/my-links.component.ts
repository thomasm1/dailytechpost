import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { CategoryMod } from '../../../models/category-mods.model';
import { WritingService } from '../writing.service';
import * as fromCategories from '../../../reducers/category.reducer';
import { LinkDetailsDialogComponent } from './link-details-dialog.component';

@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.scss']
})
export class MyLinksComponent implements OnInit, OnDestroy {
  categoryMods$!: Observable<CategoryMod[]>;
  categoryMods: CategoryMod[] = [];
  isSaving = false;
  private categorySubscription?: Subscription;

  constructor(
    private writingService: WritingService,
    private store: Store<fromCategories.State>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.categoryMods$ = this.store.select(fromCategories.getCurrentCategoryMods);
    this.categorySubscription = this.categoryMods$.subscribe((categories) => {
      this.categoryMods = categories || [];
    });
    this.writingService.getCategories();
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

  openLinkCategory(category: CategoryMod): void {
    this.dialog.open(LinkDetailsDialogComponent, {
      width: '820px',
      maxWidth: '95vw',
      data: {
        category,
        privateOnly: true
      }
    });
  }

  onAddLink(form: NgForm): void {
    const categoryId = Number(form.value.categoryId);
    const category = this.categoryMods.find((item) => Number(item.categoryId) === categoryId);
    const title = (form.value.title || '').trim();
    const url = (form.value.url || '').trim();
    const publicLink = form.value.privateLink !== true;

    if (!category || !url || this.isSaving) {
      return;
    }

    this.isSaving = true;
    this.writingService.addResearchNewsForCategory(category, title, url, publicLink).then(() => {
      form.resetForm();
      this.isSaving = false;
    }, () => {
      this.isSaving = false;
    });
  }
}
