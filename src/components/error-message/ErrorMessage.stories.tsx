import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { networkError } from '../../mocks/fixtures/error-messages.fixtures';
import { ErrorMessage } from './ErrorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
};

const Template: Story<ComponentProps<typeof ErrorMessage>> = (args) => (
  <ErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: networkError,
};
