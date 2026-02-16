import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsGridComponent } from './blogs-grid/blogs-grid.component';
import { StatisticsService } from './Statistics.service';
import { BlogsService } from './blogs.service';
import { A11yModule } from "@angular/cdk/a11y";
import { AgChartsAngularModule } from 'ag-charts-angular';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogComponent } from './blog/blog.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    BlogsGridComponent,
     BlogComponent,
        BlogsListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
       A11yModule,
    AgChartsAngularModule,
    SharedModule
  ],
  providers: [
    StatisticsService,
    BlogsService,
  ],
  exports: [
    BlogsGridComponent,
    BlogComponent,
    BlogsListComponent 
  ]
})
export class BlogsModule { }
