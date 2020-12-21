import React from 'react';
import {
  PARAM_SORT,
  PARAM_WEBSITE,
  SORT_NEW,
} from '../../constants/routes.constants';
import { useSearchParams } from '../../hooks/use-search-params';
import { StoriesPage } from '../stories-page/StoriesPage';

export const StoriesFromWebsite: React.FC = () => {
  const searchParams = useSearchParams();

  return (
    <StoriesPage
      query={searchParams.get(PARAM_WEBSITE) || ''}
      searchByDate={searchParams.get(PARAM_SORT) === SORT_NEW}
      matchURL
      showSort
      showPeriod
    />
  );
};
