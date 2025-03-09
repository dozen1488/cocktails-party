'use client';

import { ErrorFallback } from '@/shared/components/ErrorFallback/ErrorFallback';

export default function NotFound() {
  return (
    <ErrorFallback 
      error={new Error('Page not found')} 
      resetErrorBoundary={() => window.location.href = '/cocktails/margarita'} 
    />
  );
} 
