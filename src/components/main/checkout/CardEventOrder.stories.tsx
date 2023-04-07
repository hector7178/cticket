import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventOrder, { props } from './CardEventOrder';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardEventOrder',
  component: CardEventOrder,
} as Meta;

const Template: StoryFn<props> = (args) => <CardEventOrder {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: faker.random.word(),
  image: faker.image.image(),
  name: faker.random.words(3),
  time: faker.date.future(),
  date: faker.datatype.number(),
  location: faker.address.city(),
  author: faker.name.findName(),
  spots: Array.from({ length: 5 }, () => ({
    row: faker.random.alphaNumeric(2),
    seat: faker.datatype.number(20),
    section: faker.datatype.number(10),
  })),
  countTickets: faker.datatype.number({ min: 1, max: 1000 }),
  user: {
    name: faker.name.fullName(),
    lastFour: faker.datatype.number({ min: 111, max: 9999 }),
  },
};
