import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { CurrentColor } from '@/helpers';
export type props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  UseFormRegisterReturn & {
    className?: string;
    color?: 'primary';
    label?: string;
    error?: string;
  };
const Radio = React.forwardRef<any, props>(
  ({ className, color = 'primary', label, error, ...props }, ref) => {
    const currentColor = CurrentColor();
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            type="checkbox"
            className={color == 'primary' && `checkbox-primary bg-${currentColor} text-${currentColor}`}
            ref={ref}
            {...props}
          />
          {label && (
            <label htmlFor={label.toString()} className="ml-2 input-label ">
              {label}
            </label>
          )}
        </div>
        {error && <p className="mt-1 ml-1 text-xs text-customRed ">{error}</p>}
      </div>
    );
  }
);

export default Radio;
