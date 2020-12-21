import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { TopBar } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
};

const Template: Story<ComponentProps<typeof TopBar>> = (args) => (
  <TopBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  anchor: 'anchor',
};
