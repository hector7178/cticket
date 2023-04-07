import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';

export type props = {
  className?: string;
  image?: string;
  size?: 'small' | 'large';
};

const CardAdvertisment: React.FC<props> = ({
  className,
  image,
  size = 'small',
}) => {
  return (
    <div
      className={classNames(
        'relative w-full',
        className,
        size == 'small' ? 'h-40' : 'h-56'
      )}
    >
      <Image src={image} alt="" className="object-cover" fill />
    </div>
  );
};

export default CardAdvertisment;
