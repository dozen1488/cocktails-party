import { Cocktail } from '@/shared/api';
import { CocktailBasicInfo } from '../CocktailBasicInfo/CocktailBasicInfo';
import { CocktailIngredients } from '../CocktailIngredients/CocktailIngredients';
import styles from './CocktailDetails.module.scss';

interface CocktailDetailsProps {
  cocktail: Cocktail;
}

export const CocktailDetails = ({ cocktail }: CocktailDetailsProps) => {
  return (
    <>
      <div className={styles.detailsContent}>
        <h1 className={styles.cocktailName}>{cocktail.strDrink}</h1>
        <CocktailBasicInfo cocktail={cocktail} />
        
        <div className={styles.instructions}>
          <h2>Instructions:</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
        
        <CocktailIngredients cocktail={cocktail} />
      </div>
      
      <div className={styles.cocktailImage}>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} loading="lazy"/>
      </div>
    </>
  );
}; 
