import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsToolBarComponent } from './news-tool-bar.component';

describe('NewsToolBarComponent', () => {
  let component: NewsToolBarComponent;
  let fixture: ComponentFixture<NewsToolBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
