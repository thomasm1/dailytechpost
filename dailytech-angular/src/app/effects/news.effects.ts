import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { NewsService } from '../components/news/news.service';
import { SEARCH_NEWS_START, SearchNewsStart } from '../reducers/news.actions';
import { SET_SEARCH_RESULT } from '../reducers/news-search.reducer';

@Injectable()
export class NewsEffects {
  searchNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SEARCH_NEWS_START),
      switchMap((action: SearchNewsStart) =>
        this.newsService.search(action.payload).pipe(
          map((res: any) => ({ type: SET_SEARCH_RESULT, payload: (res as any)?.response?.docs || [] })),
          catchError(() => of({ type: SET_SEARCH_RESULT, payload: [] }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}
