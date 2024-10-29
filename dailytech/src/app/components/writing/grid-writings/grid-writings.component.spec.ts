import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {GridWritingsComponent } from './grid-writings.component';

describe('GridWritingsComponent', () => {
  let component: GridWritingsComponent;
  let fixture: ComponentFixture<GridWritingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWritingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWritingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
