import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_SEARCH, PARAM_QUERY } from '../../constants/routes.constants';
import { StoriesMatchingSearch } from './StoriesMatchingSearch';

export default {
  title: 'StoriesMatchingSearch',
  component: StoriesMatchingSearch,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof StoriesMatchingSearch>> = (
  args
) => <StoriesMatchingSearch {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={`${ROUTE_SEARCH}?${PARAM_QUERY}=firefox`} />
    </>
  ),
];
