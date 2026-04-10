import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { NewsArticleResultsComponent } from './news-article-results.component';
import { Store } from '@ngrx/store';

describe('NewsArticleResultsComponent', () => {
  let component: NewsArticleResultsComponent;
  let fixture: ComponentFixture<NewsArticleResultsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewsArticleResultsComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: () => of([]),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
