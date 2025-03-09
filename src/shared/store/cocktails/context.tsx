'use client';

import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import { Cocktail, CocktailService } from '@/shared/api';
import { CocktailsState, CocktailsActionType } from './types';
import { cocktailsReducer, initialState } from './reducer';

interface CocktailsContextType extends CocktailsState {
  loadCocktails: (name: string) => Promise<void>;
  setSelectedName: (name: string) => void;
  getCurrentCocktails: () => Cocktail[] | undefined;
}

const CocktailsContext = createContext<CocktailsContextType | undefined>(undefined);

export const useCocktails = () => {
  const context = useContext(CocktailsContext);
  if (!context) {
    throw new Error('useCocktails must be used within a CocktailsProvider');
  }
  return context;
};

interface CocktailsProviderProps {
  children: ReactNode;
}

export const CocktailsProvider = ({ children }: CocktailsProviderProps) => {
  const [state, dispatch] = useReducer(cocktailsReducer, initialState);

  const loadCocktails = useCallback(async (name: string) => {
    if (state.cocktailsMap[name]) {
      return;
    }

    try {
      dispatch({ type: CocktailsActionType.SET_LOADING, payload: true });
      const service = CocktailService.getInstance();
      const cocktails = await service.searchCocktails(name);
      dispatch({ 
        type: CocktailsActionType.SET_COCKTAILS, 
        payload: { name, cocktails } 
      });
    } catch (error) {
      dispatch({
        type: CocktailsActionType.SET_ERROR,
        payload: error instanceof Error ? error.message : 'Failed to load cocktails',
      });
    } finally {
      dispatch({ type: CocktailsActionType.SET_LOADING, payload: false });
    }
  }, [state.cocktailsMap]);

  const setSelectedName = useCallback((name: string) => {
    dispatch({ type: CocktailsActionType.SET_SELECTED_NAME, payload: name });
  }, []);

  const getCurrentCocktails = useCallback(() => {
    return state.selectedName ? state.cocktailsMap[state.selectedName] : undefined;
  }, [state.selectedName, state.cocktailsMap]);

  const value = {
    ...state,
    loadCocktails,
    setSelectedName,
    getCurrentCocktails,
  };

  return (
    <CocktailsContext.Provider value={value}>
      {children}
    </CocktailsContext.Provider>
  );
}; 
