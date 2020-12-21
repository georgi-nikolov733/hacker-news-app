import Axios from 'axios';
import { getUnixTime } from 'date-fns';
import {
  API_SEARCH_BY_DATE_URL,
  API_SEARCH_URL,
} from '../constants/api.constants';
import { PERIOD_OPTIONS } from '../constants/routes.constants';
import { HackerNewsData, HackerNewsQuery } from '../types/hacker-news';

export const fetchHackerNewsData = async ({
  queryKey,
  pageParam,
}: HackerNewsQuery): Promise<HackerNewsData> => {
  const [, { query, tags, searchByDate, matchURL, period }] = queryKey;
  const now = getUnixTime(new Date());
  const after = now - (PERIOD_OPTIONS.get(period)?.offset || now);
  const response = await Axios.get(
    searchByDate ? API_SEARCH_BY_DATE_URL : API_SEARCH_URL,
    {
      params: {
        ...(query && { query }),
        ...(tags && { tags }),
        ...(matchURL && { restrictSearchableAttributes: 'url' }),
        ...(after && { numericFilters: `created_at_i>${after}` }),
        ...(pageParam && { page: pageParam }),
      },
    }
  );

  return response.data;
};
