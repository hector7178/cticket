import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SidebarCheckout, { props } from './SidebarCheckout';
import { faker } from '@faker-js/faker';
import { useForm } from 'react-hook-form';

export default {
  title: 'Organisms/SidebarCheckout',
  component: SidebarCheckout,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm();
  return (
    <SidebarCheckout className="md:max-w-xs " {...args} {...useFormReturn} />
  );
};

export const Default = Template.bind({});
Default.args = {
  image: faker.image.imageUrl(),
  name: faker.name.findName(),
  date: faker.date.future(),
  countTickets: faker.datatype.number(),
  spots: Array.from({ length: 5 }, () => ({
    row: faker.random.alphaNumeric(2),
    seat: faker.datatype.number(20),
    section: faker.datatype.number(10),
  })),
  subtotal: faker.datatype.number(),
  fees: faker.datatype.number(),
  discount: faker.datatype.number(),
  total: faker.datatype.number(),
};
