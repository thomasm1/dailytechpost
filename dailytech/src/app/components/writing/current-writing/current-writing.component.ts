import { Component, OnInit, EventEmitter, Output } from '@angular/core';
 import { MatDialog } from '@angular/material/dialog';
 import { StopWritingComponent } from './stop-writing.component';

@Component({
  selector: 'app-current-writing',
  templateUrl: './current-writing.component.html',
  styleUrls: ['./current-writing.component.css']
})
export class CurrentWritingComponent implements OnInit {
 @Output() writingExit = new EventEmitter();

  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startOrResumeWriting();
  }
startOrResumeWriting() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 1000) {
        clearInterval(this.timer);
      }
    }, 1000);
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
        this.writingExit.emit();
      } else {
        this.startOrResumeWriting();
      }
    });
  }
}
 