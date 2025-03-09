import { FallbackProps } from 'react-error-boundary';
import Link from 'next/link';
import styles from './ErrorFallback.module.scss';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Something went wrong</h1>
        <p>{error.message || 'An unexpected error occurred'}</p>
        <div className={styles.actions}>
          <button onClick={resetErrorBoundary} className={styles.button}>
            Try again
          </button>
          <Link href="/cocktails/margarita" className={styles.button}>
            Return to Cocktails
          </Link>
        </div>
      </div>
    </div>
  );
}; 
