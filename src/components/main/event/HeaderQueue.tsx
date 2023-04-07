import React from 'react';
import { classNames } from '@/helpers';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  name: string;
  location: string;
  currentStep: number;
};

const HeaderQueue: React.FC<props> = ({
  className,
  currentStep,
  location,
  name,
}) => {
  const t = useTranslations('Header_Queue');
  return (
    <div className={classNames(' flex flex-col', className)}>
      <span className="block text-2xl font-bold text-center text-white sm:text-4xl">
        {name}
      </span>
      <span className="block mt-1 text-center text-white">{location}</span>

      <div className="flex items-center w-full mx-auto text-sm mt-9">
        <div className="relative flex-1">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep >= 1 ? ' bg-customYellow' : 'bg-gray-200'
              )}
            />
            <div
              className={classNames(
                'flex-1 h-[1.5px]',
                currentStep >= 2 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="absolute top-0 w-32 mt-5 text-sm text-center text-white -ml-14 whitespace-nowrap">
            {t('lobby')}
          </span>
        </div>
        <div className="relative flex-1">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep >= 2 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
            <div
              className={classNames(
                'flex-1 h-[1.5px]',
                currentStep >= 3 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="absolute top-0 w-32 mt-5 text-sm text-center text-white -ml-14 whitespace-nowrap">
            {t('waiting_room')}
          </span>
        </div>
        <div className="relative flex-1">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep >= 3 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
            <div
              className={classNames(
                'flex-1 h-[1.5px]',
                currentStep == 4 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="absolute top-0 w-32 mt-5 text-sm text-center text-white -ml-14 whitespace-nowrap">
            {t('virtual_queue')}
          </span>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep == 4 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="absolute top-0 w-32 mt-5 text-sm text-center text-white -ml-14 whitespace-nowrap">
            {t('select_your_seats')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderQueue;
