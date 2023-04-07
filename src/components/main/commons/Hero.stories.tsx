import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Hero, { props } from './Hero';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/Hero',
  component: Hero,
} as Meta;

const Template: StoryFn<props> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 5 }, () => ({
    image: faker.image.image(),
    url: faker.internet.url(),
  })),
};
