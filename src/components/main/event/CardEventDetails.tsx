import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ButtonLink, Icon } from '@/components/commons';
import Link from 'next/link';

export type props = {
  className?: string;
  id: string;
  image: string;
  details: string;
  restrictions: string;
  general: string;
  observations: string;
  services: string;
  access: string;
};
const CardEventDetails: React.FC<props> = ({
  className,
  access,
  details,
  general,
  image,
  observations,
  restrictions,
  services,
  id,
}) => {
  const t = useTranslations('Card_Event_Details');
  return (
    <div className={classNames('', className)}>
      <div className="relative w-auto h-72 md:h-96 rounded-md overflow-hidden">
        <Image src={image} alt="" className="object-cover" fill />
      </div>

      <div className="flex flex-col my-5">
        <div className="flex gap-10 ml-auto text-customBlueNight">
          <span className="font-semibold">{t('shared_event')}</span>
          <div className="flex gap-4">
            <Icon name="facebook" className="text-customBlueNight" />
            <Icon name="instagram" className="text-customBlueNight" />
            <Icon name="twitter" className="text-customBlueNight" />
            <Icon name="whatsapp" className="text-customBlueNight" />
            <Icon name="telegram" className="text-customBlueNight" />
          </div>
        </div>
      </div>

      <span className="block font-semibold mt-5 text-lg">
        {t('event_details')}
      </span>
      <p>
        {details}{' '}
        <Link
          className="text-customBlueNight font-semibold"
          href={`/event/${id}`}
        >
          Read more...
        </Link>
      </p>

      <ul className="space-y-4 mt-10">
        <li className="flex gap-4 text-sm">
          <span className="font-semibold">{t('restrictions')}</span>{' '}
          <span>{restrictions}</span>
        </li>
        <li className="flex gap-4 text-sm">
          <span className="font-semibold">{t('general')}</span>{' '}
          <span>{general}</span>
        </li>
        <li className="flex gap-4 text-sm">
          <span className="font-semibold">{t('observations')}</span>{' '}
          <span>{observations}</span>
        </li>
        <li className="flex gap-4 text-sm">
          <span className="font-semibold">{t('services')}</span>{' '}
          <span>{services}</span>
        </li>
        <li className="flex gap-4 text-sm">
          <span className="font-semibold">{t('limited_access')}</span>{' '}
          <span>{access}</span>
        </li>
      </ul>
    </div>
  );
};

export default CardEventDetails;
