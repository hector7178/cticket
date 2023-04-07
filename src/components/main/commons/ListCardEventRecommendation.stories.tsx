import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListCardEventRecommendation, {
  props,
} from './ListCardEventRecommendation';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/ListCardEventRecommendation',
  component: ListCardEventRecommendation,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <div className="bg-gray-400 p-24 ">
    <ListCardEventRecommendation {...args} />
  </div>
);

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  items: Array.from({ length: 4 }, () => ({
    category: faker.lorem.word(),
    image: faker.image.cats(),
    location: faker.address.streetAddress(),
    name: faker.name.jobTitle(),
    category_id: faker.datatype.uuid(),
    id: faker.datatype.uuid(),
  })),
};
