import React from 'react';
import {classNames} from '@/helpers'
export type props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  className?: string;
  image?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  shape?: 'pill' | 'semibrick';
  variant?: 'avatar' | 'number';
  number?: number;
};
const Avatar: React.FC<props> = ({
  className,
  image = '/images/avatar.png',
  size = 'medium',
  shape = 'pill',
  variant = 'avatar',
  number,
}) => {
  const sizeStyle =
    size == 'extra-small'
      ? 'w-6 h-6 '
      : size == 'small'
      ? 'w-8 h-8 '
      : size == 'medium'
      ? 'w-10 h-10'
      : size == 'large'
      ? 'w-20 h-20'
      : 'w-36 h-36 ';
  return variant == 'avatar' ? (
    <img
      className={classNames(
        'object-cover',
        sizeStyle,
        shape == 'semibrick' ? 'rounded-md' : 'rounded-full',
        className
      )}
      src={image || '/images/avatar.png'}
    ></img>
  ) : (
    <div
      className={classNames(
        sizeStyle,
        shape == 'semibrick' ? 'rounded-md' : 'rounded-full',
        className,
        'flex items-center font-semibold text-sm justify-center bg-gray-50 text-gray-500 border-2 border-white'
      )}
    >
      +{number}
    </div>
  );
};

export default Avatar;
