import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentWritingComponent } from './current-writing.component';

describe('CurrentWritingComponent', () => {
  let component: CurrentWritingComponent;
  let fixture: ComponentFixture<CurrentWritingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
