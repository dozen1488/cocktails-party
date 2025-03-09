'use client';

import { ErrorFallback } from '@/shared/components/ErrorFallback/ErrorFallback';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorFallback 
      error={error}
      resetErrorBoundary={reset}
    />
  );
} 
