import styles from './CocktailList.module.scss';

interface CocktailListProps {
  cocktailNames: string[];
  selectedName: string | null;
  onSelectName: (name: string) => void;
}

export const CocktailList = ({ cocktailNames, selectedName, onSelectName }: CocktailListProps) => {
  return (
    <div className={styles.cocktailList}>
      {cocktailNames.map((name) => (
        <div
          key={name}
          className={`${styles.cocktailItem} ${selectedName === name ? styles.selected : ''}`}
          onClick={() => onSelectName(name)}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
      ))}
    </div>
  );
}; 
