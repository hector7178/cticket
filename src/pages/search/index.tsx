import { getEvents } from '@/api/event/event';
import {
  getEventsCategories,
  readEventCategory,
} from '@/api/event/event_category';
import { Title } from '@/components/commons';
import MainLayout from '@/components/layout/main';
import CardAdvertisment from '@/components/main/commons/CardAdvertisment';
import Hero from '@/components/main/commons/Hero';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import SidebarSearch from '@/components/main/commons/SidebarSearch';
import HeaderCategory from '@/components/main/search/HeaderCategory';
import HeaderSearch from '@/components/main/search/HeaderSearch';
import { Event } from '@/interfaces/event';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Search = () => {
  const useFormReturn = useForm<any>({
    defaultValues: {
      initial_date: 'dd/mm/aaaa',
      finish_date: 'dd/mm/aaaa',
    },
  });
  const { watch } = useFormReturn;
  const locale = useLocale();
  const { replace, push, query: queryObj } = useRouter();
  const t = useTranslations('Public');
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

  const query = watch('query');

  useEffect(() => {
    if (query) {
      push(
        {
          pathname: `/search`,
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
          pathname: `/search`,
          query: {
            ...queryObj,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [query]);

  useEffect(() => {
    setHeroImages(
      Array.from({ length: 5 }, () => ({
        image: faker.image.abstract(),
      }))
    );
    setImageAdvertisment(faker.image.abstract());
  }, []);
  return (
    <div className="-mt-8 mb-44">
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
            className="hidden col-span-2 md:block"
            {...useFormReturn}
          />
          {events?.data?.items?.length == 0 && events?.isLoading == false ? (
            <div className="col-span-6 space-y-10 md:col-span-4">
              <div className="flex flex-col gap-2">
                <Title level="h5">
                  {t('commons.search_no_results', {
                    query,
                  })}
                </Title>
                <p>{t('commons.check_words')}</p>
                <hr className="border-gray-400" />
              </div>

              <ListCardEvent
                className="col-span-6 md:col-span-4"
                loading={events?.isLoading}
                layout="swiper"
                setCurrentPage={() => {}}
                setPageSize={() => {}}
                totalDocs={10}
                title={t('commons.recommended_events')}
                items={events?.data?.item?.map((item) => ({
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
          ) : (
            <ListCardEvent
              controls
              className="col-span-6 md:col-span-4"
              loading={events?.isLoading}
              layout="swiper"
              setCurrentPage={() => {}}
              setPageSize={() => {}}
              totalDocs={10}
              title={
                query
                  ? t('commons.results', {
                      length: events.data.length,
                      query,
                    })
                  : t('commons.recommended_events')
              }
              items={events?.data?.item?.map((item) => ({
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
          )}
        </div>

        <CardAdvertisment size="large" image={imageAdvertisment} />
      </div>
    </div>
  );
};

Search.Layout = MainLayout;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Search;
