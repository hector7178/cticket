import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Footer, { props } from './Footer';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn<props> = (args) => <Footer {...args} />;

export const Default = Template.bind({});