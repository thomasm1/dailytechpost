import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryActions,
  SET_CURRENT_CATEGORIES,
  SET_UPDATED_CATEGORIES} from './category.actions'
 import { CategoryMod } from '../models/category-mods.model';
import * as fromRoot from './app.reducer';

/// State for this module;
export interface CategoryState {
  currentCategoryMods: CategoryMod[];
  updatedCategoryMods: CategoryMod[];
}
 
export interface State extends fromRoot.State { 
  category: CategoryState;
}

const initialState: CategoryState = {
  currentCategoryMods: [],
  updatedCategoryMods: []
};
 
export function categoryReducer(state = initialState, action: CategoryActions) {
  switch (action.type) {
    
     case SET_CURRENT_CATEGORIES:
      return {
        ...state,  
       currentCategoryMods: action.payload
      };
 
    case SET_UPDATED_CATEGORIES:
      return {
        ...state, // this will pull out available and finished
        updatedCategoryMods: action.payload
      }; 
  
    default: {
      return state;
    }
  }
}

export const getCategoryState = createFeatureSelector<CategoryState>('category');
export const getCurrentCategoryMods = createSelector(getCategoryState, (state: CategoryState) => state.currentCategoryMods);
export const getUpdatedCategoryMods = createSelector(getCategoryState, (state: CategoryState) => state.updatedCategoryMods);
 

