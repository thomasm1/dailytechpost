import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { WritingMod } from '../../../models/writing-mods.model';
import { NewsMod } from '../../../models/news-mods.model';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StopWritingComponent } from './stop-writing.component';
import { WritingService } from '../writing.service';
import * as fromWriting from '../../../reducers/writing.reducer';
import * as WritingActions from '../../../reducers/writing.actions';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
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
  elapsedSeconds = 0;
  goalMinutes = 15;
  showClock = true;
  news!: string [];
  publicResearchUrls: NewsMod[] = [];
  privateResearchUrls: NewsMod[] = [];
  writingForm!: FormGroup;
  writingMods$!: Observable<WritingMod[]>;
  newsMods$!: Observable<NewsMod[]>;
  category!: string;
  newsAdd: boolean= false;


  constructor(
    private writingService: WritingService,
    private dialog: MatDialog,
    private store: Store<fromWriting.State>,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
    this.hydrateDraftFormFromStore();
    this.startOrResumeWriting();
    this.writingMods$ = this.store.select(fromWriting.getAvailableWritingMods)
  }

  private initForm() {
    this.writingForm = this.fb.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
      cat3: [''],
      did: [''],
      state: [''],
    });
  }

  private hydrateDraftFormFromStore(): void {
    this.store.select(fromWriting.getWritingDraft).pipe(take(1)).subscribe((draft) => {
      if (!draft) {
        return;
      }
      this.writingForm.patchValue({
        title: draft.title || '',
        post: draft.post || ''
      });
      if (draft.cat3) {
        this.category = draft.cat3;
      }
    });
  }


    startOrResumeWriting() {
    this.store.select(fromWriting.getActiveWriting).pipe(take(1)).subscribe(writingMod => {
      if (!writingMod) {
        this.router.navigate(['/writing/new']);
        return;
      }
      // this.news = this.writingService.getWritingExercise().news;
      this.news = writingMod.news || [];
      this.category = writingMod.cat3 || '';
      this.loadResearchUrls();
      this.goalMinutes = this.resolveGoalMinutes(writingMod.durationGoal);
      this.startStopwatch();
    })
  }

  private loadResearchUrls(): void {
    if (!this.category) {
      this.publicResearchUrls = [];
      this.privateResearchUrls = [];
      return;
    }

    this.writingService.getResearchNewsForCategoryName(this.category).subscribe({
      next: (items) => {
        this.publicResearchUrls = items || [];
      },
      error: () => {
        this.publicResearchUrls = [];
      }
    });

    this.writingService.getResearchNewsForCategoryName(this.category, true).subscribe({
      next: (items) => {
        this.privateResearchUrls = items || [];
      },
      error: () => {
        this.privateResearchUrls = [];
      }
    });
  }

  private resolveGoalMinutes(durationGoal?: number): number {
    if (!durationGoal || durationGoal <= 0) {
      return 15;
    }
    // Normalize oversized legacy-like values to minute goals for display.
    if (durationGoal >= 1000) {
      return Math.max(1, Math.round(durationGoal / 400));
    }
    return Math.max(1, Math.round(durationGoal));
  }

  private startStopwatch() {
    const startMs = Date.now() - (this.elapsedSeconds * 1000);
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.elapsedSeconds = Math.floor((Date.now() - startMs) / 1000);
      const goalSeconds = this.goalMinutes * 60;
      this.progress = Math.min(100, Math.floor((this.elapsedSeconds / goalSeconds) * 100));
    }, 1000);
  }

  getElapsedDisplay(): string {
    const mm = Math.floor(this.elapsedSeconds / 60).toString().padStart(2, '0');
    const ss = (this.elapsedSeconds % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  }

  getGoalDisplay(): string {
    return `${this.goalMinutes.toString().padStart(2, '0')}:00`;
  }

  toggleClock(): void {
    this.showClock = !this.showClock;
  }

  private exitWritingSession(): void {
    this.writingService.hardQuitWriting();
    this.progress = 0;
    this.elapsedSeconds = 0;
    this.router.navigate(['/writing/new']);
  }
 
  postCancel() {
    const dialogRef = this.dialog.open(StopWritingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'discard') {
        this.store.dispatch(new WritingActions.ClearWritingDraft());
        this.exitWritingSession();
      } else if (result === 'draft') {
        this.store.dispatch(new WritingActions.SaveWritingDraft({
          title: this.writingForm.get('title')?.value || '',
          post: this.writingForm.get('post')?.value || '',
          cat3: this.category || ''
        }));
        this.exitWritingSession();
      } else {
        this.startOrResumeWriting();
      }
    });
  }
  addUrl() {
        console.log("add-url");
        this.newsAdd = true;
        
  }

  closeAddUrlModal(): void {
    this.newsAdd = false;
  }

  onAddUrl(urlForm: NgForm) {
    const title = urlForm.value.title || 'Untitled';
    const url = typeof urlForm.value.url === 'string' ? urlForm.value.url : urlForm.value.url?.value;
    const trimmedUrl = typeof url === 'string' ? url.trim() : '';
    const publicLink = urlForm.value.privateLink !== true;

    if (!trimmedUrl) {
      return;
    }

    this.writingService.addResearchNews(this.category, title, trimmedUrl, publicLink).then(
      () => {
        console.log('addResearchNews submission successful');
        this.loadResearchUrls();
        if (typeof urlForm.resetForm === 'function') {
          urlForm.resetForm();
        } else if (typeof (urlForm as any).reset === 'function') {
          (urlForm as any).reset();
        }
        this.newsAdd = false;
      },
      error => {
        console.error('addResearchNews submission failed', error);
      }
    );
  } 

  onSubmit(): void {
    if (this.writingForm.valid) {
      // this.writingForm.value.id = getuid();
      this.writingForm.value.did = this.formatDate(new Date());
      this.writingForm.value.cat3 = this.category;
      this.writingForm.value.state = 'completed';
      this.writingForm.value.date = new Date();
      this.writingForm.value.wordCount = this.writingForm.value.post.length;
      const formValues: WritingMod = this.writingForm.value;
      console.log("Form is valid", formValues);
      this.writingService.addFullDataToDatabase(formValues).then(
        () => {
          this.store.dispatch(new WritingActions.ClearWritingDraft());
          console.log('addFullDataToDatabase Submission to finished-writing-mods successful');
          this.writingForm.reset();
          this.progress = 0;
          this.elapsedSeconds = 0;
          this.router.navigate(['/writing/new']);
        },
        error => {
          console.error('FAILED: addFullDataToDatabase Submission to finished-writing-mods failed', error);
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
