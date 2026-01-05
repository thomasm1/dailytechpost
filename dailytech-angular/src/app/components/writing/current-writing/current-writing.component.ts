import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WritingMod } from '../../../models/writing-mods.model';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StopWritingComponent } from './stop-writing.component';
import { WritingService } from '../writing.service';
import * as fromWriting from '../../../reducers/writing.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router  } from '@angular/router';
import * as fromRoot from '../../../reducers/app.reducer';



@Component({
  selector: 'app-current-writing',
  templateUrl: './current-writing.component.html',
  styleUrls: ['./current-writing.component.scss']
})
export class CurrentWritingComponent implements OnInit, OnDestroy {

  progress = 0;
  timer: any;
  news: string[];
  writingForm: FormGroup;
  writingMods$: Observable<WritingMod[]>;

  constructor(
    private writingService: WritingService,
    private dialog: MatDialog,
    private store: Store<fromWriting.State>,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.startOrResumeWriting();
    this.initForm();
    this.writingMods$ = this.store.select(fromWriting.getAvailableWritingMods)
  }

  private initForm() {
    this.writingForm = this.fb.group({

      title: ['', Validators.required],
      post: ['', Validators.required],
      cat3: ['', Validators.required],
      did: [''],
      state: [''],
    });
  }


  startOrResumeWriting() {
    this.store.select(fromWriting.getActiveWriting).pipe(take(1)).subscribe(writingMod => {
      // this.news = this.writingService.getWritingExercise().news;
      this.news = writingMod.news;
      // const step = this.writingService.getWritingExercise().durationGoal / 100 * 1000;
      const step = writingMod.durationGoal / 100 * 1000;
      this.timer = setInterval(() => {
        this.progress = this.progress + 1;
        if (this.progress >= 100) {
          this.writingService.completeWriting();
          clearInterval(this.timer);
        }
      }, step); // 1000);
    })
  }
  quitCancel() {
    this.writingService.hardQuitWriting();
    this.writingForm.reset();
    this.progress = 0;
    this.router.navigate(['/']); 
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
  onSubmit(): void {
    if (this.writingForm.valid) {
      // this.writingForm.value.id = getuid();
      this.writingForm.value.did = this.formatDate(new Date());
      this.writingForm.value.state = 'completed';
      this.writingForm.value.date = new Date();
      this.writingForm.value.wordCount = this.writingForm.value.post.length;
      const formValues: WritingMod = this.writingForm.value;
      console.log("Form is valid", formValues);
      this.writingService.addFullDataToDatabase(formValues).then(
        () => {
          console.log('Submission successful');
          this.writingForm.reset();
          this.progress = 0;
          this.router.navigate(['/']);
        },
        error => {
          console.error('Submission failed', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  formatDate(date: Date): string {
    const yy = date.getFullYear().toString().slice(-2);
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    return `${yy}-${mm}-${dd}`;
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    } 
  }
}
