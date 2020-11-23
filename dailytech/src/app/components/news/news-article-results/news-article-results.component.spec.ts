import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleResultsComponent } from './news-article-results.component';

describe('NewsArticleResultsComponent', () => {
  let component: NewsArticleResultsComponent;
  let fixture: ComponentFixture<NewsArticleResultsComponent>;

  beforeEach(async(() => {
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
