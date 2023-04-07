import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventLocation, { props } from './CardEventLocation';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/CardEventLocation',
  component: CardEventLocation,
} as Meta;

const Template: StoryFn<props> = (args) => <CardEventLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: faker.random.word(),
  location: faker.address.city(),
  origin: {
    lat: -2.18331,
    lng: -79.8833,
  },
  tags: [faker.random.word(), faker.random.word(), faker.random.word()],
};
