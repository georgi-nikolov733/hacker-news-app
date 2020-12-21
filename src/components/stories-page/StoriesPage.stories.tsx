import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { StoriesPage } from './StoriesPage';

export default {
  title: 'StoriesPage',
  component: StoriesPage,
};

const Template: Story<ComponentProps<typeof StoriesPage>> = (args) => (
  <StoriesPage {...args} />
);

export const Default = Template.bind({});
