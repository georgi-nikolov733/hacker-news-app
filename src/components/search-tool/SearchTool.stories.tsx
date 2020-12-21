import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import {
  PARAM_PERIOD,
  PARAM_SORT,
  PERIOD_ALL,
  PERIOD_OPTIONS,
  SORT_OPTIONS,
  SORT_TOP,
} from '../../constants/routes.constants';
import { SearchTool } from './SearchTool';

export default {
  title: 'SearchTool',
  component: SearchTool,
};

const Template: Story<ComponentProps<typeof SearchTool>> = (args) => (
  <SearchTool {...args} />
);

export const Sort = Template.bind({});
Sort.args = {
  param: PARAM_SORT,
  options: SORT_OPTIONS,
  defaultOption: SORT_TOP,
};

export const Period = Template.bind({});
Period.args = {
  param: PARAM_PERIOD,
  options: PERIOD_OPTIONS,
  defaultOption: PERIOD_ALL,
};
