import { List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  HACKER_NEWS_ITEM_URL,
  HACKER_NEWS_USER_URL,
} from '../../constants/api.constants';
import { PARAM_WEBSITE, ROUTE_FROM } from '../../constants/routes.constants';
import { HackerNewsStory } from '../../types/hacker-news';
import { formatHostname, formatTimeAgo } from '../../utils/formatters';
import { useStyles } from './StoryList.styles';

interface StoryListProps {
  stories: HackerNewsStory[];
}

export const StoryList: React.FC<StoryListProps> = ({
  stories,
}: StoryListProps) => {
  const classes = useStyles();

  const listItems = stories.map((story) => {
    const hostname = formatHostname(story.url);
    const timeAgo = formatTimeAgo(story.created_at_i);
    const authorLink = `${HACKER_NEWS_USER_URL}${story.author}`;
    const commentsLink = `${HACKER_NEWS_ITEM_URL}${story.objectID}`;
    const fromWebsiteLink = `${ROUTE_FROM}?${PARAM_WEBSITE}=${hostname}`;

    return (
      <ListItem key={story.objectID} className={classes.listItem}>
        <div className={classes.story}>
          <Typography className={classes.title} variant="body1">
            <a
              className={classes.titleLink}
              href={story.url || commentsLink}
              target="_blank"
              rel="noreferrer"
            >
              {story.title}
            </a>
          </Typography>
          {hostname && (
            <Typography className={classes.caption} variant="caption">
              (
              <Link className={classes.captionLink} to={fromWebsiteLink}>
                {hostname}
              </Link>
              )
            </Typography>
          )}
        </div>
        <Typography className={classes.caption} variant="caption">
          {story.points} points by{' '}
          <a
            className={classes.captionLink}
            href={authorLink}
            target="_blank"
            rel="noreferrer"
          >
            {story.author}
          </a>{' '}
          {timeAgo} |{' '}
          <a
            className={classes.captionLink}
            href={commentsLink}
            target="_blank"
            rel="noreferrer"
          >
            {story.num_comments} comments
          </a>
        </Typography>
      </ListItem>
    );
  });

  return <List className={classes.list}>{listItems}</List>;
};
