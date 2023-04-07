import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderProgram, { props } from './HeaderProgram';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/HeaderProgram',
  component: HeaderProgram,
} as Meta;

const Template: StoryFn<props> = (args) => <HeaderProgram {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: faker.image.imageUrl(),
  name: faker.random.word,
};
