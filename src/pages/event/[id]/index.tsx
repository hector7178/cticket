import { getEvents, readEvent } from '@/api/event/event';
import {
  getEventsCategories,
  readEventCategory,
} from '@/api/event/event_category';
import { readEventSupplier } from '@/api/event/event_supplier';
import MainLayout from '@/components/layout/main';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import ListCardEventRecommendation from '@/components/main/commons/ListCardEventRecommendation';
import CardEventDetails from '@/components/main/event/CardEventDetails';
import CardEventLocation from '@/components/main/event/CardEventLocation';
import SidebarEvent from '@/components/main/event/SidebarEvent';
import { EventCategory, Event } from '@/interfaces/event';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const EventDetailed = () => {
  const useFormReturn = useForm();
  const t = useTranslations('Public');
  const { query } = useRouter();
  const events = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
  const event = useQuery({
    queryKey: ['event'],
    queryFn: async () => await readEvent(query?.id as any),
    enabled: Boolean(query?.id),
  });
  const category = useQuery({
    queryKey: ['category'],
    queryFn: async () => await readEventCategory(event?.data?.category_id.id),
    enabled: Boolean(event?.data?.category_id.id),
  });
  const eventSupplier = useQuery({
    queryKey: ['eventSupplier'],
    queryFn: async () => readEventSupplier(event?.data?.supplier_id.id),
    enabled: Boolean(event?.data?.supplier_id.id),
  });
  {
    /**
     *  TODO: Event interface, category_id is an object no a string
     *  TODO: fetch event venues
     *  TODO: no start and end Dats and start and end Times found
     */
  }

  const locale = useLocale();
  const info = event?.data?.info.content.find((obj) => obj.lang == locale);
  return (
    <div className="section-container space-y-16 mt-16 mb-44">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
        {/** TODO: event does not have `location` attribute or similar */}
        <CardEventDetails
          className="flex-1"
          details={
            event?.data?.content?.find((obj) => obj.lang == locale)?.description
          }
          access={info?.access_limit}
          general={info?.general}
          observations={info?.observations}
          restrictions={info?.restrictions}
          services={info?.services}
          id={event?.data?._id}
          image="https://loremflickr.com/640/480/cats"
        />
        <SidebarEvent
          className="h-max"
          category={
            category?.data?.content?.find((obj) => obj.lang == locale)?.name
          }
          color={category?.data?.color}
          cost={300}
          startDate={new Date()}
          endDate={new Date()}
          startTime="1:00"
          endTime="12:00"
          id={event?.data?._id}
          isLoggedIn
          location="Location"
          supplier={eventSupplier?.data?.name}
          name={event?.data?.content?.find((obj) => obj.lang == locale)?.name}
          willAttend
        />
      </div>

      {/** TODO: tags does not have `lang` attribute */}
      <CardEventLocation
        location="Location"
        origin={{
          lat: -2.18331,
          lng: -79.8833,
        }}
        tags={event?.data?.tags?.map((obj) => obj.tag)}
      />
      {/** TODO: Event type does not have `created_at` */}
      <ListCardEvent
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
      {/* <ListCardEventRecommendation
        items={events?.data?.items?.map((item) => ({
          category_id: item.category_id.id,
          image: 'https://loremflickr.com/640/480/cats',
          location: 'Location',
          name: item.content.find((obj) => obj.lang == locale)?.name,
          id: item._id,
        }))}
        setCurrentPage={() => {}}
        setPageSize={() => {}}
        totalDocs={10}
      /> */}
    </div>
  );
};

EventDetailed.Layout = MainLayout;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default EventDetailed;
