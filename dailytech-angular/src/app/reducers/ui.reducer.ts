import { Action, ActionReducer } from '@ngrx/store';
import { START_LOADING, STOP_LOADING } from './ui.actions';

const initialState: State = {
  isLoading: false
};

export const uiReducer: ActionReducer<State, Action> = (state = initialState, action: Action): State => {
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
};

export interface State {
  isLoading: boolean;
};

export const getIsLoading = (state: State) => state.isLoading;
