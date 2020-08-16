import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCancelComponent } from './post-cancel.component';

describe('PostCancelComponent', () => {
  let component: PostCancelComponent;
  let fixture: ComponentFixture<PostCancelComponent>;

  beforeEach(async(() => {
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
