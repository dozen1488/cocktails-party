import { Cocktail } from '@/shared/api';
import styles from './CocktailBasicInfo.module.scss';

interface CocktailBasicInfoProps {
  cocktail: Cocktail;
}

export const CocktailBasicInfo = ({ cocktail }: CocktailBasicInfoProps) => {
  return (
    <div className={styles.basicInfo}>
      <p><strong>Category:</strong> {cocktail.strCategory}</p>
      <p><strong>Type:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Glass:</strong> {cocktail.strGlass}</p>
    </div>
  );
}; 
