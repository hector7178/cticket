import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title, { props } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

const Template: StoryFn<props> = (args) => <Title {...args}>Title</Title>;

export const Default = Template.bind({});
