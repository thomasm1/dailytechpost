import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CategoryMod } from '../../../models/category-mods.model';
import { WritingService } from '../writing.service';
import * as fromCategories from '../../../reducers/category.reducer';
import { LinkDetailsDialogComponent } from './link-details-dialog.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  categoryMods$!: Observable<CategoryMod[]>;

  constructor(
    private writingService: WritingService,
    private store: Store<fromCategories.State>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.categoryMods$ = this.store.select(fromCategories.getCurrentCategoryMods);
    this.writingService.getCategories();
  }

  openLinkCategory(category: CategoryMod): void {
    this.dialog.open(LinkDetailsDialogComponent, {
      width: '820px',
      maxWidth: '95vw',
      data: {
        category,
        privateOnly: false
      }
    });
  }
}
