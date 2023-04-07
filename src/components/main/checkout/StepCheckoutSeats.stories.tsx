import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StepCheckoutSeats, { props } from './StepCheckoutSeats';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/StepCheckoutSeats',
  component: StepCheckoutSeats,
} as Meta;

const Template: StoryFn<props> = (args) => <StepCheckoutSeats {...args} />;

export const Default = Template.bind({});
