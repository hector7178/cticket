import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Map, { props } from './Map';
import { faker } from '@faker-js/faker';

export default {
  title: 'Molecules/Map',
  component: Map,
} as Meta;

const Template: StoryFn<props> = (args) => (
  <Map className="aspect-video" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  origin: {
    lat: 45.424721,
    lng: -75.695,
  },
  zoom: 15,
};

export const WithDestination = Template.bind({});
WithDestination.args = {
  origin: {
    lat: 45.424721,
    lng: -75.695,
  },
  destination: {
    lat: 44.5,
    lng: -89.5,
  },
  zoom: 15,
};
