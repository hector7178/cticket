import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Radio, { props } from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
} as Meta;

const Template: StoryFn<props> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  color:"primary",
  label:"Right click"
};

