import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardQueue, { props } from '@/components/main/event/CardQueue';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardQueue',
  component: CardQueue,
} as Meta;

const Template: StoryFn<props> = (args) => <CardQueue {...args} />;

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  number: faker.datatype.number({ min: 10, max: 70 }),
  maxNumber: faker.datatype.number({ min: 100, max: 200 }),
  queueId: faker.datatype.uuid(),
};
