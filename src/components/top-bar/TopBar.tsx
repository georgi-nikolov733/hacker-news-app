import { Container, Tab, Tabs, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  PARAM_QUERY,
  ROUTE_HOME,
  ROUTE_SEARCH,
  TABS,
} from '../../constants/routes.constants';
import { useSearchParams } from '../../hooks/use-search-params';
import { useStyles } from './TopBar.styles';

interface TopBarProps {
  anchor: string;
}

export const TopBar: React.FC<TopBarProps> = ({ anchor }: TopBarProps) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const query = useSearchParams().get(PARAM_QUERY) || '';
  const [tabValue, setTabValue] = useState<number | false>(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setTabValue(TABS.get(location.pathname)?.index ?? false);
  }, [location.pathname]);

  useEffect(() => {
    setInputText(query);
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputText) {
      const updatedSearchParams = new URLSearchParams({
        [PARAM_QUERY]: inputText,
      });

      history.push({
        pathname: ROUTE_SEARCH,
        search: '?' + updatedSearchParams.toString(),
      });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar id={anchor} variant="dense">
          <Container className={classes.appBarContainer} maxWidth="md">
            <Typography
              className={classes.title}
              variant="h6"
              component={Link}
              to={ROUTE_HOME}
              noWrap
            >
              Hacker News
            </Typography>
            <form onSubmit={handleFormSubmit} spellCheck="false">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputField,
                  }}
                />
              </div>
            </form>
            <Tabs
              value={tabValue}
              variant="fullWidth"
              classes={{
                indicator: classes.tabIndicator,
              }}
            >
              {Array.from(TABS.entries()).map(([key, value]) => (
                <Tab
                  key={key}
                  className={classes.tab}
                  id={`tab-${value.index}`}
                  label={value.label}
                  component={Link}
                  to={key}
                  disableRipple
                />
              ))}
            </Tabs>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
