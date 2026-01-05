import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BlogsGridComponent } from './components/blogs-public/blogs-grid/blogs-grid.component';
import { StatisticsService } from './components/blogs-public/Statistics.service';
import { BlogsService } from './components/blogs-public/blogs.service';
import { A11yModule } from "@angular/cdk/a11y";

@NgModule({
  declarations: [
    BlogsGridComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    A11yModule
],
  providers: [
    StatisticsService,
    BlogsService
  ],
  exports: [
    BlogsGridComponent
  ]
})
export class BlogsPublicModule { }