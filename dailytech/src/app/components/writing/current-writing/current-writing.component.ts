import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StopWritingComponent } from './stop-writing.component';
import { WritingService } from '../../../service/writing.service';


@Component({
  selector: 'app-current-writing',
  templateUrl: './current-writing.component.html',
  styleUrls: ['./current-writing.component.scss']
})
export class CurrentWritingComponent implements OnInit {

  progress = 0;
  timer: number;
  news: string[];

  constructor(private writingService: WritingService, private dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeWriting();

  }

  startOrResumeWriting() {
    this.news = this.writingService.getWritingExercise().news;
    const step = this.writingService.getWritingExercise().durationGoal / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.writingService.completeWriting();
        clearInterval(this.timer);
      }
    }, step); // 1000);
  }

  postCancel() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopWritingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.writingService.cancelWriting(this.progress);
      } else {
        this.startOrResumeWriting();
      }
    });
  }
  addUrl() {
    console.log("add-url");
  }
}
