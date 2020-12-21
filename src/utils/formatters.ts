import { formatDistanceStrict } from 'date-fns';

export const formatHostname = (url: string): string => {
  try {
    const hostname = new URL(url).hostname;

    return hostname.startsWith('www.') ? hostname.substring(4) : hostname;
  } catch (error) {
    return '';
  }
};

export const formatTimeAgo = (timestamp: number): string =>
  formatDistanceStrict(new Date(timestamp * 1000), new Date(), {
    addSuffix: true,
  });
