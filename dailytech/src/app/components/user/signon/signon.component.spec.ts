import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignonComponent } from './signon.component';

describe('SignonComponent', () => {
  let component: SignonComponent;
  let fixture: ComponentFixture<SignonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
