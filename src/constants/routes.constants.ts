export const ROUTE_HOME = '/';
export const ROUTE_NEW = '/new';
export const ROUTE_TOP = '/top';
export const ROUTE_SEARCH = '/search';
export const ROUTE_FROM = '/from';

export const PARAM_QUERY = 'query';
export const PARAM_WEBSITE = 'website';
export const PARAM_SORT = 'sort';
export const PARAM_PERIOD = 'period';

export const SORT_TOP = 'top';
export const SORT_NEW = 'new';

export const PERIOD_ALL = 'all';
export const PERIOD_HOUR = 'hour';
export const PERIOD_DAY = 'day';
export const PERIOD_WEEK = 'week';
export const PERIOD_MONTH = 'month';
export const PERIOD_YEAR = 'year';

export const TABS = new Map([
  [ROUTE_HOME, { index: 0, label: 'Hot' }],
  [ROUTE_NEW, { index: 1, label: 'New' }],
  [ROUTE_TOP, { index: 2, label: 'Top' }],
]);

export const SORT_OPTIONS = new Map([
  [SORT_TOP, { label: 'Top' }],
  [SORT_NEW, { label: 'New' }],
]);

export const PERIOD_OPTIONS = new Map([
  [PERIOD_ALL, { label: 'All time', offset: null }],
  [PERIOD_HOUR, { label: 'Past hour', offset: 3600 }],
  [PERIOD_DAY, { label: 'Past 24 hours', offset: 86400 }],
  [PERIOD_WEEK, { label: 'Past week', offset: 604800 }],
  [PERIOD_MONTH, { label: 'Past month', offset: 2628000 }],
  [PERIOD_YEAR, { label: 'Past year', offset: 31540000 }],
]);

export const BACK_TO_TOP_ANCHOR = 'back-to-top-anchor';
