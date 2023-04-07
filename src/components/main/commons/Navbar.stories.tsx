import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar, { props } from './Navbar';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn<props> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});