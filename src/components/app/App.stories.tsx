import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { Redirect } from 'react-router-dom';
import {
  PARAM_QUERY,
  PARAM_WEBSITE,
  ROUTE_FROM,
  ROUTE_HOME,
  ROUTE_NEW,
  ROUTE_SEARCH,
  ROUTE_TOP,
} from '../../constants/routes.constants';
import { App } from './App';

export default {
  title: 'App',
  component: App,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof App>> = (args) => <App {...args} />;

export const Home = Template.bind({});
Home.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={ROUTE_HOME} />
    </>
  ),
];

export const New = Template.bind({});
New.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={ROUTE_NEW} />
    </>
  ),
];

export const Top = Template.bind({});
Top.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={ROUTE_TOP} />
    </>
  ),
];

export const Search = Template.bind({});
Search.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={`${ROUTE_SEARCH}?${PARAM_QUERY}=firefox`} />
    </>
  ),
];

export const From = Template.bind({});
From.decorators = [
  (Story) => (
    <>
      <Story />
      <Redirect to={`${ROUTE_FROM}?${PARAM_WEBSITE}=github.com`} />
    </>
  ),
];
