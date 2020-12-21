import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  BACK_TO_TOP_ANCHOR,
  ROUTE_FROM,
  ROUTE_HOME,
  ROUTE_NEW,
  ROUTE_SEARCH,
  ROUTE_TOP,
} from '../../constants/routes.constants';
import { BackToTop } from '../back-to-top/BackToTop';
import { StoriesByDate } from '../stories-by-date/StoriesByDate';
import { StoriesByPoints } from '../stories-by-points/StoriesByPoints';
import { StoriesFromWebsite } from '../stories-from-website/StoriesFromWebsite';
import { StoriesMatchingSearch } from '../stories-matching-search/StoriesMatchingSearch';
import { StoriesOnFrontPage } from '../stories-on-front-page/StoriesOnFrontPage';
import { TopBar } from '../top-bar/TopBar';
import { useStyles } from './App.styles';

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar anchor={BACK_TO_TOP_ANCHOR} />
      <Container className={classes.pageContent} maxWidth="md">
        <Switch>
          <Route path={ROUTE_HOME} exact>
            <StoriesOnFrontPage />
          </Route>
          <Route path={ROUTE_NEW}>
            <StoriesByDate />
          </Route>
          <Route path={ROUTE_TOP}>
            <StoriesByPoints />
          </Route>
          <Route path={ROUTE_SEARCH}>
            <StoriesMatchingSearch />
          </Route>
          <Route path={ROUTE_FROM}>
            <StoriesFromWebsite />
          </Route>
        </Switch>
      </Container>
      <BackToTop anchor={BACK_TO_TOP_ANCHOR} />
    </>
  );
};
