import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart9LineComponent } from './chart9line.component';

describe('Chart9LineComponent', () => {
  let component: Chart9LineComponent;
  let fixture: ComponentFixture<Chart9LineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chart9LineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chart9LineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
