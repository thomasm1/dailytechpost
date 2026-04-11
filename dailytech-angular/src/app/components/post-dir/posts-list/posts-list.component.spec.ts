import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { PostsListComponent } from './posts-list.component';
import { PostEntityService } from '../post-entity.service';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let mockPostEntityService: jasmine.SpyObj<PostEntityService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    mockPostEntityService = jasmine.createSpyObj('PostEntityService', [
      'retrieveAllPostsByEmail',
      'retrieveAllPosts',
      'deletePost'
    ]);
    mockPostEntityService.retrieveAllPostsByEmail.and.returnValue(of([]));
    mockPostEntityService.retrieveAllPosts.and.returnValue(of([]));
    mockPostEntityService.deletePost.and.returnValue(of({} as any));
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      providers: [
        { provide: PostEntityService, useValue: mockPostEntityService },
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
