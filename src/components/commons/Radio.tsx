import { classNames } from '@/helpers';
import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type props = {
  color?: 'primary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  error?: string;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
> &
  UseFormRegisterReturn;
const Radio = React.forwardRef<any, props>(
  ({ color = 'primary', label, error, size = 'medium', ...props }, ref) => {
    const sizeStyle =
      size == 'small'
        ? 'w-3 h-3 text-xs'
        : size == 'medium'
        ? 'w-4 h-4 text-sm'
        : size == 'large' && 'w-6 h-6 text-';
    return (
      <div className={classNames('flex items-center items space-x-4')}>
        <input
          id={label}
          type="radio"
          className={classNames('radio-primary', sizeStyle)}
          ref={ref}
          {...props}
        />
        {label && (
          <label htmlFor={label} className="ml-2">
            {label}
          </label>
        )}
        {error && <p className="mt-1 ml-1 text-xs text-customRed ">{error}</p>}
      </div>
    );
  }
);

export default Radio;
