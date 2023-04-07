import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderCategory, { props } from '@/components/main/search/HeaderCategory';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/HeaderCategory',
  component: HeaderCategory,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderCategory {...args} />;

export const Large: StoryFn<props> = Template.bind({});
Large.args = {
  image: faker.image.cats(),
  name: faker.lorem.words(),
  size: 'large',
};

export const Small: StoryFn<props> = Template.bind({});
Small.args = {
  image: faker.image.cats(),
  name: faker.lorem.words(),
  size: 'small',
};
