import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LayoutMain, { props } from './LayoutMain';
import {faker} from '@faker-js/faker'

export default {
  title: 'Molecules/LayoutMain',
  component: LayoutMain,
} as Meta;

const Template: StoryFn<props> = (args) => <LayoutMain {...args} />;

export const Default = Template.bind({});