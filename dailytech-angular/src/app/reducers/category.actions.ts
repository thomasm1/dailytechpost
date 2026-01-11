import { Action } from '@ngrx/store';
import { CategoryMod } from '../models/category-mods.model';

export const SET_CURRENT_CATEGORIES = '[Category] Set Current Categories';
export const SET_UPDATED_CATEGORIES = '[Category] Set Updated Categories';
 
export class SetCurrentCategories implements Action {
  readonly type = SET_CURRENT_CATEGORIES;
  constructor(public payload: CategoryMod[]) {}
}

export class SetUpdatedCategories implements Action {
  readonly type = SET_UPDATED_CATEGORIES;
  constructor(public payload: CategoryMod[]) {}
} 
 
export type CategoryActions = SetCurrentCategories | SetUpdatedCategories ;
 