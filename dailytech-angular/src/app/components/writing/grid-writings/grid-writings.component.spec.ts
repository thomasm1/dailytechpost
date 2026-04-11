import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import {GridWritingsComponent } from './grid-writings.component';
import { WritingService } from '../writing.service';

describe('GridWritingsComponent', () => {
  let component: GridWritingsComponent;
  let fixture: ComponentFixture<GridWritingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWritingsComponent ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
