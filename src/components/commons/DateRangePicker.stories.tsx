import React, { useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DateRangePicker, { props } from './DateRangePicker';
import { faker } from '@faker-js/faker';
import { useForm } from 'react-hook-form';
import { DateObject } from 'react-multi-date-picker';
import TextField from './TextField';
import { format } from 'date-fns';

export default {
  title: 'Molecules/DateRangePicker',
  component: DateRangePicker,
} as Meta;

const Template: StoryFn<props> = (args) => {
  const { control, watch, register, setValue } = useForm();

  useEffect(() => {
    if (watch('date-range')?.[0]) {
      setValue(
        'startDate',
        format(new Date(watch('date-range')?.[0]), 'dd/mm/yyyy')
      );
    }
  }, [watch('date-range')?.[0], watch('date-range')?.[1]]);
  return (
    <DateRangePicker {...args} control={control}>
      <TextField {...register('startDate')} />
    </DateRangePicker>
  );
};

export const Default = Template.bind({});
