import { Action } from '@ngrx/store';
import { AuthData } from '../models/auth-data.model';

export const  SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';
export const AUTH_INIT_LISTENER = '[Auth] Init Listener';
export const AUTH_LOGIN_START = '[Auth] Login Start';
export const AUTH_REGISTER_START = '[Auth] Register Start';
export const AUTH_LOGOUT_START = '[Auth] Logout Start';

export class AuthInitListener implements Action {
  readonly type = AUTH_INIT_LISTENER;
}

export class AuthLoginStart implements Action {
  readonly type = AUTH_LOGIN_START;
  constructor(public payload: AuthData) {}
}

export class AuthRegisterStart implements Action {
  readonly type = AUTH_REGISTER_START;
  constructor(public payload: AuthData) {}
}

export class AuthLogoutStart implements Action {
  readonly type = AUTH_LOGOUT_START;
}

export class SetAuthenticated implements Action {
  readonly type = SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
  readonly type = SET_UNAUTHENTICATED;
}

export type AuthActions =
  | AuthInitListener
  | AuthLoginStart
  | AuthRegisterStart
  | AuthLogoutStart
  | SetAuthenticated
  | SetUnauthenticated;
