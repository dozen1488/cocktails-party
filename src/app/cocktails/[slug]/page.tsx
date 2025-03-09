'use client';

import { use } from "react";

import { CocktailsPage } from '@/shared/components/CocktailsPage';

export default function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
  const cocktailName = use(params).slug;
  return <CocktailsPage cocktailName={cocktailName} />;
} 
