import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import {
  storyA,
  storyB,
  storyC,
  storyD,
} from '../../mocks/fixtures/hacker-news.fixtures';
import { StoryList } from './StoryList';

export default {
  title: 'StoryList',
  component: StoryList,
};

const Template: Story<ComponentProps<typeof StoryList>> = (args) => (
  <StoryList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stories: [storyA, storyB, storyC, storyD],
};
