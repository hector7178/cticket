import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { props } from './Button';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: StoryFn<props> = (args) => <Button {...args} />;

export const Default = Template.bind({
  children: 'Button',
});
Default.args = {
  children: 'Button',
};
export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  weight: 'outline',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Button',
  iconLeft: <CheckCircleIcon className="w-5 h-5" />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Button',
  iconRight: <CheckCircleIcon className="w-5 h-5" />,
};

export const BothSidesIcon = Template.bind({});
BothSidesIcon.args = {
  children: 'Button',
  iconRight: <CheckCircleIcon className="w-5 h-5" />,
  iconLeft: <CheckCircleIcon className="w-5 h-5" />,
};
