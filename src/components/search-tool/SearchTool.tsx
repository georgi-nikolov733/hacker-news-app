import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { PARAM_PERIOD, SORT_NEW } from '../../constants/routes.constants';
import { useSearchParams } from '../../hooks/use-search-params';
import { useStyles } from './SearchTool.styles';

interface SearchToolProps {
  param: string;
  options: Map<string, { label: string }>;
  defaultOption: string;
}

export const SearchTool: React.FC<SearchToolProps> = ({
  param,
  options,
  defaultOption,
}: SearchToolProps) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const searchParams = useSearchParams();

  const handleSelectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    const updatedSearchParams = new URLSearchParams(searchParams);

    value === SORT_NEW && updatedSearchParams.delete(PARAM_PERIOD);
    updatedSearchParams.set(param, value);

    history.push({
      pathname: location.pathname,
      search: '?' + updatedSearchParams.toString(),
    });
  };

  const selectedOption = searchParams.get(param) || '';

  return (
    <Select
      className={classes.select}
      value={options.has(selectedOption) ? selectedOption : defaultOption}
      onChange={handleSelectChange}
      disableUnderline
      classes={{
        root: classes.selectRoot,
        icon: classes.selectIcon,
      }}
    >
      {Array.from(options.entries()).map(([key, value]) => (
        <MenuItem key={key} value={key} disableRipple>
          {value.label}
        </MenuItem>
      ))}
    </Select>
  );
};
