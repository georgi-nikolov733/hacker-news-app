import { CircularProgress, Link } from '@material-ui/core';
import React from 'react';
import { useStyles } from './LoadMore.styles';

interface LoadMoreProps {
  canFetchMore: boolean;
  isFetchingMore: boolean;
  fetchMore: () => void;
}

export const LoadMore: React.FC<LoadMoreProps> = ({
  canFetchMore,
  isFetchingMore,
  fetchMore,
}: LoadMoreProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {canFetchMore && !isFetchingMore && (
        <Link className={classes.more} variant="body1" onClick={fetchMore}>
          LOAD MORE
        </Link>
      )}
      {isFetchingMore && <CircularProgress className={classes.spinner} />}
    </div>
  );
};
