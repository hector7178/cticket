import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextArea, { props } from './TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta;

const Template: StoryFn<props> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  color:"primary",
  placeholder:"Text field"
};

