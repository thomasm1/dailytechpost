import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of, Subject } from 'rxjs';

import { NewWritingComponent } from './new-writing.component';
import { WritingService } from '../writing.service';
import { UiService } from '../../../service/ui.service';
import { WritingMod } from '../../../models/writing-mods.model';
import { CategoryMod } from 'src/app/models/category-mods.model';
import * as fromWriting from '../../../reducers/writing.reducer';
import * as fromRoot from '../../../reducers/app.reducer';
import * as fromCategories from '../../../reducers/category.reducer';

describe('NewWritingComponent', () => {
  let component: NewWritingComponent;
  let fixture: ComponentFixture<NewWritingComponent>;
  let mockWritingService: jasmine.SpyObj<WritingService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockStore: jasmine.SpyObj<Store>;
  let loadingStateChanged: Subject<boolean>;
  let isAuthSubject: BehaviorSubject<boolean>;
  let writingModsSubject: BehaviorSubject<WritingMod[]>;
  let categoryModsSubject: BehaviorSubject<CategoryMod[]>;

  beforeEach(async () => {
    mockWritingService = jasmine.createSpyObj('WritingService', [
      'fetchAvailableWritingMods',
      'getCategories',
      'startWriting'
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    loadingStateChanged = new Subject<boolean>();
    const mockUiService = { loadingStateChanged };

    mockStore = jasmine.createSpyObj('Store', ['select']);
    isAuthSubject = new BehaviorSubject<boolean>(true);
    writingModsSubject = new BehaviorSubject<WritingMod[]>([]);
    categoryModsSubject = new BehaviorSubject<CategoryMod[]>([]);

    mockStore.select.and.callFake((selector: unknown) => {
      if (selector === fromRoot.getIsAuth) {
        return isAuthSubject.asObservable();
      }
      if (selector === fromWriting.getAvailableWritingMods) {
        return writingModsSubject.asObservable();
      }
      if (selector === fromCategories.getCurrentCategoryMods) {
        return categoryModsSubject.asObservable();
      }
      return of(null);
    });

    await TestBed.configureTestingModule({
      declarations: [NewWritingComponent],
      imports: [FormsModule],
      providers: [
        { provide: WritingService, useValue: mockWritingService },
        { provide: UiService, useValue: mockUiService },
        { provide: Router, useValue: mockRouter },
        { provide: Store, useValue: mockStore }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(NewWritingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should initialize streams and fetch data on init', () => {
    fixture.detectChanges();

    expect(mockWritingService.getCategories).toHaveBeenCalled();
    expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalled();
  });

  it('should detect saved draft and preload selected category', () => {
    spyOn(localStorage, 'getItem').and.returnValue(
      JSON.stringify({ title: 'draft', post: 'content', cat3: 'A.I.Now.' })
    );

    component.ngOnInit();

    expect(component.hasSavedDraft).toBeTrue();
    expect(component.savedDraftCategory).toBe('A.I.Now.');
    expect(component.selectedCategory).toBe('A.I.Now.');
  });

  it('should start writing from selected category and navigate to current page', () => {
    component.selectedCategory = 'Web Dev Affairs';
    const form = { value: { category_five: 'Ignored Category' } } as NgForm;

    component.onStartWriting(form);

    expect(mockWritingService.startWriting).toHaveBeenCalledWith('Web Dev Affairs');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/current']);
  });

  it('should start writing from form category when selectedCategory is empty', () => {
    component.selectedCategory = '';
    const form = { value: { category_five: 'A.I.Now.' } } as NgForm;

    component.onStartWriting(form);

    expect(mockWritingService.startWriting).toHaveBeenCalledWith('A.I.Now.');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/current']);
  });

  it('should continue draft using saved category and navigate', () => {
    component.savedDraftCategory = 'Web Dev Affairs';

    component.onContinueDraft();

    expect(mockWritingService.startWriting).toHaveBeenCalledWith('Web Dev Affairs');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/writing/current']);
  });

  it('should unsubscribe from loading stream on destroy', () => {
    fixture.detectChanges();
    const unsubscribeSpy = spyOn((component as any).loadingSubscription, 'unsubscribe');

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
