import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pagination, { props } from './Pagination';

export default {
  title: 'Atoms/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<props> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  setPageSize: () => {},
  gotoPage: () => {},
  totalDocs: 1000,
};
