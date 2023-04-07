import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutQuantity, { props } from './StepCheckoutQuantity';
import { faker } from '@faker-js/faker';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { useForm } from 'react-hook-form';

export default {
  title: 'Organisms/StepCheckoutQuantity',
  component: StepCheckoutQuantity,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm({
    defaultValues: {
      tickets: 0,
    },
  });
  return <StepCheckoutQuantity {...args} {...useFormReturn} />;
};

type StoryComponent = StoryFn<Omit<props, keyof UseFormReturn>>;

export const Default: StoryComponent = Template.bind({});
Default.args = {
  location: faker.address.streetAddress(),
  name: faker.lorem.words(4),
  price: faker.datatype.number({ min: 50, max: 500 }),
};
