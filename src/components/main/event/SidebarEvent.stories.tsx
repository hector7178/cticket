import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SidebarEvent, { props } from './SidebarEvent';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/SidebarEvent',
  component: SidebarEvent,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <div className="max-w-md w-full">
    <SidebarEvent {...args} />
  </div>
);

export const Default: StoryFn<props> = Template.bind({});
Default.args = {
  cost: faker.datatype.number({ min: 300, max: 3000 }),
  endDate: faker.date.future(),
  startDate: faker.date.past(),
  endTime: `${faker.datatype.number({
    min: 1,
    max: 12,
  })}:${faker.datatype.number({ min: 1, max: 60 })}`,
  startTime: `${faker.datatype.number({
    min: 1,
    max: 12,
  })}:${faker.datatype.number({ min: 1, max: 60 })}`,
  id: faker.datatype.uuid(),
  location: faker.address.streetAddress(),
  name: faker.name.jobTitle(),
  willAttend: faker.datatype.boolean(),
  isLoggedIn: faker.datatype.boolean(),
  category: faker.lorem.word(),
};
