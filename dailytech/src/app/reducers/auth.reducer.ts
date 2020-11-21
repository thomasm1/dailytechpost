import { Action } from '@ngrx/store';
import {   } from './auth.actions';

const initialState: State = {
  isAuthenticated: false
};

export function authReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };
      case STOP_LOADING:
        return {
          isLoading: false
        }
      default: {
        return state;
      }
  }
}

export interface State {
  isAuthenticated: boolean
};

export const getIsLoading = (state: State) => state.isLoading;
