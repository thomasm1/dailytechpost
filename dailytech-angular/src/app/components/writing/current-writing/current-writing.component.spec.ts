import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of } from 'rxjs';

import { CurrentWritingComponent } from './current-writing.component';
import { StopWritingComponent } from './stop-writing.component';
import { WritingService } from '../writing.service';
import { WritingMod } from '../../../models/writing-mods.model';
import * as fromWriting from '../../../reducers/writing.reducer';
import * as WritingActions from '../../../reducers/writing.actions';

describe('CurrentWritingComponent', () => {
  let component: CurrentWritingComponent;
  let fixture: ComponentFixture<CurrentWritingComponent>;
  let mockWritingService: jasmine.SpyObj<WritingService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockStore: jasmine.SpyObj<Store>;
  let activeWritingSubject: BehaviorSubject<WritingMod | null>;

  const activeWriting: WritingMod = {
    id: 'w-1',
    cat3: 'Web Dev Affairs',
    title: 'In Progress',
    durationGoal: 1200,
    news: ['https://example.com/a'],
  } as WritingMod;

  beforeEach(async () => {
    mockWritingService = jasmine.createSpyObj('WritingService', [
      'hardQuitWriting',
      'addFullDataToDatabase',
      'addResearchNews',
      'getResearchNewsForCategoryName',
      'completeWriting',
      'cancelWriting'
    ]);
    mockWritingService.addFullDataToDatabase.and.returnValue(Promise.resolve());
    mockWritingService.addResearchNews.and.returnValue(Promise.resolve({} as any));
    mockWritingService.getResearchNewsForCategoryName.and.callFake((category: string, privateOnly?: boolean) =>
      of(privateOnly
        ? [{ id: 'private-1', title: 'Private link', url: 'https://example.com/private', categoryId: 10 }]
        : [{ id: 'public-1', title: 'Public link', url: 'https://example.com/public', categoryId: 10 }] as any)
    );

    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    activeWritingSubject = new BehaviorSubject<WritingMod | null>(activeWriting);

    mockStore.select.and.callFake((selector: unknown) => {
      if (selector === fromWriting.getActiveWriting) {
        return activeWritingSubject.asObservable();
      }
      if (selector === fromWriting.getAvailableWritingMods) {
        return of([]);
      }
      return of(null);
    });

    await TestBed.configureTestingModule({
      declarations: [CurrentWritingComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: WritingService, useValue: mockWritingService },
        { provide: MatDialog, useValue: mockDialog },
        { provide: Router, useValue: mockRouter },
        { provide: Store, useValue: mockStore }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWritingComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (component.timer) {
      clearInterval(component.timer);
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and active writing data on init', () => {
    component.ngOnInit();

    expect(component.writingForm).toBeTruthy();
    expect(component.category).toBe('Web Dev Affairs');
    expect(component.news).toEqual(['https://example.com/a']);
    expect(component.publicResearchUrls[0].url).toBe('https://example.com/public');
    expect(component.privateResearchUrls[0].url).toBe('https://example.com/private');
    expect(component.goalMinutes).toBeGreaterThan(0);
    expect(component.timer).toBeDefined();
  });

  it('should navigate to /writing/new when no active writing exists', () => {
    activeWritingSubject.next(null);

    component.startOrResumeWriting();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/new']);
  });

  it('should toggle the clock display', () => {
    const initial = component.showClock;

    component.toggleClock();

    expect(component.showClock).toBe(!initial);
  });

  it('should open stop-writing dialog with current progress', () => {
    component.progress = 42;
    mockDialog.open.and.returnValue({ afterClosed: () => of('resume') } as any);

    component.postCancel();

    expect(mockDialog.open).toHaveBeenCalledWith(StopWritingComponent, {
      data: { progress: 42 }
    });
  });

  it('should discard draft and exit when dialog returns discard', () => {
    mockDialog.open.and.returnValue({ afterClosed: () => of('discard') } as any);

    component.postCancel();

    expect(mockStore.dispatch).toHaveBeenCalledWith(jasmine.any(WritingActions.ClearWritingDraft));
    expect(mockWritingService.hardQuitWriting).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/new']);
  });

  it('should save draft and exit when dialog returns draft', () => {
    mockDialog.open.and.returnValue({ afterClosed: () => of('draft') } as any);
    component.ngOnInit();
    component.writingForm.patchValue({
      title: 'Draft title',
      post: 'Draft post'
    });
    component.category = 'A.I.Now.';

    component.postCancel();

    expect(mockStore.dispatch).toHaveBeenCalledWith(jasmine.any(WritingActions.SaveWritingDraft));
    const action = mockStore.dispatch.calls.allArgs()
      .map((args) => args[0])
      .find((item) => item instanceof WritingActions.SaveWritingDraft) as WritingActions.SaveWritingDraft;
    const payload = action.payload;
    expect(payload.title).toBe('Draft title');
    expect(payload.post).toBe('Draft post');
    expect(payload.cat3).toBe('A.I.Now.');
    expect(mockWritingService.hardQuitWriting).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/new']);
  });

  it('should resume writing when dialog returns resume', () => {
    mockDialog.open.and.returnValue({ afterClosed: () => of('resume') } as any);
    const resumeSpy = spyOn(component, 'startOrResumeWriting');

    component.postCancel();

    expect(resumeSpy).toHaveBeenCalled();
  });

  it('should submit valid form and navigate to /writing/new', fakeAsync(() => {
    const fb = TestBed.inject(FormBuilder);
    component.writingForm = fb.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
      cat3: [''],
      did: [''],
      state: [''],
    });
    component.category = 'Web Dev Affairs';
    component.writingForm.patchValue({
      title: 'Final title',
      post: 'Final post body'
    });

    component.onSubmit();
    tick();

    expect(mockWritingService.addFullDataToDatabase).toHaveBeenCalled();
    const saved = mockWritingService.addFullDataToDatabase.calls.mostRecent().args[0] as WritingMod;
    expect(saved.title).toBe('Final title');
    expect(saved.cat3).toBe('Web Dev Affairs');
    expect(saved.state).toBe('completed');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/new']);
    flush();
  }));

  it('should not submit when form is invalid', () => {
    spyOn(console, 'error');
    const fb = TestBed.inject(FormBuilder);
    component.writingForm = fb.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
      cat3: [''],
      did: [''],
      state: [''],
    });
    component.writingForm.patchValue({ title: '', post: '' });

    component.onSubmit();

    expect(mockWritingService.addFullDataToDatabase).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Form is invalid');
  });

  it('should add URL and persist it', fakeAsync(() => {
    const fb = TestBed.inject(FormBuilder);
    component.writingForm = fb.group({
      title: ['', Validators.required],
      post: ['', Validators.required],
      cat3: [''],
      did: [''],
      state: [''],
    });
    component.news = [];
    component.category = 'Web Dev Affairs';
    const mockUrlForm = {
      value: {
        title: 'Example title',
        url: 'https://example.com/new'
      },
      resetForm: jasmine.createSpy('resetForm')
    } as any;

    component.onAddUrl(mockUrlForm);
    tick();

    expect(mockWritingService.addResearchNews).toHaveBeenCalledWith(
      'Web Dev Affairs',
      'Example title',
      'https://example.com/new',
      true
    );
    expect(mockWritingService.getResearchNewsForCategoryName).toHaveBeenCalledWith('Web Dev Affairs');
    expect(mockWritingService.getResearchNewsForCategoryName).toHaveBeenCalledWith('Web Dev Affairs', true);
    expect(mockUrlForm.resetForm).toHaveBeenCalled();
    flush();
  }));

  it('should add a private URL when private is checked', fakeAsync(() => {
    component.news = [];
    component.category = 'Web Dev Affairs';
    const mockUrlForm = {
      value: {
        title: 'Private example',
        url: 'https://example.com/private',
        privateLink: true
      },
      resetForm: jasmine.createSpy('resetForm')
    } as any;

    component.onAddUrl(mockUrlForm);
    tick();

    expect(mockWritingService.addResearchNews).toHaveBeenCalledWith(
      'Web Dev Affairs',
      'Private example',
      'https://example.com/private',
      false
    );
    flush();
  }));
});
