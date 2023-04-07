import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutPayment, { props } from './StepCheckoutPayment';
import { faker } from '@faker-js/faker';
import { useForm, UseFormReturn } from 'react-hook-form';

export default {
  title: 'Organisms/StepCheckoutPayment',
  component: StepCheckoutPayment,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm();
  return <StepCheckoutPayment {...args} {...useFormReturn} />;
};

type StoryComponent = StoryFn<Omit<props, keyof UseFormReturn>>;

export const Default: StoryComponent = Template.bind({});
Default.args = {};
