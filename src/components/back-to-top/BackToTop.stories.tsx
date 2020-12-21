import { Typography } from '@material-ui/core';
import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { BackToTop } from './BackToTop';

export default {
  title: 'BackToTop',
  component: BackToTop,
};

const Template: Story<ComponentProps<typeof BackToTop>> = (args) => (
  <BackToTop {...args} />
);

export const Default = Template.bind({});
Default.args = {
  anchor: 'anchor',
};
Default.decorators = [
  (Story) => (
    <div style={{ height: '200vh' }}>
      <Typography id="anchor" variant="h6">
        Scroll down to see component
      </Typography>
      <Story />
    </div>
  ),
];
