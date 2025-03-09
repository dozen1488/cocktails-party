export const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const API_ENDPOINTS = {
  SEARCH_COCKTAIL: `${API_BASE_URL}/search.php`,
} as const; 
