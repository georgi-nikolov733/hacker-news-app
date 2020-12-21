import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_FROM, PARAM_WEBSITE } from '../../constants/routes.constants';
import { StoriesFromWebsite } from './StoriesFromWebsite';

export default {
  title: 'StoriesFromWebsite',
  component: StoriesFromWebsite,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof StoriesFromWebsite>> = (args) => (
  <StoriesFromWebsite {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={`${ROUTE_FROM}?${PARAM_WEBSITE}=github.com`} />
    </>
  ),
];
