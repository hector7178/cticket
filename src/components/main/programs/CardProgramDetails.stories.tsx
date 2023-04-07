import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardProgramDetails, { props } from './CardProgramDetails';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardProgramDetails',
  component: CardProgramDetails,
} as Meta;

const Template: StoryFn<props> = (args) => <CardProgramDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: faker.random.word(),
  image: faker.image.image(),
  name: faker.lorem.sentence(),
  startDate: faker.date.future(),
  endDate: faker.date.future(),
  location: faker.address.city(),
  description: faker.lorem.sentences(),
};
