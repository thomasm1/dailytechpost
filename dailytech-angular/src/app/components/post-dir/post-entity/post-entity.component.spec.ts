import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { PostEntityComponent } from './post-entity.component';
import { PostEntityService } from '../post-entity.service';

describe('PostComponent', () => {
  let component: PostEntityComponent;
  let fixture: ComponentFixture<PostEntityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostEntityComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj<MatDialog>('MatDialog', ['open']),
        },
        {
          provide: PostEntityService,
          useValue: jasmine.createSpyObj<PostEntityService>('PostEntityService', {
            retrievePost: of({}),
            createPost: of({}),
            updatePost: of({}),
          }),
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: -1 },
            },
          },
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate']),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(window, 'setInterval').and.returnValue(1 as any);
    fixture = TestBed.createComponent(PostEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
