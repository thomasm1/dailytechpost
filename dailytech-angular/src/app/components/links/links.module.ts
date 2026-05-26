import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { LinksComponent } from './links.component';
import { LinkDetailsDialogComponent } from './link-details-dialog/link-details-dialog.component';
import { MyLinksComponent } from './my-links/my-links.component';
import { AddLinkDialogComponent } from './add-link-dialog/add-link-dialog.component';

@NgModule({
  declarations: [
    LinksComponent,
    LinkDetailsDialogComponent,
    MyLinksComponent,
    AddLinkDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LinksComponent,
    MyLinksComponent
  ]
})
export class LinksModule {}
