import { Action } from '@ngrx/store';
import { START_LOADING, STOP_LOADING, UIActions } from './ui.actions';

const initialState: State = {
  isLoading: false
};

export function uiReducer(state = initialState, action: UIActions) {
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
  isLoading: boolean;
};

export const getIsLoading = (state: State) => state.isLoading;
