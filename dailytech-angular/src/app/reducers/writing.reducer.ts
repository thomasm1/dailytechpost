import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WritingActions,
  SET_AVAILABLE_WRITINGS,
  SET_FINISHED_WRITINGS,
  START_WRITING,
  STOP_WRITING,
} from './writing.actions';
import { WritingMod } from '../models/writing-mods.model';
import * as fromRoot from './app.reducer';

export interface WritingState {
  /// State for this module;
  availableWritingMods: WritingMod[]; /// bc this is lazy loaded;
  finishedWritingMods: WritingMod[]; // Writing State Knows about the app state, but app state doesn't know about Writing!!
  activeWriting: WritingMod;
}

export interface State extends fromRoot.State {
  writing: WritingState;
}
const initialState: WritingState = {
  availableWritingMods: [], // based on writing state
  finishedWritingMods: [],
  activeWriting: null,
};

export function writingReducer(state = initialState, action: WritingActions) {
  switch (action.type) {
    case SET_AVAILABLE_WRITINGS:
      return {
        ...state, // this will pull out available and finished
       availableWritingMods: action.payload
      };
    case SET_FINISHED_WRITINGS:
      return {
        ...state, // this will pull out available and finished
        finishedWritingMods: action.payload
      };
    case START_WRITING:
      return {
        ...state, // this will pull out available and finished
        activeWriting: { ... state.availableWritingMods.find(ex => ex.category === action.payload) }
      };
    case STOP_WRITING:
      return {
        ...state,
        activeWriting: null
      };
    default: {
      return state;
    }
  }
}


export const getWritingState = createFeatureSelector<WritingState>('writing');

// export const getAvailableWritingMods = (state: WritingState) => state.availableWritingMods;
export const getAvailableWritingMods = createSelector(getWritingState, (state: WritingState) => state.availableWritingMods);

export const getFinishedWritingMods = createSelector(getWritingState, (state: WritingState) => state.finishedWritingMods);

export const getActiveWriting = createSelector(getWritingState, (state: WritingState) => state.activeWriting);

export const getIsWriting = createSelector(getWritingState, (state: WritingState) => state.activeWriting != null);

