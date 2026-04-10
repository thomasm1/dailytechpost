import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { PastWritingsComponent } from './past-writings.component';
import { WritingService } from '../writing.service';
import { Store } from '@ngrx/store';

describe('PastWritingsComponent', () => {
  let component: PastWritingsComponent;
  let fixture: ComponentFixture<PastWritingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PastWritingsComponent],
      providers: [
        {
          provide: WritingService,
          useValue: jasmine.createSpyObj<WritingService>('WritingService', ['fetchCompletedOrCancelledWritings']),
        },
        {
          provide: Store,
          useValue: {
            select: () => of([]),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
