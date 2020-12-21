type HackerNewsQueryKey = [string, HackerNewsQueryVariables];

interface HackerNewsQueryVariables {
  query: string;
  tags: string;
  searchByDate: boolean;
  matchURL: boolean;
  period: string;
}

export interface HackerNewsQuery {
  queryKey: HackerNewsQueryKey;
  pageParam?: number;
}

export interface HackerNewsData {
  hits: HackerNewsStory[];
  nbPages: number;
  page: number;
}

export interface HackerNewsStory {
  author: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  title: string;
  url: string;
}

export type HackerNewsTag = 'story' | 'front_page';
