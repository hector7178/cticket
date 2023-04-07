import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { props } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const Template: StoryFn<props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      name: 'A',
      value: 'a',
      section: 'primary',
    },
    {
      name: 'B',
      value: 'b',
      section: 'primary',
    },
    {
      name: 'C',
      value: 'c',
      section: 'primary',
    },
    {
      name: 'D',
      value: 'd',
      section: 'secondary',
    },
    {
      name: 'E',
      value: 'e',
      section: 'secondary',
    },
    {
      name: 'F',
      value: 'f',
      // section: 'secondary',
    },
  ],
};
