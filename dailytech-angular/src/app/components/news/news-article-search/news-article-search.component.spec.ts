import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewsArticleSearchComponent } from './news-article-search.component';
import { Store } from '@ngrx/store';
import { SearchNewsStart } from '../../../reducers/news.actions';

describe('NewsArticleSearchComponent', () => {
  let component: NewsArticleSearchComponent;
  let fixture: ComponentFixture<NewsArticleSearchComponent>;
  let store: jasmine.SpyObj<Store<any>>;

  beforeEach(waitForAsync(() => {
    store = jasmine.createSpyObj<Store<any>>('Store', ['dispatch']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NewsArticleSearchComponent],
      providers: [
        { provide: Store, useValue: store },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch search criteria with formatted dates', () => {
    component.searchData = {
      q: 'angular',
      begin_date: '2026-05-01',
      end_date: '2026-05-24',
      sort: 'oldest'
    } as any;

    component.search({} as any);

    expect(store.dispatch).toHaveBeenCalledWith(new SearchNewsStart({
      begin_date: '20260501',
      end_date: '20260524',
      q: 'angular',
      sort: 'oldest'
    }));
  });
});
