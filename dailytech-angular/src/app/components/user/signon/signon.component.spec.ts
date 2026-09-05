import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { SignonComponent } from './signon.component';
import { AwsAuthenticationService } from '../../../service/auth/aws-authentication.service';
import { AuthPolicyService } from '../../../service/auth/auth-policy.service';
import { UiService } from 'src/app/service/ui.service';
import { Store } from '@ngrx/store';

describe('SignonComponent', () => {
  let component: SignonComponent;
  let fixture: ComponentFixture<SignonComponent>;
  let router: jasmine.SpyObj<Router>;
  let awsAuthService: jasmine.SpyObj<AwsAuthenticationService>;
  let authPolicy: jasmine.SpyObj<AuthPolicyService>;

  beforeEach(waitForAsync(() => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    awsAuthService = jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', [
      'executeAuthAwsService',
      'logout'
    ]);
    authPolicy = jasmine.createSpyObj<AuthPolicyService>('AuthPolicyService', ['canAccessAdmin']);

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
          provide: AuthPolicyService,
          useValue: authPolicy,
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

  it('should admin login to AWS before navigating', async () => {
    awsAuthService.executeAuthAwsService.and.returnValue(of({}));
    authPolicy.canAccessAdmin.and.returnValue(true);
    const form = { value: { email: 'thomas1@gmail.com', password: 'secret' } } as any;

    component.handleAwsAuthLogin(form);

    expect(awsAuthService.executeAuthAwsService).toHaveBeenCalledWith('thomas1@gmail.com', 'secret');
    expect(router.navigate).toHaveBeenCalledWith(['admin', 'thomas1@gmail.com']);
    expect(component.authLogin).toBeTrue();
    expect(component.invalidLogin).toBeFalse();
  });

  it('should clear AWS session when AWS login does not have admin role', () => {
    awsAuthService.executeAuthAwsService.and.returnValue(of({}));
    authPolicy.canAccessAdmin.and.returnValue(false);
    const form = { value: { email: 'thomas1@gmail.com', password: 'secret' } } as any;

    component.handleAwsAuthLogin(form);

    expect(awsAuthService.logout).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.authLogin).toBeFalse();
    expect(component.invalidLogin).toBeTrue();
  });
});
