import { API_ENDPOINTS } from './constants';
import { Cocktail, CocktailApiResponse } from './types';

export class CocktailService {
  private static instance: CocktailService;

  private constructor() {}

  public static getInstance(): CocktailService {
    if (!CocktailService.instance) {
      CocktailService.instance = new CocktailService();
    }
    return CocktailService.instance;
  }

  public async searchCocktails(query: string): Promise<Cocktail[]> {
    try {
      const response = await fetch(`${API_ENDPOINTS.SEARCH_COCKTAIL}?s=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: CocktailApiResponse = await response.json();
      
      if (!data.drinks) {
        return [];
      }
      
      return data.drinks;
    } catch (error) {
      console.error('Error searching cocktails:', error);
      throw error;
    }
  }

  public async getCocktailByName(name: string): Promise<Cocktail | null> {
    try {
      const cocktails = await this.searchCocktails(name);
      return cocktails.length > 0 ? cocktails[0] : null;
    } catch (error) {
      console.error('Error getting cocktail by name:', error);
      throw error;
    }
  }
} 
