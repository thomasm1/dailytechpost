import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { StopWritingComponent } from './stop-writing.component';
import { WritingService } from '../writing.service';
import * as fromWriting from '../../../reducers/writing.reducer';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-current-writing',
  templateUrl: './current-writing.component.html',
  styleUrls: ['./current-writing.component.scss']
})
export class CurrentWritingComponent implements OnInit {
  
  progress = 0;
  timer: any;
  news: string[];
  writingForm: UntypedFormGroup;
  
  constructor(
    private writingService: WritingService,
    private dialog: MatDialog,
    private store: Store<fromWriting.State>,
    private fb: UntypedFormBuilder
  ) { }
  
  ngOnInit() {
    this.startOrResumeWriting();
    this.initForm();
    
  }
  
    private initForm() {
      this.writingForm = this.fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      });
    }
    
  
  startOrResumeWriting() {
    this.store.select(fromWriting.getActiveWriting).pipe(take(1)).subscribe(writingMod => {
      // this.news = this.writingService.getWritingExercise().news;
      this.news = writingMod.news;
      // const step = this.writingService.getWritingExercise().durationGoal / 100 * 1000;
      const step = writingMod.durationGoal /100 * 1000;
      this.timer = setInterval(() => {
        this.progress = this.progress + 1;
        if (this.progress >= 100) {
          this.writingService.completeWriting();
          clearInterval(this.timer);
        }
      }, step); // 1000);
    })
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

  onSubmit() {
    console.log(this.writingForm);
    if(this.writingForm.valid) {
      const formValues = this.writingForm.value;
      console.log("valid", formValues);
      
    }
  }
}
