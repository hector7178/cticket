import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardPaymentSuccess, { props } from './CardPaymentSuccess';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/CardPaymentSuccess',
  component: CardPaymentSuccess,
} as Meta;

const Template: StoryFn<props> = (args) => <CardPaymentSuccess className="max-w-3xl mx-auto" {...args} />;

export const Default = Template.bind({});
Default.args = {
  id:faker.datatype.uuid(),
  description: faker.lorem.paragraph(),
};
