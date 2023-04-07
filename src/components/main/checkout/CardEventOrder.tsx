import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Icon } from '@/components/commons';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  image: string;
  name: string;
  date: Date;
  countTickets: number;
  location: string;
  spots: { row: string; seat: number; section: number }[];
  user: {
    name: string;
    lastFour: number;
  };
};

const CardEventOrder: React.FC<props> = ({
  className,
  image,
  name,
  date,
  countTickets,
  location,
  spots,
  user,
}) => {
  const t = useTranslations('Card_Event_Order');
  return (
    <div className={classNames('card text-sm', className)}>
      <div className="w-full h-8 bg-customPink"></div>
      <div className="flex ">
        <div className="basis-1/3 ">
          <div className="relative w-full h-full">
            <Image className="object-cover" src={image} fill alt={name}></Image>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 px-5 py-4 sm:px-8 basis-2/3 ">
          <div>
            <p className="text-xl font-bold">{name}</p>
            <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" name="clock-outline" />
              <p className="font-bold">
                {t('time')}:{' '}
                <span className="font-medium">{format(date, 'hh:mm')} hrs</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" name="calendar-outline" />
              <p className="font-bold">
                {t('date')}:{' '}
                <span className="font-medium">{format(date, 'MMM yyyy')}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" name="person-outline" />
              <p className="font-bold">
                {t('tickets')}:{' '}
                <span className="font-medium">{countTickets}</span>
              </p>
            </div>
          </div>
          </div>
          <div>
            <p className="font-bold p">{t('name')}</p>
            <p className="mt-2">{user.name}</p>
            <div className="mt-8">
              <table>
                <thead>
                  <th className="pr-5">{t('row')}</th>
                  <th className="pr-5">{t('seat')}</th>
                  <th>{t('section')}</th>
                </thead>
                <tbody>
                  {spots.map(({ row, seat, section }, idx) => (
                    <tr key={idx}>
                      <td className="pr-5 text-center">{row}</td>
                      <td className="pr-5 text-center">{seat}</td>
                      <td className="pr-5 text-center">{section}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-5">
                <p className="font-extrabold">{t('payment_method')}</p>
                <p className="mt-2">
                  <p className="flex items-center gap-3">
                    <Icon name="master-card"></Icon>
                    <p>XXXX XXXX XXXX {user.lastFour}</p>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEventOrder;
