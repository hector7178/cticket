import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListProgramDays, { props } from './ListProgramDays';
import { faker } from '@faker-js/faker';
import { useForm } from 'react-hook-form';
export default {
  title: 'Molecules/ListProgramDays',
  component: ListProgramDays,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const { control } = useForm();
  return <ListProgramDays name="field" control={control} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 10 }, () => faker.datatype.datetime()),
};
