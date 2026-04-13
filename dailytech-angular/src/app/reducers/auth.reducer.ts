import { Action, ActionReducer } from '@ngrx/store';
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED  } from './auth.actions';

const initialState: State = {
  isAuthenticated: false
};

export const authReducer: ActionReducer<State, Action> = (state = initialState, action: Action): State => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticated: true
      };
      case SET_UNAUTHENTICATED:
        return {
          isAuthenticated: false
        }
      default: {
        return state;
      }
  }
};

export interface State {
  isAuthenticated: boolean
};

export const getIsAuth = (state: State) => state.isAuthenticated;
