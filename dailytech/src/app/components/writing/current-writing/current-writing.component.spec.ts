import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWritingComponent } from './current-writing.component';

describe('CurrentWritingComponent', () => {
  let component: CurrentWritingComponent;
  let fixture: ComponentFixture<CurrentWritingComponent>;

  beforeEach(async(() => {
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
