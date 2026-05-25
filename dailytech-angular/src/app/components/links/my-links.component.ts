import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { firstValueFrom,  Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { CategoryMod } from '../../models/category-mods.model';
import { WritingService } from '../writing/writing.service';
import * as fromCategories from '../../reducers/category.reducer';
import { LinkDetailsDialogComponent } from './link-details-dialog.component';
 
import { environment } from '../../../environments/environment';
import { NewsMod } from '../../models/news-mods.model';
import { FileService } from '../../service/file.service';
import { UiService } from '../../service/ui.service';
@Component({
  selector: 'app-my-links',
  templateUrl: './my-links.component.html',
  styleUrls: ['./my-links.component.scss']
})
export class MyLinksComponent implements OnInit, OnDestroy {
  categoryMods$!: Observable<CategoryMod[]>;
  categoryMods: CategoryMod[] = [];
  categoryBuckets: CategoryMod[] = [];
  isSaving = false;
  isUploadingCsv = false;
  private categorySubscription?: Subscription;

  constructor(
    private writingService: WritingService,
      private store: Store<fromCategories.State>,
    private dialog: MatDialog,
    private fileService: FileService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.categoryMods$ = this.store.select(fromCategories.getCurrentCategoryMods);
    this.categorySubscription = this.categoryMods$.subscribe((categories) => {
      this.categoryMods = categories || [];
      this.categoryBuckets = this.writingService.getFlattenedCategoryBuckets(this.categoryMods);
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
    const category = this.categoryBuckets.find((item) => Number(item.categoryId) === categoryId);
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
  
  onCsvSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  const file = input.files && input.files.length ? input.files[0] : null;

  if (!file || this.isUploadingCsv) {
    return;
  }

  this.isUploadingCsv = true;

  firstValueFrom(
    this.fileService.uploadCsv<NewsMod[]>(`${environment.API_URL}/links/bulk/csv`, file)
  ).then((savedNews) => {
    this.uiService.showSnackBar(`${savedNews.length} links imported`, 'Close', 3000);
  }).catch((error) => {
    console.error('Error uploading CSV:', error);
    const message = error?.error?.message
      || error?.error?.error
      || error?.message
      || 'Error uploading CSV';
    this.uiService.showSnackBar(message, 'Close', 5000);
  }).finally(() => {
    input.value = '';
    this.isUploadingCsv = false;
  });
}
 
  
  getCategoryLabel(category: CategoryMod): string {
    return category.cat3 || category.name || '';
  }
}


