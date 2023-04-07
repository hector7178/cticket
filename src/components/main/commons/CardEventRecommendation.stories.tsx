import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardEventRecommendation, {
  props,
} from '@/components/main/commons/CardEventRecommendation';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardEventRecommendation',
  component: CardEventRecommendation,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <CardEventRecommendation {...args} />
);

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  category_id: faker.datatype.uuid(),
  id: faker.datatype.uuid(),
  name: faker.lorem.words(4),
  location: faker.address.streetAddress(),
  image: faker.image.cats(),
};
