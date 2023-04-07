import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { classNames, CurrentColor } from '@/helpers';

export type props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  UseFormRegisterReturn & {
    className?: string;
    color?: 'primary';
    label?: string;
    error?: any;
    options: {
      name: string;
      value: any;
      section?: string;
      disabled?: boolean;
    }[];
    fullWidth?: boolean;
  };
const Select = React.forwardRef<any, props>(
  (
    {
      className,
      color = 'primary',
      label,
      error,
      options,
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const sectionNames: string[] = [];
    options?.forEach((option) => {
      if (!sectionNames.includes(option.section))
        sectionNames.push(option.section);
    });
    const sections = sectionNames.map((sectionName) => {
      return options.filter((option) => option.section == sectionName);
    });
    const currentColor = CurrentColor();
    return (
      <div className={classNames(fullWidth && 'w-full', className)}>
        {label && <label className="input-label">{label}</label>}
        <select
          className={classNames(
            'pr-8',
            color == 'primary' &&
              `select-primary focus-within:ring-${currentColor}  focus-within:border-${currentColor}`,
            fullWidth && 'w-full',
            label && 'mt-1'
          )}
          ref={ref}
          {...props}
        >
          <>
            {sectionNames?.[0]
              ? sections.map((section, idx) => (
                  <optgroup label={sectionNames[idx]} key={idx}>
                    {section.map(({ name, value }, idx) => (
                      <option value={value}>{name}</option>
                    ))}
                  </optgroup>
                ))
              : options?.map(({ name, value, disabled }, idx) => (
                  <option key={idx} value={value} disabled={disabled}>
                    {name}
                  </option>
                ))}
          </>
        </select>
        {error && <p className="mt-1 ml-1 text-xs text-customRed ">{error}</p>}
      </div>
    );
  }
);

export default Select;
