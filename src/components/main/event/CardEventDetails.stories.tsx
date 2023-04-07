import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventDetails, { props } from './CardEventDetails';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/CardEventDetails',
  component: CardEventDetails,
} as Meta;

const Template: StoryFn<props> = (args) => <CardEventDetails className="max-w-5xl mx-auto" {...args} />;

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  access: faker.lorem.words(10),
  details: faker.lorem.paragraphs(),
  general: faker.lorem.words(10),
  observations: faker.lorem.words(10),
  restrictions: faker.lorem.words(10),
  services: faker.lorem.words(10),
  id: faker.datatype.uuid(),
  image: faker.image.cats(),
};
