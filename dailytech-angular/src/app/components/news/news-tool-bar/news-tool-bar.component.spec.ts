import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { NewsToolBarComponent } from './news-tool-bar.component';
import { Store } from '@ngrx/store';

describe('NewsToolBarComponent', () => {
  let component: NewsToolBarComponent;
  let fixture: ComponentFixture<NewsToolBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewsToolBarComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            pipe: () => of(false),
            dispatch: jasmine.createSpy('dispatch'),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
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
