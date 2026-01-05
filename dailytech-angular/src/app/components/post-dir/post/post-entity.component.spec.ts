import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostEntityComponent } from './post-entity.component';

describe('PostComponent', () => {
  let component: PostEntityComponent;
  let fixture: ComponentFixture<PostEntityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
