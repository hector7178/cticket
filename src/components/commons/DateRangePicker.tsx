import React, { useState } from 'react';
import { classNames } from '@/helpers';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TextField from './TextField';
import { Controller, UseControllerProps } from 'react-hook-form';

export type props = {
  className?: string;
  control: any;
  children: React.ReactNode;
};

const DateRangePicker: React.FC<props> = ({ className, control, children }) => {
  function CustomInput({ openCalendar }: { openCalendar?: any }) {
    return <div onFocusCapture={openCalendar}>{children}</div>;
  }
  return (
    <Controller
      control={control}
      name="date-range"
      render={({ field: { onChange, value } }) => (
        <>
          <DatePicker
            value={value || ''}
            onChange={(date) => {
              onChange(date);
            }}
            render={<CustomInput />}
            format={'MM/DD/YYYY'}
            range
          />
        </>
      )}
    />
  );
};

export default DateRangePicker;
