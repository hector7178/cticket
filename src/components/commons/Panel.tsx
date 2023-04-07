import React, { useState } from 'react';
import {classNames} from '@/helpers'
import { Popover } from '@headlessui/react';
import {useAnimation} from '@/helpers';
import { Float, FloatProps } from '@headlessui-float/react';

export type props = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  position?: FloatProps['placement'];
  children?: React.ReactNode;
  render?: React.ReactNode;
  defaultOpen?: boolean;
};
const Panel: React.FC<props> = ({
  className,
  size = 'medium',
  position = 'bottom',
  children,
  render,
}) => {
  const animation = useAnimation('grow');
  return (
    <Popover as="div" className="relative" >
      <Float placement={position} {...animation}>
        <Popover.Button className="max-w-fit" as="div">{children}</Popover.Button>
        <Popover.Panel
          as="div"
          className={classNames(
            'card p-0 w-screen mt-2',
            size == 'small' ? 'max-w-md' : size == 'medium' ? 'max-w-xl' : ' max-w-3xl',
            className
          )}
        >
          {render}
        </Popover.Panel>
      </Float>
    </Popover>
  );
};

export default Panel;
