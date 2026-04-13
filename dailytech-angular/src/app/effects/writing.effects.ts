import { Injectable } from '@angular/core';
import { Actions, ROOT_EFFECTS_INIT, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import {
  APPLY_WRITING_DRAFT,
  CLEAR_WRITING_DRAFT,
  HYDRATE_WRITING_DRAFT,
  SAVE_WRITING_DRAFT,
  START_WRITING,
  ApplyWritingDraft,
  SaveWritingDraft,
  WritingDraft,
} from '../reducers/writing.actions';

const WRITING_DRAFT_KEY = 'writingDraft';

@Injectable()
export class WritingEffects {
  hydrateDraftOnInit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => new ApplyWritingDraft(this.readDraftFromStorage()))
    )
  );

  hydrateDraftOnStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(START_WRITING),
      map(() => new ApplyWritingDraft(this.readDraftFromStorage()))
    )
  );

  hydrateDraftOnDemand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HYDRATE_WRITING_DRAFT),
      map(() => new ApplyWritingDraft(this.readDraftFromStorage()))
    )
  );

  saveDraftToStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SAVE_WRITING_DRAFT),
        tap((action: SaveWritingDraft) => {
          localStorage.setItem(WRITING_DRAFT_KEY, JSON.stringify(action.payload));
        })
      ),
    { dispatch: false }
  );

  clearDraftFromStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CLEAR_WRITING_DRAFT),
        tap(() => {
          localStorage.removeItem(WRITING_DRAFT_KEY);
        })
      ),
    { dispatch: false }
  );

  clearDraftState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CLEAR_WRITING_DRAFT),
      map(() => ({ type: APPLY_WRITING_DRAFT, payload: null }))
    )
  );

  private readDraftFromStorage(): WritingDraft | null {
    const draftRaw = localStorage.getItem(WRITING_DRAFT_KEY);
    if (!draftRaw) {
      return null;
    }

    try {
      const draft = JSON.parse(draftRaw);
      const parsed: WritingDraft = {
        title: (draft?.title || '').toString(),
        post: (draft?.post || '').toString(),
        cat3: (draft?.cat3 || '').toString(),
      };
      if (!parsed.title.trim() && !parsed.post.trim() && !parsed.cat3.trim()) {
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  }

  constructor(private actions$: Actions) {}
}
