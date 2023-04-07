import React, { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { classNames, CurrentColor } from '@/helpers';

export type props = {
  className?: string;
  color?: 'primary';
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  shape?: 'brick' | 'semibrick' | 'pill';
  weight?: 'outline' | 'underline' | 'inline';
  label?: string;
  error?: any;
  fullWidth?: boolean;
  icon?: any;
  iconPosition?: 'left' | 'right';
  showSecurity?: boolean;
  lenghtLimit?: number;
  currentLenght?: number;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
> &
  UseFormRegisterReturn;
const TextField = React.forwardRef<any, props>(
  (
    {
      className,
      color = ' primary',
      size = 'medium',
      shape = 'semibrick',
      weight = 'outline',
      label,
      error,
      type = 'text',
      fullWidth = true,
      icon,
      iconPosition = 'left',
      showSecurity = false,
      lenghtLimit,
      currentLenght = 0,
      ...props
    },
    ref
  ) => {
    const currentColor = CurrentColor();
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prv) => !prv);
    const sizeStyle =
      size == 'small'
        ? '[&>input]:text-xs [&>input]:placeholder:text-xs'
        : size == 'medium'
        ? '[&>input]:text-sm [&>input]:placeholder:text-sm'
        : size == 'large'
        ? '[&>input]:text-3xl [&>input]:placeholder:text-3xl'
        : '[&>input]:text-5xl [&>input]:placeholder:text-5xl';
    const weightStyle =
      weight == 'outline'
        ? `textfield-primary focus-within:ring-${currentColor}  focus-within:border-${currentColor}`
        : weight == 'underline' && 'textfield-primary-underline';
    const shapeStyle =
      shape == 'brick'
        ? 'rounded-none'
        : shape == 'semibrick'
        ? 'rounded-md'
        : 'rounded-full';
    const style = classNames(
      'flex items-center space-x-3',
      sizeStyle,
      shapeStyle,
      weightStyle,
      fullWidth && 'w-full',
      label && 'mt-1'
    );
    return (
      <div
        className={classNames(
          'text-xl [&input]:placeholder:text-xl',
          fullWidth && 'w-full',
          className
        )}
      >
        {label && <label className="input-label">{label}</label>}
        <div className={style}>
          {(icon && iconPosition) == 'left' && icon}
          <input
            type={type == 'password' && showPassword ? 'text' : type}
            className="w-full p-0 bg-transparent border-transparent appearance-none disabled:text-gray-300 dark:disabled:text-gray-500 focus:border-transparent focus:ring-transparent"
            ref={ref}
            {...props}
          />
          {(icon && iconPosition) == 'right' && icon}
          {type == 'password' && (
            <>
              {showPassword ? (
                <EyeIcon
                  className="w-5 h-5 cursor-pointer "
                  onClick={toggleShowPassword}
                />
              ) : (
                <EyeSlashIcon
                  className="w-5 h-5 cursor-pointer "
                  onClick={toggleShowPassword}
                />
              )}
            </>
          )}
        </div>
        {type == 'password' && showSecurity && (
          <div className="flex items-center space-x-3">
            {Array(6)
              .fill(1)
              .map((i, idx) => (
                <div
                  key={idx}
                  className={classNames(
                    'rounded-full ml-1 h-1 flex-1 mt-3 ',
                    idx < currentLenght ? 'bg-emerald-400' : 'bg-gray-200'
                  )}
                ></div>
              ))}
          </div>
        )}
        {error && <p className="mt-1 ml-1 text-xs text-customRed ">{error}</p>}
        {lenghtLimit && currentLenght && (
          <div className="text-xs text-right text-gray-500">
            {currentLenght}/{lenghtLimit}
          </div>
        )}
      </div>
    );
  }
);

export default TextField;
