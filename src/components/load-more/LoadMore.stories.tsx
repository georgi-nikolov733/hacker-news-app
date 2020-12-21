import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { LoadMore } from './LoadMore';

export default {
  title: 'LoadMore',
  component: LoadMore,
};

const Template: Story<ComponentProps<typeof LoadMore>> = (args) => (
  <LoadMore {...args} />
);

export const CanFetchMore = Template.bind({});
CanFetchMore.args = {
  canFetchMore: true,
  isFetchingMore: false,
  fetchMore: () => {
    console.log('fetchMore');
  },
};

export const IsFetchingMore = Template.bind({});
IsFetchingMore.args = {
  canFetchMore: true,
  isFetchingMore: true,
  fetchMore: () => {
    console.log('fetchMore');
  },
};
