import { CocktailsState, CocktailsAction, CocktailsActionType } from './types';

export const initialState: CocktailsState = {
  cocktailsMap: {},
  selectedName: null,
  isLoading: false,
  error: null,
};

export const cocktailsReducer = (
  state: CocktailsState,
  action: CocktailsAction
): CocktailsState => {
  switch (action.type) {
    case CocktailsActionType.SET_COCKTAILS:
      return {
        ...state,
        cocktailsMap: {
          ...state.cocktailsMap,
          [action.payload.name]: action.payload.cocktails,
        },
        error: null,
      };

    case CocktailsActionType.SET_SELECTED_NAME:
      return {
        ...state,
        selectedName: action.payload,
      };

    case CocktailsActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case CocktailsActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}; 
