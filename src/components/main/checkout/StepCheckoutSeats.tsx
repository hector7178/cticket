import React from 'react';
import { classNames } from '@/helpers';

export type props = {
  className?: string;
};

const StepCheckoutSeats: React.FC<props> = ({ className }) => {
  return (
    <div
      className={classNames(
        'aspect-square bg-gray-200 text-white font-bold flex items-center justify-center',
        className
      )}
    >
      Developing..
    </div>
  );
};

export default StepCheckoutSeats;
