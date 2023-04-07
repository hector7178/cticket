import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SidebarSearch, { props } from './SidebarSearch';
import { faker } from '@faker-js/faker';
import { UseFormReturn, useForm } from 'react-hook-form';

export default {
  title: 'Molecules/SidebarSearch',
  component: SidebarSearch,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm();
  return <SidebarSearch {...args} {...useFormReturn} />;
};

type StoryComponent = StoryFn<Omit<props, keyof UseFormReturn>>;

export const Default: StoryComponent = Template.bind({});
