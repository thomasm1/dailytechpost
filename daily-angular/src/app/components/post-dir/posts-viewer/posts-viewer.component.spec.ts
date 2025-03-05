import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostsViewerComponent } from './posts-viewer.component';

describe('PostsViewerComponent', () => {
  let component: PostsViewerComponent;
  let fixture: ComponentFixture<PostsViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
