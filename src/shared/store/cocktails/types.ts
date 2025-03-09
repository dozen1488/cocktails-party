import { Cocktail } from '@/shared/api';

export interface CocktailsState {
  cocktailsMap: Record<string, Cocktail[]>;
  selectedName: string | null;
  isLoading: boolean;
  error: string | null;
}

export enum CocktailsActionType {
  SET_COCKTAILS = 'SET_COCKTAILS',
  SET_SELECTED_NAME = 'SET_SELECTED_NAME',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export type CocktailsAction =
  | { type: CocktailsActionType.SET_COCKTAILS; payload: { name: string; cocktails: Cocktail[] } }
  | { type: CocktailsActionType.SET_SELECTED_NAME; payload: string }
  | { type: CocktailsActionType.SET_LOADING; payload: boolean }
  | { type: CocktailsActionType.SET_ERROR; payload: string | null }; 
