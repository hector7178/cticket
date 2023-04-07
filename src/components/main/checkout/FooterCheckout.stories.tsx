import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FooterCheckout, { props } from './FooterCheckout';
import { faker } from '@faker-js/faker';

export default {
  title: 'Organisms/FooterCheckout',
  component: FooterCheckout,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const [currentStep, setCurrentStep] = useState();
  return <FooterCheckout className="max-w-4xl" {...{ setCurrentStep, currentStep }} {...args} />;
};

export const Default = Template.bind({});
