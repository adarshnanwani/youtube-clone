'use client';

import { FilterCarousal } from '@/components/filter-carousal';
import { trpc } from '@/trpc/client';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = (props: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<FilterCarousalSuspenseFallback />}>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const FilterCarousalSuspenseFallback = () => (
  <FilterCarousal onSelect={() => {}} isLoading data={[]} />
);

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ name, id }) => ({ value: id, label: name }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set('categoryId', value);
    } else {
      url.searchParams.delete('categoryId');
    }

    router.push(url.toString());
  };
  return (
    <div>
      <FilterCarousal onSelect={onSelect} value={categoryId} data={data} />
    </div>
  );
};
