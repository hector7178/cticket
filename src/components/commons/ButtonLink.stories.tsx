import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonLink, { props } from './ButtonLink';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
} as Meta;

const Template: StoryFn<props> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  children: 'Button Link',
};

export const Outline = Template.bind({});
Outline.args = {
  href: '#',
  children: 'Button Link',
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
