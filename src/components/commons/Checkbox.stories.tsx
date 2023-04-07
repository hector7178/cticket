import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { props } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: StoryFn<props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  color:"primary",
  label:"Agree"
};

