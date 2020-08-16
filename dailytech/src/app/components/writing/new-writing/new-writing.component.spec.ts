import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWritingComponent } from './new-writing.component';

describe('NewWritingComponent', () => {
  let component: NewWritingComponent;
  let fixture: ComponentFixture<NewWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
