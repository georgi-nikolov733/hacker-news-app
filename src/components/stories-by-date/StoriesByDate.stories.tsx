import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_NEW } from '../../constants/routes.constants';
import { StoriesByDate } from './StoriesByDate';

export default {
  title: 'StoriesByDate',
  component: StoriesByDate,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof StoriesByDate>> = (args) => (
  <StoriesByDate {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={ROUTE_NEW} />
    </>
  ),
];
