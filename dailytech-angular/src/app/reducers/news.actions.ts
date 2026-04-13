import { Action } from '@ngrx/store';

export const SEARCH_NEWS_START = '[News] Search Start';

export interface NewsSearchPayload {
  begin_date: string;
  end_date: string;
  q: string;
  sort?: string;
}

export class SearchNewsStart implements Action {
  readonly type = SEARCH_NEWS_START;
  constructor(public payload: NewsSearchPayload) {}
}

export type NewsActions = SearchNewsStart;
