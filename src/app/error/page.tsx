'use client';

import styles from './page.module.scss';

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Oops! Something went wrong</h1>
        <p>We couldn't find what you were looking for.</p>
      </div>
    </div>
  );
} 
