import { rest, setupWorker } from 'msw';
import { HackerNewsData } from '../types/hacker-news';
import {
  storyA,
  storyB,
  storyC,
  storyD,
} from './fixtures/hacker-news.fixtures';

export const worker = setupWorker(
  rest.get(/.*/, (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    const searchByDate = req.url.pathname.includes('/search_by_date');
    const searchResult: HackerNewsData = {
      hits: [],
      nbPages: 1,
      page: 0,
    };

    searchResult.hits = [storyA, storyB, storyC, storyD].sort(
      searchByDate
        ? (a, b) => b.created_at_i - a.created_at_i
        : (a, b) => b.points - a.points
    );

    if (searchParams.has('query')) {
      const query = searchParams.get('query') || '';

      if (searchParams.get('restrictSearchableAttributes') === 'url') {
        searchResult.hits = searchResult.hits.filter((story) =>
          story.url.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        searchResult.hits = searchResult.hits.filter((story) =>
          story.title.toLowerCase().includes(query.toLowerCase())
        );
      }
    }

    if (searchParams.has('numericFilters')) {
      const timestamp = Number(
        (searchParams.get('numericFilters') || '').replace('created_at_i>', '')
      );

      searchResult.hits = searchResult.hits.filter(
        (story) => story.created_at_i > timestamp
      );
    }

    if (searchResult.hits.length > 2) {
      if (!searchParams.has('page') || searchParams.get('page') === '0') {
        searchResult.hits = searchResult.hits.slice(0, 2);
        searchResult.page = 0;
        searchResult.nbPages = 2;
      } else if (searchParams.get('page') === '1') {
        searchResult.hits = searchResult.hits.slice(2);
        searchResult.page = 1;
        searchResult.nbPages = 2;
      } else {
        searchResult.hits = [];
        searchResult.nbPages = 0;
        searchResult.page = 0;
      }
    }

    return res(ctx.json(searchResult));
  })
);
