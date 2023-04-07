import React from 'react';
import { classNames } from '@/helpers';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  number: number;
  maxNumber: number;
  queueId: string;
};
// TODO: fix percentage bar
const CardQueue: React.FC<props> = ({ className,   number, maxNumber, queueId }) => {
  const t = useTranslations('Card_Event_Queue');
  return (
    <div
      className={classNames('rounded-xl overflow-hidden flex flex-col justify-between shadow-xl card bg-white', className)}
    >
      <div className="flex flex-col items-center px-10 py-5">
        <span className="text-lg font-semibold">{t('title')}</span>
        <span className="mt-3 text-5xl font-bold text-black">{number}</span>
        <span className="text-sm">{t('subtitle')}</span>

        <div className="flex-1 w-3/4 h-3 mt-3 bg-gray-100 rounded-full">
          <div
            className="w-full h-3 rounded-full bg-amber-400"
            style={{
              width: `${(number / 100) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center py-1 mt-10 bg-gray-100">
        <span className="text-sm text-gray-500">
          {t('virtual_queue_id')} {queueId}
        </span>
      </div>
    </div>
  );
};

export default CardQueue;
