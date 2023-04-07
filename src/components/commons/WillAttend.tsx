import React from 'react';
import { classNames } from '@/helpers';
import { Icon } from '@/components/commons';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  changeColor?: boolean;
};
const WillAttend: React.FC<props> = ({ className, changeColor = false }) => {
  const t = useTranslations('Public');
  return (
    <button
      className={classNames(
        'inline-flex text-sm rounded-lg shadow-xl px-2 py-2 font-medium items-center gap-2',
        changeColor ? 'bg-customGreenVan text-white' : 'bg-gray-200 text-black',
        className
      )}
    >
      <Icon className="w-3 h-3" name="circle-check-outline" />
      {t('event.attend')}
    </button>
  );
};

export default WillAttend;
