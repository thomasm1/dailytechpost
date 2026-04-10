import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { SignonComponent } from './signon.component';
import { AwsAuthenticationService } from '../../../service/auth/aws-authentication.service';
import { FirebaseAuthService } from '../../../service/auth/firebase-auth.service';
import { UiService } from 'src/app/service/ui.service';
import { Store } from '@ngrx/store';

describe('SignonComponent', () => {
  let component: SignonComponent;
  let fixture: ComponentFixture<SignonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignonComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate']),
        },
        {
          provide: AwsAuthenticationService,
          useValue: jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', ['executeAuthAwsService']),
        },
        {
          provide: FirebaseAuthService,
          useValue: jasmine.createSpyObj<FirebaseAuthService>('FirebaseAuthService', ['login', 'registerUser']),
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
    fixture = TestBed.createComponent(SignonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
