import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NewsArticleSearchComponent } from './news-article-search.component';
import { NewsService } from '../news.service';
import { Store } from '@ngrx/store';

describe('NewsArticleSearchComponent', () => {
  let component: NewsArticleSearchComponent;
  let fixture: ComponentFixture<NewsArticleSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewsArticleSearchComponent],
      providers: [
        {
          provide: NewsService,
          useValue: jasmine.createSpyObj<NewsService>('NewsService', ['search']),
        },
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch'),
          },
        },
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
});
