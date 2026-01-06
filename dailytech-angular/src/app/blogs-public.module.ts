import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { BlogsGridComponent } from './components/blogs-public/blogs-grid/blogs-grid.component';
import { StatisticsService } from './components/blogs-public/Statistics.service';
import { BlogsService } from './components/blogs-public/blogs.service';
import { A11yModule } from "@angular/cdk/a11y";
import { AgCharts } from 'ag-charts-angular';

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
    A11yModule,
    AgCharts

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
