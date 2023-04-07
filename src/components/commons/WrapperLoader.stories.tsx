import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import WrapperLoader, { props } from './WrapperLoader';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/WrapperLoader',
  component: WrapperLoader,
} as Meta;

const Template: Story<props> = (args) => (
  <WrapperLoader {...args}>
    <div>Component</div>
    <div>Loading...</div>
    <div>Not results</div>
  </WrapperLoader>
);

export const Default = Template.bind({});
Default.args = {
  loading: true,
  totalDocs: 10,
};

export const NotResults = Template.bind({});
NotResults.args = {
  loading: false,
  totalDocs: 0,
};
