import { Injectable } from '@angular/core';
import { Actions, ROOT_EFFECTS_INIT, createEffect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { UiService } from '../service/ui.service';
import { AUTH_STORAGE_KEY, AwsAuthenticationService } from '../service/auth/aws-authentication.service';
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

@Injectable()
export class AuthEffects {
  initAuthListener$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_INIT_LISTENER),
      switchMap(() =>
        this.afAuth.authState.pipe(
          switchMap((user) => {
            if (!user) {
              return of(this.awsAuthService.hasActiveSession() ? new SetAuthenticated() : new SetUnauthenticated());
            }

            return from(this.awsAuthService.persistFirebaseSession(user)).pipe(
              map(() => new SetAuthenticated()),
              catchError((error) => {
                console.error('Unable to persist Firebase session', error);
                this.awsAuthService.clearSession();
                return of(new SetUnauthenticated());
              })
            );
          })
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
        return this.awsAuthService.hasActiveSession() ? new SetAuthenticated() : new SetUnauthenticated();
      })
    ),
    { dispatch: true } //default anyway
  );

  persistAuthenticatedToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SET_AUTHENTICATED),
        tap(() => {
          sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
        })
      ),
    { dispatch: false }
  );

  persistUnauthenticatedToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SET_UNAUTHENTICATED),
        tap(() => {
          this.awsAuthService.clearSession();
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
