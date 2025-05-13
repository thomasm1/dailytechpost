import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsArticleResultsComponent } from './news-article-results.component';

describe('NewsArticleResultsComponent', () => {
  let component: NewsArticleResultsComponent;
  let fixture: ComponentFixture<NewsArticleResultsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleResultsComponent ]
    })
    .compileComponents();
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
