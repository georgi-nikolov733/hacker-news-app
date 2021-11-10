import React, { useMemo } from 'react';
import { isError, useInfiniteQuery } from 'react-query';
import { QUERY_HACKER_NEWS_DATA } from '../../constants/queries.constants';
import {
  PARAM_PERIOD,
  PARAM_SORT,
  PERIOD_ALL,
  PERIOD_OPTIONS,
  SORT_OPTIONS,
  SORT_TOP,
} from '../../constants/routes.constants';
import { useSearchParams } from '../../hooks/use-search-params';
import {
  HackerNewsData,
  HackerNewsQuery,
  HackerNewsStory,
  HackerNewsTag,
} from '../../types/hacker-news';
import { fetchHackerNewsData } from '../../utils/api';
import { ErrorMessage } from '../error-message/ErrorMessage';
import { LoadMore } from '../load-more/LoadMore';
import { SearchTool } from '../search-tool/SearchTool';
import { StoryList } from '../story-list/StoryList';

interface StoriesPageProps {
  query?: string;
  tags?: HackerNewsTag;
  searchByDate?: boolean;
  matchURL?: boolean;
  showSort?: boolean;
  showPeriod?: boolean;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  query = '',
  tags = 'story',
  searchByDate = false,
  matchURL = false,
  showSort = false,
  showPeriod = false,
}: StoriesPageProps) => {
  const queryKey: HackerNewsQuery['queryKey'] = [
    QUERY_HACKER_NEWS_DATA,
    {
      query,
      tags,
      searchByDate,
      matchURL,
      period: useSearchParams().get(PARAM_PERIOD) || PERIOD_ALL,
    },
  ];

  const {
    status,
    data,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(queryKey, fetchHackerNewsData, {
    getNextPageParam: (lastPage: HackerNewsData) =>
      lastPage.page + 1 < lastPage.nbPages && lastPage.page + 1,
  });

  const stories = useMemo(() => {
    const storyList: HackerNewsStory[] = [];
    const storyIdSet = new Set<string>();

    (data?.pages || [])
      .flatMap((page) => page.hits)
      .forEach((story) => {
        if (!storyIdSet.has(story.objectID)) {
          storyIdSet.add(story.objectID);
          storyList.push(story);
        }
      });

    return storyList;
  }, [data]);

  switch (status) {
    case 'loading':
      return null;
    case 'error':
      return <ErrorMessage text={isError(error) ? error.message : ''} />;
    case 'success':
      return (
        <>
          <div>
            {showSort && (
              <SearchTool
                param={PARAM_SORT}
                options={SORT_OPTIONS}
                defaultOption={SORT_TOP}
              />
            )}
            {showPeriod && !searchByDate && (
              <SearchTool
                param={PARAM_PERIOD}
                options={PERIOD_OPTIONS}
                defaultOption={PERIOD_ALL}
              />
            )}
          </div>
          {stories.length > 0 ? (
            <>
              <StoryList stories={stories} />
              <LoadMore
                canFetchMore={!!hasNextPage}
                isFetchingMore={!!isFetchingNextPage}
                fetchMore={() => fetchNextPage()}
              />
            </>
          ) : (
            <ErrorMessage text="No Results" />
          )}
        </>
      );
    default:
      return null;
  }
};
