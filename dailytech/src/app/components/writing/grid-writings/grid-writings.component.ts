import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { MatTableDataSource  } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import {  MatPaginator } from '@angular/material/paginator';

import { WritingService } from '../writing.service';
import { WritingMod } from '../../../models/writing-blogs.model';
import * as fromWriting from '../../../reducers/writing.reducer';

@Component({
  selector: 'app-grid-writings',
  templateUrl: './grid-writings.component.html',
  styleUrls: ['./grid-writings.component.scss']
})
export class GridWritingsComponent implements OnInit, AfterViewInit { //, OnDestroy {

  displayedColumns = ['date', 'name', 'durationGoal', 'wordCount', 'state'];
  dataSource = new MatTableDataSource<WritingMod>();
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
    this.store.select(fromWriting.getFinishedWritingMods).subscribe(
      (writingMods: WritingMod[]) => {
        this.dataSource.data = writingMods;
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
