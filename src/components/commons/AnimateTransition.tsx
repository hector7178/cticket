import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';;
import useAnimation from '@/helpers/useAnimation';

export type props = {
  className?: string;
  as?: any;
  show?: boolean;
  animation: 'grow' | 'fade' | 'slide-left' | 'slide-right'  | 'slide-top' | 'slide-bottom';
  children?: React.ReactNode;
  appear?: boolean;
  afterLeave?: any;
};

const AnimateTransition: React.FC<props> = ({ className, as, show, animation, children, ...props }) => {
  const { ...animationProps } = useAnimation(animation);

  return (
    <Transition
      className={className}
      as={as == 'fragment' ? Fragment : as}
      show={show}
      {...animationProps}
      {...props}
    >
      {children}
    </Transition>
  );
};

export default AnimateTransition;
