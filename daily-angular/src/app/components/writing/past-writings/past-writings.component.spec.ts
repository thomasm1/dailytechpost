import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PastWritingsComponent } from './past-writings.component';

describe('PastWritingsComponent', () => {
  let component: PastWritingsComponent;
  let fixture: ComponentFixture<PastWritingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PastWritingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastWritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
