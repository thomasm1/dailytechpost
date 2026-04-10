import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ChainServersComponent } from './chain-servers.component';

describe('ChainServersComponent', () => {
  let component: ChainServersComponent;
  let fixture: ComponentFixture<ChainServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainServersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ChainServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
