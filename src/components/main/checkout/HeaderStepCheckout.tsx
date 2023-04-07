import React from 'react';
import { classNames } from '@/helpers';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/commons';

export type props = {
  className?: string;
  name: string;
  location: string;
};

const HeaderStepCheckout: React.FC<props> = ({ className, name, location }) => {
  const t = useTranslations('Header_Step_Checkout');
  return (
    <div
      className={classNames(
        'border-b-2 border-gray-200  p-8 flex justify-between items-center',
        className
      )}
    >
      <div className="">
        <span className="text-xl font-semibold">{name}</span>
      </div>

      <div className="flex items-center justify-center">
        <p className="flex gap-5">
          <span className="flex items-center gap-2 font-semibold">
            <Icon name="map-pin-outline" />
            {t('location')}
          </span>

          <span>{location}</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderStepCheckout;
