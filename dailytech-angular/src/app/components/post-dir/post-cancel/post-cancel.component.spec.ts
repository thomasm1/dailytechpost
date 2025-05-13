import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostCancelComponent } from './post-cancel.component';

describe('PostCancelComponent', () => {
  let component: PostCancelComponent;
  let fixture: ComponentFixture<PostCancelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
