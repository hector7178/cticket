import { getEvents } from '@/api/event/event';
import { getEventsCategories } from '@/api/event/event_category';
import MainLayout from '@/components/layout/main';
import CardAdvertisment from '@/components/main/commons/CardAdvertisment';
import Hero from '@/components/main/commons/Hero';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import SidebarSearch from '@/components/main/commons/SidebarSearch';
import HeaderCategory from '@/components/main/search/HeaderCategory';
import HeaderSearch from '@/components/main/search/HeaderSearch';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Program = () => {
  const useFormReturn = useForm<any>({
    defaultValues: {
      initial_date: 'dd/mm/aaaa',
      finish_date: 'dd/mm/aaaa',
    },
  });
  const { query: queryObj, push, pathname } = useRouter();
  const { watch } = useFormReturn;
  const query = watch('query');
  const t = useTranslations('Public');
  const locale = useLocale();
  const [heroImages, setHeroImages] = useState([]);
  const [imageAdvertisment, setImageAdvertisment] = useState('');
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: getEventsCategories,
  });

  const events = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  const category = categories?.data?.find((item) =>
    item.category.find((obj) => obj.name == queryObj?.category)
  );

  useEffect(() => {
    setHeroImages(
      Array.from({ length: 5 }, () => ({
        image: faker.image.abstract(),
      }))
    );
    setImageAdvertisment(faker.image.cats());
  }, []);
  useEffect(() => {
    if (query) {
      push(
        {
          pathname: '/program',
          query: {
            ...queryObj,
            query: encodeURIComponent(query),
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      delete queryObj?.query;
      push(
        {
          pathname: '/program',
          query: {
            ...queryObj,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [query]);
  return (
    <div className="mb-44 -mt-8">
      <Hero items={heroImages} />
      <div className="mt-16 space-y-16 section-container">
        <HeaderSearch
          items={categories?.data?.map((item) => ({
            name: item.category.find((obj) => obj.lang == locale)?.name,
            color: item.color,
            image: item.picture,
          }))}
          layout="swiper"
          size="small"
          setCurrentPage={() => {}}
          setPageSize={() => {}}
          totalDocs={12}
          {...useFormReturn}
        />
        {typeof queryObj?.category == 'string' && queryObj?.category !== '' && (
          <HeaderCategory
            color={category?.color}
            image={category?.picture}
            name={category?.category?.find((obj) => obj.lang == locale)?.name}
            size="large"
          />
        )}
        <div className="grid grid-cols-6 gap-5 md:gap-10">
          <SidebarSearch
            className="col-span-2 hidden md:block"
            {...useFormReturn}
          />
          <ListCardEvent
            className="col-span-6 md:col-span-4"
            controls
            loading={events?.isLoading}
            layout="swiper"
            setCurrentPage={() => {}}
            setPageSize={() => {}}
            totalDocs={10}
            title={t('home.new_events')}
            items={events?.data?.items?.map((item) => ({
              image: 'https://loremflickr.com/640/480/cats',
              name: item.content.find((obj) => obj.lang == locale)?.name,
              startDate: item.created_at,
              startTime: '1:00',
              endTime: '12:00',
              location: 'Location',
              category_id: item.category_id?.id,
              id: item._id,
            }))}
            {...useFormReturn}
          />
        </div>

        <hr className="bg-gray-700 border-[1.3px]" />

        <ListCardEvent
          loading={events?.isLoading}
          layout="swiper"
          setCurrentPage={() => {}}
          setPageSize={() => {}}
          totalDocs={10}
          title={
            query
              ? t('commons.results', {
                  length: events?.data?.items?.length,
                  query,
                })
              : t('commons.recommended_events')
          }
          items={events?.data?.items?.map((item) => ({
            image: 'https://loremflickr.com/640/480/cats',
            name: item.content.find((obj) => obj.lang == locale)?.name,
            startDate: item.created_at,
            startTime: '1:00',
            endTime: '12:00',
            location: 'Location',
            category_id: item.category_id?.id,
            id: item._id,
          }))}
          {...useFormReturn}
        />

        <CardAdvertisment image={imageAdvertisment} size="large" />
      </div>
    </div>
  );
};

Program.Layout = MainLayout;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Program;
