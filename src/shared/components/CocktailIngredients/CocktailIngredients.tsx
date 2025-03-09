import { Cocktail } from '@/shared/api';
import styles from './CocktailIngredients.module.scss';

interface CocktailIngredientsProps {
  cocktail: Cocktail;
}

export const CocktailIngredients = ({ cocktail }: CocktailIngredientsProps) => {
  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail];
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
      
      if (ingredient) {
        ingredients.push(
          <div key={i} className={styles.ingredient}>
            {measure && <span className={styles.measure}>{measure}</span>}
            <span className={styles.ingredientName}>{ingredient}</span>
          </div>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className={styles.ingredients}>
      <h2>List of ingredients:</h2>
      <div className={styles.ingredientsList}>
        {renderIngredients()}
      </div>
    </div>
  );
}; 
