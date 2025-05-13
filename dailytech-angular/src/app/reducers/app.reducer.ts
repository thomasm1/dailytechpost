
// import { ActionReducer } from '@ngrx/store';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';


import * as fromUi from './ui.reducer';
import * as fromAuth from './auth.reducer';
import  { NewsReducer } from './news.reducer';
import { NewsSearchReducer } from './news-search.reducer';

export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

// export const reducers = {
//   searchResults: NewsSearchReducer,
//   menuState: NewsReducer
// }
// export const reducers: ActionReducerMap<State> = {
// };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
