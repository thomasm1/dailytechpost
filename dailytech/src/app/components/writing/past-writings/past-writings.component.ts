import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource  } from '@angular/material/table';
import {  MatSort } from '@angular/material/sort';
import {  MatPaginator } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';

import { NgForm } from '@angular/forms';
import { WritingService } from '../../../service/writing.service';
import { WritingBlog } from '../../../models/writing-blogs.model';

@Component({
  selector: 'app-past-writings',
  templateUrl: './past-writings.component.html',
  styleUrls: ['./past-writings.component.css']
})
export class PastWritingsComponent implements OnInit, AfterViewInit {

  displayedColumns = ['date', 'name', 'durationGoal', 'wordCount', 'state'];
  dataSource = new MatTableDataSource<WritingBlog>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private writingService: WritingService) { }

  ngOnInit()  {
    this.dataSource.data = this.writingService.getCompletedOrCancelledWritings();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  blogFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
