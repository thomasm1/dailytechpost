import { Action } from '@ngrx/store';
import { WritingBlog } from '../models/writing-blogs.model';

export const SET_AVAILABLE_WRITINGS = '[Writing] Set Available Writings';
export const SET_FINISHED_WRITINGS = '[Writing] Set Finished Writings';
export const START_WRITING = '[Writing] Start Writing';
export const STOP_WRITING = '[Writing] Stop Writing';

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
  constructor(public payload: string) {}
}

export class  StopWriting implements Action {
  readonly type = STOP_WRITING;
   // no payload bc already stored in NGRX
}

export type WritingActions = SetAvailableWritings | SetFinishedWritings | StartWriting | StopWriting;
