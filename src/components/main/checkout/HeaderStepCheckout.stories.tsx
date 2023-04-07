import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderStepCheckout, { props } from './HeaderStepCheckout';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/HeaderStepCheckout',
  component: HeaderStepCheckout,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderStepCheckout {...args} />;

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  location: faker.address.streetAddress(),
  name: faker.lorem.words(),
};
