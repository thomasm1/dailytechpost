import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WritingActions,
  SET_AVAILABLE_WRITINGS,
  SET_FINISHED_WRITINGS,
  START_WRITING,
  STOP_WRITING,
} from './writing.actions';
import { WritingBlog } from '../models/writing-blogs.model';
import * as fromRoot from './app.reducer';

export interface WritingState {
  /// State for this module;
  availableWritingBlogs: WritingBlog[]; /// bc this is lazy loaded;
  finishedWritingBlogs: WritingBlog[]; // Writing State Knows about the app state, but app state doesn't know about Writing!!
  activeWriting: WritingBlog;
}

export interface State extends fromRoot.State {
  writing: WritingState;
}
const initialState: WritingState = {
  availableWritingBlogs: [], // based on writing state
  finishedWritingBlogs: [],
  activeWriting: null,
};

export function writingReducer(state = initialState, action: WritingActions) {
  switch (action.type) {
    case SET_AVAILABLE_WRITINGS:
      return {
        ...state, // this will pull out available and finished
       availableWritingBlogs: action.payload
      };
    case SET_FINISHED_WRITINGS:
      return {
        ...state, // this will pull out available and finished
        finishedWritingBlogs: action.payload
      };
    case START_WRITING:
      return {
        ...state, // this will pull out available and finished
        activeWriting: { ... state.availableWritingBlogs.find(ex => ex.id === action.payload) }
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

// export const getAvailableWritingBlogs = (state: WritingState) => state.availableWritingBlogs;
export const getAvailableWritingBlogs = createSelector(getWritingState, (state: WritingState) => state.availableWritingBlogs);

export const getFinishedWritingBlogs = createSelector(getWritingState, (state: WritingState) => state.finishedWritingBlogs);

export const getActiveWriting = createSelector(getWritingState, (state: WritingState) => state.activeWriting);

export const getIsWriting = createSelector(getWritingState, (state: WritingState) => state.activeWriting != null);

