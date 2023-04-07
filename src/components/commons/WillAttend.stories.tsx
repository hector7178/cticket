import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WillAttend, { props } from '@/components/commons/WillAttend';
import { faker } from '@faker-js/faker';

export default {
  title: 'Atoms/WillAttend',
  component: WillAttend,
} as Meta;

const Template: StoryFn<props> = (args) => <WillAttend {...args} />;

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  changeColor: false,
};

export const ChangeColor: StoryFn<props> = Template.bind({});
ChangeColor.args = {
  changeColor: true,
};
