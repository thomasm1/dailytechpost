import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { PostEntityViewerComponent } from './posts-viewer.component';
import { PostEntityService } from '../post-entity.service';

describe('PostsViewerComponent', () => {
  let component: PostEntityViewerComponent;
  let fixture: ComponentFixture<PostEntityViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostEntityViewerComponent],
      providers: [
        {
          provide: PostEntityService,
          useValue: jasmine.createSpyObj<PostEntityService>('PostEntityService', {
            retrieveAllPostsByUsername: of([]),
          }),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEntityViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
