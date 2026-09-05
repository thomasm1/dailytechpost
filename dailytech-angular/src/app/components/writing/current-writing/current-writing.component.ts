import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { WritingMod } from '../../../model/writing-mods.model';
import { NewsMod } from '../../../model/news-mods.model';
import { CategoryMod } from '../../../model/category-mods.model';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { StopWritingComponent } from './stop-writing.component';
import { AddLinkDialogComponent, AddLinkDialogResult } from '../../links/add-link-dialog/add-link-dialog.component';
import { WritingService } from '../writing.service';
import * as fromWriting from '../../../reducers/writing.reducer';
import * as WritingActions from '../../../reducers/writing.actions';
import * as fromCategories from '../../../reducers/category.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router  } from '@angular/router';
import * as fromRoot from '../../../reducers/app.reducer';
import { firstValueFrom } from 'rxjs';
import { AwsBlogPublisherService } from '../../blogs-public/aws-blog-publisher.service';
import { AwsAuthenticationService } from '../../../service/auth/aws-authentication.service'; 
import { AuthPolicyService } from '../../../service/auth/auth-policy.service';

type PublishTarget = 'firebase' | 'aws' | 'both';


@Component({
  selector: 'app-current-writing',
  templateUrl: './current-writing.component.html',
  styleUrls: ['./current-writing.component.scss']
})
export class CurrentWritingComponent implements OnInit, OnDestroy {
  @ViewChild('postEditor') postEditor?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('citationEditor') citationEditor?: ElementRef<HTMLTextAreaElement>;

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
  categoryMods: CategoryMod[] = [];
  category!: string;
  activeCategoryId?: string | number;
  newsAdd: boolean= false;
  showPostPreview = true;
  showCitationPreview = true;
  private categorySubscription?: Subscription;
  private firebaseAuthSubscription?: Subscription;
  isFirebaseAdmin = false;


  constructor(
    private writingService: WritingService,
    private dialog: MatDialog,
    private store: Store<fromWriting.State>,
    private fb: FormBuilder,
    private router: Router,
    private awsBlogPublisher: AwsBlogPublisherService,
    private awsAuthService: AwsAuthenticationService,
    private authPolicy: AuthPolicyService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.hydrateDraftFormFromStore();
    this.startOrResumeWriting();
    this.writingMods$ = this.store.select(fromWriting.getAvailableWritingMods)
    this.categorySubscription = this.store.select(fromCategories.getCurrentCategoryMods).subscribe((categories) => {
      this.categoryMods = categories || [];
    });
    this.firebaseAuthSubscription = this.store.select(fromRoot.getIsAuth).subscribe((isAuth) => {
      this.isFirebaseAdmin = !!isAuth;
    });
    this.writingService.getCategories();
  }

  private initForm() {
    this.writingForm = this.fb.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
      cat3: [''],
      did: [''],
      state: [''],
      author: ['by Thomas Maestas, MA', Validators.required],
      blogcite: [''],
      publishTarget: ['firebase' as PublishTarget, Validators.required],
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
      this.activeCategoryId = writingMod.categoryId;
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

  hasAwsSession(): boolean {
    return this.awsAuthService.hasActiveSession();
  }

  canPublishAws(): boolean {
    return this.authPolicy.canAccessAdmin();
  }

  canSubmitWriting(): boolean {
    return !!this.writingForm?.valid && (this.isFirebaseAdmin || this.hasAwsSession());
  }

  getSubmitTooltip(): string {
    if (!this.writingForm?.valid) {
      return 'Please fill in title and content.';
    }
    if (!this.isFirebaseAdmin && !this.hasAwsSession()) {
      return 'Log in to submit this writing.';
    }
    return '';
  }

  insertPostSnippet(snippet: string): void {
    this.insertAtCursor('post', snippet, this.postEditor);
  }

  insertCitationSnippet(snippet: string): void {
    this.insertAtCursor('blogcite', snippet, this.citationEditor);
  }

  private insertAtCursor(
    controlName: 'post' | 'blogcite',
    snippet: string,
    editor?: ElementRef<HTMLTextAreaElement>
  ): void {
    const control = this.writingForm.get(controlName);
    const currentValue = control?.value || '';
    const textarea = editor?.nativeElement;
    const selectionStart = textarea?.selectionStart ?? currentValue.length;
    const selectionEnd = textarea?.selectionEnd ?? selectionStart;
    const selectedText = currentValue.slice(selectionStart, selectionEnd);
    const insertion = snippet.replace('{{selection}}', selectedText);
    const nextValue = `${currentValue.slice(0, selectionStart)}${insertion}${currentValue.slice(selectionEnd)}`;

    control?.setValue(nextValue);
    control?.markAsDirty();

    const placeholderOffset = insertion.indexOf('...');
    const nextCursor = placeholderOffset >= 0
      ? selectionStart + placeholderOffset
      : selectionStart + insertion.length;

    setTimeout(() => {
      textarea?.focus();
      textarea?.setSelectionRange(nextCursor, nextCursor);
    });
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
    const selectedCategoryId = this.resolveSelectedCategoryId(this.categoryMods);
    const dialogRef = this.dialog.open(AddLinkDialogComponent, {
      width: '520px',
      maxWidth: '95vw',
      data: {
        title: 'Add Research Link',
        categories: this.categoryMods,
        selectedCategoryId
      }
    });

    dialogRef.afterClosed().subscribe((result?: AddLinkDialogResult) => {
      if (result) {
        this.onAddUrl(result, this.categoryMods);
      }
    });
  }

  onAddUrl(result: AddLinkDialogResult, categories?: CategoryMod[]) {
    const availableCategories = categories || [];
    const categoryBuckets = this.writingService.getFlattenedCategoryBuckets(availableCategories);
    const category = categoryBuckets.find((item) => Number(item.categoryId) === result.categoryId);
    const title = result.title || 'Untitled';
    const trimmedUrl = result.url.trim();
    const publicLink = result.privateLink !== true;

    if (!category || !trimmedUrl) {
      return;
    }

    this.writingService.addResearchNewsForCategory(category, title, trimmedUrl, publicLink).then(
      () => {
        console.log('addResearchNews submission successful');
        this.loadResearchUrls();
      },
      error => {
        console.error('addResearchNews submission failed', error);
      }
    );
  } 

  private resolveSelectedCategoryId(categories: CategoryMod[]): string | number | null {
    if (this.activeCategoryId) {
      return this.activeCategoryId;
    }

    const categoryBuckets = this.writingService.getFlattenedCategoryBuckets(categories);
    const matchedCategory = categoryBuckets.find((item) =>
      item.cat3 === this.category || item.name === this.category
    );

    return matchedCategory?.categoryId ?? null;
  }

  async onSubmit(): Promise<void> {
    if (this.writingForm.valid) {
      if (!this.isFirebaseAdmin && !this.hasAwsSession()) {
        console.error('Login required to submit writing');
        return;
      }
      // this.writingForm.value.id = getuid();
      this.writingForm.value.did = this.formatDate(new Date());
      this.writingForm.value.cat3 = this.category;
      this.writingForm.value.state = 'completed';
      this.writingForm.value.date = new Date();
      this.writingForm.value.wordCount = this.awsBlogPublisher.calculateWordCount(this.writingForm.value.post);
      const formValues: WritingMod = this.writingForm.value;
      const publishTarget = (this.writingForm.value.publishTarget || 'firebase') as PublishTarget;
      if ((publishTarget === 'aws' || publishTarget === 'both') && !this.canPublishAws()) {
        console.error('AWS publishing requires ROLE_ADMIN');
        return;
      }
      console.log("Form is valid", formValues);
      const publications: Promise<unknown>[] = [];

      if (publishTarget === 'firebase' || publishTarget === 'both') {
        publications.push(this.writingService.addFullDataToDatabase(formValues));
      }
      if (publishTarget === 'aws' || publishTarget === 'both') {
        publications.push(firstValueFrom(this.awsBlogPublisher.publish(formValues)));
      }

      const results = await Promise.allSettled(publications);
      const failures = results.filter((result) => result.status === 'rejected');

      if (failures.length) {
        console.error('One or more publishing targets failed', failures);
        return;
      }

      this.store.dispatch(new WritingActions.ClearWritingDraft());
      this.writingForm.reset({
        author: 'by Thomas Maestas, MA',
        publishTarget: 'firebase'
      });
      this.progress = 0;
      this.elapsedSeconds = 0;
      this.router.navigate(['/writing/new']);
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
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
    if (this.firebaseAuthSubscription) {
      this.firebaseAuthSubscription.unsubscribe();
    }
  }
}
