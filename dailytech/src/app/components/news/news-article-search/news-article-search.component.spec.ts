import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsArticleSearchComponent } from './news-article-search.component';

describe('NewsArticleSearchComponent', () => {
  let component: NewsArticleSearchComponent;
  let fixture: ComponentFixture<NewsArticleSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleSearchComponent ]
    })
    .compileComponents();
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
