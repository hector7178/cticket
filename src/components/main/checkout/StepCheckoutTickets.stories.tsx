import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutTickets, { props } from './StepCheckoutTickets';
import { faker } from '@faker-js/faker';
import { useForm, UseFormReturn } from 'react-hook-form';

export default {
  title: 'Organisms/StepCheckoutTickets',
  component: StepCheckoutTickets,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm({
    defaultValues: {
      tickets_option: 'digital',
    },
  });
  return <StepCheckoutTickets {...useFormReturn} {...args} />;
};

type StoryComponent = StoryFn<Omit<props, keyof UseFormReturn>>;

export const Default: StoryComponent = Template.bind({});
Default.args = {
  location: faker.address.streetAddress(),
  name: faker.lorem.words(4),
};
