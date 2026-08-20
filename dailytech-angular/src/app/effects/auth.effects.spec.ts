import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthEffects } from './auth.effects';
import { AwsAuthenticationService } from '../service/auth/aws-authentication.service';
import { FirebaseAuthService } from '../service/auth/firebase-auth.service';
import { WritingService } from '../components/writing/writing.service';
import { UiService } from '../service/ui.service';
import * as AuthActions from '../reducers/auth.actions';
import * as UI from '../reducers/ui.actions';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;
  let firebaseAuthService: jasmine.SpyObj<FirebaseAuthService>;

  beforeEach(() => {
    firebaseAuthService = jasmine.createSpyObj<FirebaseAuthService>('FirebaseAuthService', [
      'authState$',
      'login',
      'registerUser',
      'persistFirebaseSession',
      'logout',
      'clearFirebaseSession',
    ]);

    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate']),
        },
        {
          provide: UiService,
          useValue: jasmine.createSpyObj<UiService>('UiService', ['showSnackBar']),
        },
        {
          provide: AwsAuthenticationService,
          useValue: jasmine.createSpyObj<AwsAuthenticationService>('AwsAuthenticationService', [
            'hasActiveSession',
            'logout',
            'clearSession',
          ]),
        },
        {
          provide: FirebaseAuthService,
          useValue: firebaseAuthService,
        },
        {
          provide: WritingService,
          useValue: jasmine.createSpyObj<WritingService>('WritingService', ['cancelSubscriptions']),
        },
      ],
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should persist Firebase session and set authenticated after login succeeds', (done) => {
    const firebaseUser = { email: 'writer@example.com' };
    firebaseAuthService.login.and.returnValue(Promise.resolve({ user: firebaseUser }));
    firebaseAuthService.persistFirebaseSession.and.returnValue(Promise.resolve());

    actions$ = of(new AuthActions.AuthLoginStart({
      email: 'writer@example.com',
      password: 'secret',
    }));

    const emitted: any[] = [];

    effects.login$.subscribe({
      next: (action) => emitted.push(action),
      complete: () => {
        expect(firebaseAuthService.login).toHaveBeenCalledWith({
          email: 'writer@example.com',
          password: 'secret',
        });
        expect(firebaseAuthService.persistFirebaseSession).toHaveBeenCalledWith(firebaseUser);
        expect(emitted[0]).toEqual(new UI.StopLoading());
        expect(emitted[1]).toEqual(new AuthActions.SetAuthenticated());
        done();
      },
    });
  });
});