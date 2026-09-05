import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart9Component } from './chart9.component';

describe('Chart9Component', () => {
  let component: Chart9Component;
  let fixture: ComponentFixture<Chart9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chart9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
