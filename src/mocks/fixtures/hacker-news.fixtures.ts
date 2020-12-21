import { getUnixTime, subDays, subMonths, subWeeks, subYears } from 'date-fns';
import { HackerNewsStory } from '../../types/hacker-news';

const now = new Date();
const twoDaysAgo = getUnixTime(subDays(now, 2));
const twoWeeksAgo = getUnixTime(subWeeks(now, 2));
const twoMonthsAgo = getUnixTime(subMonths(now, 2));
const twoYearsAgo = getUnixTime(subYears(now, 2));

export const storyA: HackerNewsStory = {
  author: 'andyjpb',
  created_at_i: twoDaysAgo,
  num_comments: 116,
  objectID: '25445725',
  points: 182,
  title: 'Rocky Linux: A CentOS replacement by the CentOS founder',
  url: 'https://github.com/rocky-linux/rock',
};

export const storyB: HackerNewsStory = {
  author: 'sdan',
  created_at_i: twoWeeksAgo,
  num_comments: 159,
  objectID: '25442072',
  points: 305,
  title: 'Vercel raise $40M Series B',
  url: 'https://vercel.com/blog/series-b-40m-to-build-the-next-web',
};

export const storyC: HackerNewsStory = {
  author: 'Gedxx',
  created_at_i: twoMonthsAgo,
  num_comments: 358,
  objectID: '25440540',
  points: 348,
  title: 'I3: Improved Tiling Window Manager',
  url: 'https://i3wm.org/',
};

export const storyD: HackerNewsStory = {
  author: 'adambyrtek',
  created_at_i: twoYearsAgo,
  num_comments: 318,
  objectID: '25443152',
  points: 605,
  title: 'Firefox Was Always Enough',
  url: 'https://www.ianbicking.org/blog/2020/11/firefox-was-always-enough.html',
};
