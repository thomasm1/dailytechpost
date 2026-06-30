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
  let router: jasmine.SpyObj<Router>;
  let awsAuthService: jasmine.SpyObj<AwsAuthenticationService>;
  let firebaseAuthService: jasmine.SpyObj<FirebaseAuthService>;

  beforeEach(waitForAsync(() => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    awsAuthService = jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', [
      'executeAuthAwsService',
      'logout'
    ]);
    firebaseAuthService = jasmine.createSpyObj<FirebaseAuthService>('FirebaseAuthService', ['login', 'registerUser']);

    TestBed.configureTestingModule({
      declarations: [SignonComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        {
          provide: AwsAuthenticationService,
          useValue: awsAuthService,
        },
        {
          provide: FirebaseAuthService,
          useValue: firebaseAuthService,
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

  it('should admin login to AWS and Firebase before navigating', async () => {
    awsAuthService.executeAuthAwsService.and.returnValue(of({}));
    firebaseAuthService.login.and.returnValue(Promise.resolve({} as any));
    const form = { value: { email: 'thomas1@gmail.com', password: 'secret' } } as any;

    component.handleAwsAuthLogin(form);
    await Promise.resolve();

    expect(awsAuthService.executeAuthAwsService).toHaveBeenCalledWith('thomas1@gmail.com', 'secret');
    expect(firebaseAuthService.login).toHaveBeenCalledWith({
      email: 'thomas1@gmail.com',
      password: 'secret'
    });
    expect(router.navigate).toHaveBeenCalledWith(['admin', 'thomas1@gmail.com']);
    expect(component.authLogin).toBeTrue();
    expect(component.invalidLogin).toBeFalse();
  });

  it('should clear AWS session when admin Firebase login fails', async () => {
    awsAuthService.executeAuthAwsService.and.returnValue(of({}));
    firebaseAuthService.login.and.returnValue(Promise.reject(new Error('Firebase failed')));
    const form = { value: { email: 'thomas1@gmail.com', password: 'secret' } } as any;

    component.handleAwsAuthLogin(form);
    await Promise.resolve();
    await Promise.resolve();

    expect(awsAuthService.logout).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.authLogin).toBeFalse();
    expect(component.invalidLogin).toBeTrue();
  });
});
