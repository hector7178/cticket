import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Icon } from '@/components/commons';
import { useQuery } from '@tanstack/react-query';
import { readEventCategory } from '@/api/event/event_category';
import { EventCategory } from '@/interfaces/event';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export type props = {
  className?: string;
  category_id: string;
  name: string;
  location: string;
  image: string;
  id: string;
};

const CardEventRecommendation: React.FC<props> = ({
  className,
  category_id,
  id,
  location,
  name,
  image,
}) => {
  const category = useQuery<EventCategory>({
    queryKey: ['category'],
    queryFn: async () => await readEventCategory(category_id),
    enabled: Boolean(category_id),
  });
  const locale = useLocale();
  return (
    <Link
      href={`/event/${id}`}
      className={classNames(
        'flex overflow-hidden items-center bg-white rounded-xl shadow-xl',
        className
      )}
    >
      <span className="block relative h-full w-24 md:w-auto shrink-0 md:h-52 aspect-[12/9]">
        <Image className="object-cover" fill alt="" src={image} />
      </span>

      <span className="block px-10 my-3">
        <span className="block text-sm lg:text-base">
          {category?.data?.category?.find((obj) => obj.lang == locale)?.name}
        </span>
        <span className="block lg:text-xl mt-1 font-semibold">{name}</span>
        <p className="text-black text-sm lg:text-base flex gap-1 items-center mt-2 lg:mt-5">
          <Icon name="map-pin" className="w-4 h-4" />
          {location}
        </p>
      </span>
    </Link>
  );
};

export default CardEventRecommendation;
