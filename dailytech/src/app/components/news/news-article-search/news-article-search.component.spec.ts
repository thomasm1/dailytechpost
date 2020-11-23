import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleSearchComponent } from './news-article-search.component';

describe('NewsArticleSearchComponent', () => {
  let component: NewsArticleSearchComponent;
  let fixture: ComponentFixture<NewsArticleSearchComponent>;

  beforeEach(async(() => {
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
