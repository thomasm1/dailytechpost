import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { MatTableDataSource  } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import {  MatPaginator } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';

import { WritingService } from '../writing.service';
import { WritingBlog } from '../../../models/writing-blogs.model';
import * as fromWriting from '../../../reducers/writing.reducer';

@Component({
  selector: 'app-past-writings',
  templateUrl: './past-writings.component.html',
  styleUrls: ['./past-writings.component.scss']
})
export class PastWritingsComponent implements OnInit, AfterViewInit { //, OnDestroy {

  displayedColumns = ['date', 'name', 'durationGoal', 'wordCount', 'state'];
  dataSource = new MatTableDataSource<WritingBlog>();
  // private exChangedSubscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private writingService: WritingService,
    private store: Store<fromWriting.State>
    ) { }

  ngOnInit()  {
    // this.dataSource.data = this.writingService.getCompletedOrCancelledWritings();
    // this.exChangedSubscription = this.writingService.finishedWritingsChanged.subscribe(
    this.store.select(fromWriting.getFinishedWritingBlogs).subscribe(
      (writingBlogs: WritingBlog[]) => {
        this.dataSource.data = writingBlogs;
      }
    );
    this.writingService.fetchCompletedOrCancelledWritings();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  blogFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ngOnDestroy() {
  //   if (this.exChangedSubscription) {
  //     this.exChangedSubscription.unsubscribe();
  //   }
  // }
}
