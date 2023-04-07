import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DrawerSearchFilters, { props } from './DrawerSearchFilters';
import { UseFormReturn, useForm } from 'react-hook-form';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/DrawerSearchFilters',
  component: DrawerSearchFilters,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm();
  return <DrawerSearchFilters {...args} {...useFormReturn} />;
};

type StoryComponent = StoryFn<Omit<props, keyof UseFormReturn>>;

export const Default: StoryComponent = Template.bind({});
Default.args = {
  isOpen: true,
  close: () => {},
};
