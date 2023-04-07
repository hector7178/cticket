import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Panel, { props } from './Panel';
import { Button } from '@/components/commons';

export default {
  title: 'Molecules/Panel',
  component: Panel,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <div className="flex justify-center">
    <Panel {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  className: 'p-5',
  size: 'medium',
  render: <Button>Content</Button>,
  children: <Button>Open</Button>,
};
