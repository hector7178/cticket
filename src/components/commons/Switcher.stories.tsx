import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switcher, { props } from './Switcher';
import { useForm } from 'react-hook-form';

export default {
  title: 'Atoms/Switcher',
  component: Switcher,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const { control } = useForm();
  return <Switcher  control={control} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  name:"checked",
};
