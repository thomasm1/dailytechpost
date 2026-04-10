import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';
import { FirebaseAuthService } from '../../../service/auth/firebase-auth.service';
import { UiService } from '../../../service/ui.service';
import { Store } from '@ngrx/store';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: FirebaseAuthService,
          useValue: jasmine.createSpyObj<FirebaseAuthService>('FirebaseAuthService', ['registerUser']),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj<UiService>('UiService', ['showSnackBar']),
        },
        {
          provide: Store,
          useValue: {
            select: () => of(false),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
