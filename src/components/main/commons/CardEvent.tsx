import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Button, WillAttend } from '@/components/commons';
import { Icon } from '@/components/commons';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import { useLocale } from 'next-intl';
import parseDate from '@/helpers/parseDate';
import { useQuery } from '@tanstack/react-query';
import { readEventCategory } from '@/api/event/event_category';
import Link from 'next/link';
import { EventCategory } from '@/interfaces/event';
import { readEventVenue } from '@/api/event/event_venue';

export type props = {
  className?: string;
  layout: 'grid' | 'column';
  image: string;
  name: string;
  startDate: Date;
  startTime: string;
  endTime: string;
  location: string;
  favorite?: boolean;
  willAttend?: boolean;
  category_id: string;
  id: string;
  isLoggedIn?: boolean;
};
// TODO: should have time prop
const CardEvent: React.FC<props> = ({
  className,
  startDate,
  endTime,
  startTime,
  image,
  layout,
  location,
  name,
  willAttend = false,
  favorite = false,
  category_id,
  id,
  isLoggedIn,
}) => {
  const category = useQuery<EventCategory>({
    queryKey: ['category'],
    queryFn: async () => await readEventCategory(category_id),
    enabled: Boolean(category_id),
  });

  const eventVenue = useQuery({
    queryKey: ['eventVenue'],
    queryFn: async () => await readEventVenue(id),
    enabled: Boolean(id),
  });
  // console.log('single event venue', eventVenue?.data);
  const locale = useLocale();
  return (
    <Link
      href={`/event/${id}`}
      className={classNames(
        'rounded-xl relative shadow-xl overflow-hidden',
        layout == 'column' ? 'flex' : 'block',
        className
      )}
    >
      {isLoggedIn && (
        <Button
          className={classNames(
            'absolute z-20 top-3',
            layout == 'grid' ? 'right-3' : 'left-3'
          )}
          color="white"
          shape="pill"
          iconLeft={
            favorite ? (
              <Icon name="heart-solid" className="text-customYellow" />
            ) : (
              <Icon name="heart-outline" className="text-white" />
            )
          }
        />
      )}
      <span
        className={classNames(
          'relative block',
          layout == 'grid' ? 'aspect-[4/3]' : 'aspect-square w-72 '
        )}
      >
        <Image src={image} alt="" fill className="object-cover" />
        {isLoggedIn && (
          <WillAttend
            changeColor={willAttend}
            className={classNames(
              'absolute bottom-3',
              layout == 'grid' ? 'right-3' : 'left-3'
            )}
          />
        )}
      </span>

      <span className="flex-1 flex flex-col items-start">
        <span
          className={classNames('block h-5 w-full')}
          style={{ backgroundColor: category?.data?.color }}
        />

        <span
          className={classNames(
            'w-full',
            layout == 'column' ? 'flex h-full items-center' : 'block'
          )}
        >
          <span className="p-5 block">
            <span
              title={name}
              className="block text-lg font-semibold text-black break-words truncate w-"
            >
              {name}
            </span>
            <span
              className={classNames(
                'my-3',
                layout == 'column' ? 'flex gap-3' : 'block'
              )}
            >
              <span className="block text-customGray">
                {format(parseDate(startDate), 'EEEE dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>
              <span className="flex gap-2 text-customGray">
                {startTime} <span>-</span> {endTime}
              </span>
            </span>

            <p className="flex items-center gap-2 font-semibold text-black break-words">
              <Icon name="map-pin" />
              {location}
            </p>
          </span>
        </span>
      </span>
    </Link>
  );
};

export default CardEvent;
