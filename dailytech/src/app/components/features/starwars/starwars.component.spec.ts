import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StarwarsComponent } from './starwars.component';

describe('StarwarsComponent', () => {
  let component: StarwarsComponent;
  let fixture: ComponentFixture<StarwarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
