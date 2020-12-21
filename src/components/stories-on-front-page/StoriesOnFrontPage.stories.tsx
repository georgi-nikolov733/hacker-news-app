import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_HOME } from '../../constants/routes.constants';
import { StoriesOnFrontPage } from './StoriesOnFrontPage';

export default {
  title: 'StoriesOnFrontPage',
  component: StoriesOnFrontPage,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof StoriesOnFrontPage>> = (args) => (
  <StoriesOnFrontPage {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={ROUTE_HOME} />
    </>
  ),
];
