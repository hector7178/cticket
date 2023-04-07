import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CardAdvertisment, { props } from '@/components/main/commons/CardAdvertisment';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/CardAdvertisment',
  component: CardAdvertisment,
} as Meta;

const Template: StoryFn<props> = (args) => <CardAdvertisment {...args} />;

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  image: faker.image.cats(),
};
