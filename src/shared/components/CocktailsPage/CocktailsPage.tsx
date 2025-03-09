import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ErrorBoundary } from 'react-error-boundary';
import { useCocktails } from '@/shared/store/cocktails/context';
import { CocktailList } from '../CocktailList/CocktailList';
import { CocktailDetails } from '../CocktailDetails/CocktailDetails';
import { ErrorFallback } from '../ErrorFallback/ErrorFallback';
import styles from './CocktailsPage.module.scss';

const cocktailNames = [
  'margarita',
  'mojito',
  'a1',
  'kir',
];

interface CocktailsPageProps {
  cocktailName: string;
}

const CocktailsPageContent = ({ cocktailName }: CocktailsPageProps) => {
  const router = useRouter();
  const { cocktailsMap, selectedName, isLoading, error, loadCocktails, setSelectedName } = useCocktails();

  useEffect(() => {
    if (!cocktailNames.includes(cocktailName)) {
      router.push('/error');
    }
  }, [cocktailName, router]);

  useEffect(() => {
    if (error) {
      router.push('/error');
    }
  }, [error, router]);

  useEffect(() => {
    if (cocktailName && cocktailName !== selectedName) {
      setSelectedName(cocktailName);
    } else if (!cocktailName && cocktailNames.length > 0) {
      setSelectedName(cocktailNames[0]);
    }
  }, [cocktailName, selectedName, setSelectedName]);

  useEffect(() => {
    if (selectedName) {
      loadCocktails(selectedName);
    }
  }, [selectedName, loadCocktails]);

  const handleSelectName = (name: string) => {
    setSelectedName(name);
    router.push(`/cocktails/${name}`);
  };

  const currentCocktails = selectedName ? cocktailsMap[selectedName] : [];

  return (
    <div className={styles.container}>
      <CocktailList
        cocktailNames={cocktailNames}
        selectedName={selectedName}
        onSelectName={handleSelectName}
      />
      
      <div className={styles.detailsListContainer}>
        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          currentCocktails?.map((cocktail) => (
            <div key={cocktail.idDrink} className={styles.detailsContainer}>
              <CocktailDetails cocktail={cocktail} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const CocktailsPage = (props: CocktailsPageProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.href = '/cocktails/margarita';
      }}
    >
      <CocktailsPageContent {...props} />
    </ErrorBoundary>
  );
}; 
