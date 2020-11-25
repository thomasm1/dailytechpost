import { Action } from '@ngrx/store';
import { WritingBlog } from '../models/writing-blogs.model';

export const SET_AVAILABLE_WRITINGS = '[Training] Set Available Writings';
export const SET_FINISHED_WRITINGS = '[Training] Set Finished Writings';
export const START_WRITING = '[Training] Start Writing';
export const STOP_WRITING = '[Training] Stop Writing';

export class SetAvailableWritings implements Action {
  readonly type = SET_AVAILABLE_WRITINGS;
  constructor(public payload: WritingBlog[]) {}
}

export class SetFinishedWritings implements Action {
  readonly type = SET_FINISHED_WRITINGS;
  constructor(public payload: WritingBlog[]) {}
}

export class StartWriting implements Action {
  readonly type = START_WRITING;
  constructor(public payload: WritingBlog) {}
}

export class  StopWriting implements Action {
  readonly type = STOP_WRITING;
   // no payload bc already stored in NGRX
}

export type WritingActions = SetAvailableWritings | SetFinishedWritings | StartWriting | StopWriting;
