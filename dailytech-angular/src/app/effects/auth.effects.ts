import { Injectable } from '@angular/core';
import { Actions, ROOT_EFFECTS_INIT, createEffect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { UiService } from '../service/ui.service';
import { AwsAuthenticationService } from '../service/auth/aws-authentication.service';
import { WritingService } from '../components/writing/writing.service';
import * as UI from '../reducers/ui.actions';
import {
  AUTH_INIT_LISTENER,
  AUTH_LOGIN_START,
  AUTH_LOGOUT_START,
  AUTH_REGISTER_START,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SetAuthenticated,
  SetUnauthenticated,
  AuthLoginStart,
  AuthRegisterStart,
} from '../reducers/auth.actions';

const AUTH_STORAGE_KEY = 'dailytech.auth.isAuthenticated';

@Injectable()
export class AuthEffects {
  initAuthListener$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_INIT_LISTENER),
      switchMap(() =>
        this.afAuth.authState.pipe(
          map((user) => (user ? new SetAuthenticated() : new SetUnauthenticated()))
        )
      )
    )
  );

  onAuthenticated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SET_AUTHENTICATED),
        tap(() => {
          this.router.navigate(['/writing']);
        })
      ),
    { dispatch: false }
  );

  onUnauthenticated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SET_UNAUTHENTICATED),
        tap(() => {
          this.writingService.cancelSubscriptions();
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_LOGIN_START),
      exhaustMap((action: AuthLoginStart) =>
        from(this.afAuth.signInWithEmailAndPassword(action.payload.email, action.payload.password)).pipe(
          map(() => new UI.StopLoading()),
          catchError((error) => {
            this.uiService.showSnackBar(error?.message || 'Login failed', null, 2500);
            return of(new UI.StopLoading());
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_REGISTER_START),
      exhaustMap((action: AuthRegisterStart) =>
        from(this.afAuth.createUserWithEmailAndPassword(action.payload.email, action.payload.password)).pipe(
          map(() => new UI.StopLoading()),
          catchError((error) => {
            this.uiService.showSnackBar(error?.message || 'Registration failed', null, 2500);
            return of(new UI.StopLoading());
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_LOGOUT_START),
      exhaustMap(() => {
        this.awsAuthService.logout();
        return from(this.afAuth.signOut()).pipe(
          map(() => new SetUnauthenticated()),
          catchError(() => of(new SetUnauthenticated()))
        );
      })
    )
  );

  startLoadingOnAuthRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_LOGIN_START, AUTH_REGISTER_START),
      map(() => new UI.StartLoading())
    )
  );

  hydrateAuthFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const storedValue = localStorage.getItem(AUTH_STORAGE_KEY);
        return storedValue === 'true' ? new SetAuthenticated() : new SetUnauthenticated();
      })
    ),
    { dispatch: true } //default anyway
  );

  persistAuthenticatedToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SET_AUTHENTICATED),
        tap(() => {
          localStorage.setItem(AUTH_STORAGE_KEY, 'true');
        })
      ),
    { dispatch: false }
  );

  persistUnauthenticatedToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SET_UNAUTHENTICATED),
        tap(() => {
          localStorage.setItem(AUTH_STORAGE_KEY, 'false');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private afAuth: AngularFireAuth,
    private router: Router,
    private uiService: UiService,
    private awsAuthService: AwsAuthenticationService,
    private writingService: WritingService
  ) {}
}
