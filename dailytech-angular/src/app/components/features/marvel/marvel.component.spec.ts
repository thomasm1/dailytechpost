import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarvelComponent } from './marvel.component';

describe('MarvelComponent', () => {
  let component: MarvelComponent;
  let fixture: ComponentFixture<MarvelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
