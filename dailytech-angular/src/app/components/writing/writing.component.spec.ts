import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { WritingComponent } from './writing.component';
import { WritingService } from './writing.service';
import { Store } from '@ngrx/store';

describe('WritingComponent', () => {
  let component: WritingComponent;
  let fixture: ComponentFixture<WritingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WritingComponent],
      providers: [
        {
          provide: WritingService,
          useValue: jasmine.createSpyObj<WritingService>('WritingService', ['fetchAvailableWritingMods']),
        },
        {
          provide: Store,
          useValue: {
            select: () => of(false),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
