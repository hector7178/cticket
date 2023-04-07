import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { classNames, CurrentColor } from '@/helpers';

export type props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  UseFormRegisterReturn & {
    className?: string;
    type?: 'text' | 'email' | 'password';
    color?: 'primary';
    label?: string;
    error?: any;
    fullWidth?: boolean;
  };
const TextArea = React.forwardRef<any, props>(
  (
    {
      className,
      color = 'primary',
      label,
      error,
      type = 'text',
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const currentColor = CurrentColor();
    return (
      <div className={classNames(fullWidth && 'w-full', className)}>
        {label && <label className="input-label">{label}</label>}
        <textarea
          className={classNames(
            `textfield-primary focus-within:ring-${currentColor}  focus-within:border-${currentColor}`,
            fullWidth && 'w-full',
            label && 'mt-1'
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 ml-1 text-xs text-customRed ">{error}</p>}
      </div>
    );
  }
);

export default TextArea;
