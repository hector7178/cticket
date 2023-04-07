import React from 'react';
import { classNames } from '@/helpers';
import CardEventRecommendation, {
  props as CardEventRecommendationProps,
} from '@/components/main/commons/CardEventRecommendation';
import { props as PaginationProps } from '@/components/commons/Pagination';
import { Tab } from '@headlessui/react';
import { Button, Icon } from '@/components/commons';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  items: CardEventRecommendationProps[];
} & PaginationProps;

const ListCardEventRecommendation: React.FC<props> = ({
  className,
  items,
  setCurrentPage,
  setPageSize,
  totalDocs,
}) => {
  const t = useTranslations('List_Card_Event_Recommendation');
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.List className="flex flex-col sm:flex-row gap-3 sm:mx-auto md:mx-10">
        <Tab
          className={({ selected }) =>
            classNames(
              'flex justify-center gap-2 font-semibold text-lg items-center px-4 py-2 rounded-t-md',
              selected && 'bg-gray-100'
            )
          }
        >
          <Icon name="food" />
          {t('food')}
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'flex justify-center gap-2 font-semibold text-lg items-center px-4 py-2 rounded-t-md',
              selected && 'bg-gray-100'
            )
          }
        >
          <Icon name="lodging" />
          {t('lodging')}
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'flex justify-center gap-2 font-semibold text-lg items-center px-4 py-2 rounded-b-md sm:rounded-b-none sm:rounded-t-md',
              selected && 'bg-gray-100'
            )
          }
        >
          <Icon name="activities" />
          {t('activities')}
        </Tab>
      </Tab.List>
      <Tab.Panels className="bg-white rounded-lg p-10 shadow-xl">
        <Tab.Panel className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {items?.map((item, idx) => (
            <CardEventRecommendation {...item} key={idx} />
          ))}
          <div className="lg:col-span-2 flex m flex-col">
            <Button className="mx-auto" color="black" weight="outline">
              {t('view_more')}
            </Button>
          </div>
        </Tab.Panel>
        <Tab.Panel className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {items?.map((item, idx) => (
            <CardEventRecommendation {...item} key={idx} />
          ))}
          <div className="lg:col-span-2 flex m flex-col">
            <Button className="mx-auto" color="black" weight="outline">
              {t('view_more')}
            </Button>
          </div>
        </Tab.Panel>
        <Tab.Panel className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {items?.map((item, idx) => (
            <CardEventRecommendation {...item} key={idx} />
          ))}
          <div className="lg:col-span-2 flex m flex-col">
            <Button className="mx-auto" color="black" weight="outline">
              {t('view_more')}
            </Button>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ListCardEventRecommendation;
