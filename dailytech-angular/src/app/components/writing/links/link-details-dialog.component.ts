import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Subscription } from 'rxjs';

import { CategoryMod } from '../../../models/category-mods.model';
import { NewsMod } from '../../../models/news-mods.model';
import { WritingService } from '../writing.service';

export interface LinkDetailsDialogData {
  category: CategoryMod;
  privateOnly?: boolean;
}

@Component({
  selector: 'app-link-details-dialog',
  templateUrl: './link-details-dialog.component.html',
  styleUrls: ['./link-details-dialog.component.scss']
})
export class LinkDetailsDialogComponent implements OnInit, OnDestroy {
  researchUrls: NewsMod[] = [];
  isLoading = true;
  errorMessage = '';
  private researchSubscription?: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LinkDetailsDialogData,
    private dialogRef: MatDialogRef<LinkDetailsDialogComponent>,
    private writingService: WritingService
  ) {}

  get category(): CategoryMod {
    return this.data.category;
  }

  ngOnInit(): void {
    const categoryId = Number(this.category.categoryId);
    if (!categoryId) {
      this.isLoading = false;
      this.errorMessage = 'Link category id is missing.';
      return;
    }

    const researchUrls$ = this.data.privateOnly
      ? this.writingService.getMyResearchNewsByCategory(categoryId)
      : this.writingService.getResearchNewsByCategory(categoryId);

    this.researchSubscription = researchUrls$.subscribe({
      next: (items) => {
        this.researchUrls = items || [];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load saved research URLs for this link category.';
        this.isLoading = false;
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.researchSubscription) {
      this.researchSubscription.unsubscribe();
    }
  }
}
