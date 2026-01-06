import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { MatLegacyTableDataSource as MatTableDataSource  } from '@angular/material/legacy-table';
import {  MatSort } from '@angular/material/sort';
import {  MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';

import { WritingService } from '../writing.service';
import { WritingMod } from '../../../models/writing-mods.model';
import * as fromWriting from '../../../reducers/writing.reducer';

@Component({
  selector: 'app-past-writings',
  templateUrl: './past-writings.component.html',
  styleUrls: ['./past-writings.component.scss']
})
export class PastWritingsComponent implements OnInit, AfterViewInit { //, OnDestroy {

  displayedColumns = ['did',  'post', 'cat3', 'wordCount' ];
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
