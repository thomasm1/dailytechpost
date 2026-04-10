import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  let mockStore: jasmine.SpyObj<Store>;
  let loadingStateChanged: Subject<boolean>;
  let isAuthSubject: BehaviorSubject<boolean>;
  let writingModsSubject: BehaviorSubject<WritingMod[]>;
  let categoryModsSubject: BehaviorSubject<CategoryMod[]>;

  const mockWritingMods: WritingMod[] = [
    {
      id: '1',
      cat3: 'Web Dev Affairs',
      title: 'Tech Article',
      durationGoal: 12000,
      wordCount: 100,
      date: new Date('2026-01-01')
    },
    {
      id: '2',
      cat3: 'A.I.Now.',
      title: 'AI Post',
      durationGoal: 12000,
      wordCount: 150,
      date: new Date('2026-01-02')
    }
  ];

  const mockCategoryMods: CategoryMod[] = [
    {
      id: 'cat-1',
      cat3: 'Web Dev Affairs',
      durationGoal: 12000,
      news: ['https://example.com/web-dev']
    },
    {
      id: 'cat-2',
      cat3: 'A.I.Now.',
      durationGoal: 12000,
      news: ['https://example.com/ai']
    }
  ];

  beforeEach(async () => {
    mockWritingService = jasmine.createSpyObj('WritingService', [
      'fetchAvailableWritingMods',
      'getCategories',
      'startWriting'
    ]);

    loadingStateChanged = new Subject<boolean>();
    const mockUiService = {
      loadingStateChanged
    };

    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    isAuthSubject = new BehaviorSubject<boolean>(true);
    writingModsSubject = new BehaviorSubject<WritingMod[]>(mockWritingMods);
    categoryModsSubject = new BehaviorSubject<CategoryMod[]>(mockCategoryMods);

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

  it('should initialize auth, categories, and writings on init', () => {
    fixture.detectChanges();

    const selectedArgs: any[] = mockStore.select.calls.allArgs().map(args => args[0] as any);

    expect(selectedArgs.includes(fromRoot.getIsAuth)).toBe(true);
    expect(selectedArgs.includes(fromCategories.getCurrentCategoryMods)).toBe(true);
    expect(selectedArgs.includes(fromWriting.getAvailableWritingMods)).toBe(true);
    expect(mockWritingService.getCategories).toHaveBeenCalled();
    expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalled();
  });

  it('should expose category and writing streams from the store', done => {
    fixture.detectChanges();

    component.categoryMods$.subscribe(categories => {
      expect(categories).toEqual(mockCategoryMods);
      component.writingMods$.subscribe(writings => {
        expect(writings).toEqual(mockWritingMods);
        done();
      });
    });
  });

  it('should update isLoading from the UI service stream', () => {
    fixture.detectChanges();

    loadingStateChanged.next(false);
    expect(component.isLoading).toBe(false);

    loadingStateChanged.next(true);
    expect(component.isLoading).toBe(true);
  });

  it('should call fetchAvailableWritingMods when fetchWritings is invoked', () => {
    component.fetchWritings();

    expect(mockWritingService.fetchAvailableWritingMods).toHaveBeenCalled();
  });

  it('should call getCategories when fetchCategories is invoked', () => {
    component.fetchCategories();

    expect(mockWritingService.getCategories).toHaveBeenCalled();
  });

  it('should start writing with the selected category from the form', () => {
    const form = {
      value: { category_five: 'A.I.Now.' }
    } as NgForm;

    component.onStartWriting(form);

    expect(mockWritingService.startWriting).toHaveBeenCalledWith('A.I.Now.');
  });

  it('should unsubscribe from loadingStateChanged on destroy', () => {
    fixture.detectChanges();
    const unsubscribeSpy = spyOn(component['loadingSubscription'], 'unsubscribe');

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should handle destroy when no loading subscription exists', () => {
    component['loadingSubscription'] = undefined as any;

    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
