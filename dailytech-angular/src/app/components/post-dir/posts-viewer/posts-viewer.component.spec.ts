import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostEntityViewerComponent } from './posts-viewer.component';

describe('PostsViewerComponent', () => {
  let component: PostEntityViewerComponent;
  let fixture: ComponentFixture<PostEntityViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEntityViewerComponent ]
    })
    .compileComponents();
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
