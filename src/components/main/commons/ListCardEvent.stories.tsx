import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ListCardEvent, { props } from './ListCardEvent';
import { faker } from '@faker-js/faker';
import { useForm } from 'react-hook-form';
export default {
  title: 'Molecules/ListCardEvent',
  component: ListCardEvent,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const useFormReturn = useForm();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  return (
    <ListCardEvent
      className="max-w-7xl mx-auto "
      {...args}
      {...{ setCurrentPage, setPageSize }}
      {...useFormReturn}
    />
  );
};
const items = Array.from({ length: 10 }, () => ({
  image: faker.image.cats(),
  name: faker.name.jobTitle(),
  date: faker.date.past(),
  location: faker.address.city(),
  color: faker.internet.color(),
}));

export const Default = Template.bind({});
Default.args = {
  title: faker.lorem.word(),
  layout: 'grid',
  items,
  loading: false,
  totalDocs: 10,
};

export const LayoutColumn = Template.bind({});
LayoutColumn.args = {
  title: faker.lorem.word(),
  layout: 'column',
  items,
  loading: false,
  totalDocs: 10,
};

export const LayoutSwiper = Template.bind({});
LayoutSwiper.args = {
  title: faker.lorem.word(),
  layout: 'swiper',
  items,
  loading: false,
  totalDocs: 10,
};

export const WithControls = Template.bind({});
WithControls.args = {
  title: faker.lorem.word(),
  layout: 'grid',
  items,
  loading: false,
  totalDocs: 10,
  controls: true,
};

export const Loading = Template.bind({});
Loading.args = {
  title: faker.lorem.word(),
  layout: 'grid',
  items,
  loading: true,
  totalDocs: 10,
  controls: true,
};

export const NotFound = Template.bind({});
NotFound.args = {
  title: faker.lorem.word(),
  layout: 'grid',
  items,
  loading: false,
  totalDocs: 0,
  controls: true,
};
