import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Base, { props } from './Base';
import {faker} from '@faker-js/faker'

export default {
  title: 'Organisms/Base',
  component: Base,
} as Meta;

const Template: StoryFn<props> = (args) => <Base {...args} />;

export const Default = Template.bind({});