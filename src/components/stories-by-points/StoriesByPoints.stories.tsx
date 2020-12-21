import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTE_TOP } from '../../constants/routes.constants';
import { StoriesByPoints } from './StoriesByPoints';

export default {
  title: 'StoriesByPoints',
  component: StoriesByPoints,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof StoriesByPoints>> = (args) => (
  <StoriesByPoints {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={ROUTE_TOP} />
    </>
  ),
];
