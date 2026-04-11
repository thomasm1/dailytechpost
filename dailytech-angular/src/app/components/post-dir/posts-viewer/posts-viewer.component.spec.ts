import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { PostEntityViewerComponent } from './posts-viewer.component';
import { PostEntityService } from '../post-entity.service';

describe('PostsViewerComponent', () => {
  let component: PostEntityViewerComponent;
  let fixture: ComponentFixture<PostEntityViewerComponent>;
  let mockPostEntityService: jasmine.SpyObj<PostEntityService>;

  beforeEach(waitForAsync(() => {
    mockPostEntityService = jasmine.createSpyObj<PostEntityService>('PostEntityService', [
      'retrieveAllPosts',
      'retrieveAllPostsByEmail',
      'retrievePost',
      'createPost',
      'updatePost',
      'deletePost'
    ]);
    mockPostEntityService.retrieveAllPosts.and.returnValue(of([]));
    mockPostEntityService.retrieveAllPostsByEmail.and.returnValue(of([]));
    mockPostEntityService.retrievePost.and.returnValue(of({} as any));
    mockPostEntityService.createPost.and.returnValue(of({} as any));
    mockPostEntityService.updatePost.and.returnValue(of({} as any));
    mockPostEntityService.deletePost.and.returnValue(of({} as any));

    TestBed.configureTestingModule({
      declarations: [PostEntityViewerComponent],
      providers: [
        {
          provide: PostEntityService,
          useValue: mockPostEntityService,
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
