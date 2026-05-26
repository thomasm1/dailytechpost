import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef
} from '@angular/material/legacy-dialog';

import { CategoryMod } from '../../../models/category-mods.model';

export interface AddLinkDialogData {
  title?: string;
  categories: CategoryMod[];
  selectedCategoryId?: string | number | null;
}

export interface AddLinkDialogResult {
  categoryId: number;
  title: string;
  url: string;
  privateLink: boolean;
}

@Component({
  selector: 'app-add-link-dialog',
  templateUrl: './add-link-dialog.component.html',
  styleUrls: ['./add-link-dialog.component.scss']
})
export class AddLinkDialogComponent {
  selectedCategoryId: string | number | null;

  constructor(
    private dialogRef: MatDialogRef<AddLinkDialogComponent, AddLinkDialogResult>,
    @Inject(MAT_DIALOG_DATA) public data: AddLinkDialogData
  ) {
    this.selectedCategoryId = data.selectedCategoryId ?? null;
  }

  onSubmit(form: NgForm): void {
    const url = (form.value.url || '').trim();
    const title = (form.value.title || '').trim();
    const categoryId = Number(form.value.categoryId);

    if (!url || !categoryId) {
      return;
    }

    this.dialogRef.close({
      categoryId,
      title,
      url,
      privateLink: form.value.privateLink === true
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  getCategoryLabel(category: CategoryMod): string {
    return category.cat3 || category.name || '';
  }
}
