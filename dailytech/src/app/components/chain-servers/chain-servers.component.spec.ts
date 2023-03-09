import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainServersComponent } from './chain-servers.component';

describe('ChainServersComponent', () => {
  let component: ChainServersComponent;
  let fixture: ComponentFixture<ChainServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
