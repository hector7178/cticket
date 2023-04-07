import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AnimateTransition, { props } from './AnimateTransition';
import Button from './Button';

export default {
  title: 'Atoms/AnimateTransition',
  component: AnimateTransition,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <AnimateTransition {...args}>
    <Button>Button</Button>
  </AnimateTransition>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  animation: 'grow',
  isChild: false,
};
