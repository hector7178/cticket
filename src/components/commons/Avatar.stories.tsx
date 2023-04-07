import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar, { props } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: StoryFn<props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: '/images/avatar.png',
  size: 'medium',
  shape: 'pill',
};
