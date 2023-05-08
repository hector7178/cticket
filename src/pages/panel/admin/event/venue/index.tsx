/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useLocale, useTranslations } from 'next-intl';
// Layout and Header
import AdminLayout from '@/components/layout/admin';
import { BasicTable } from '@/components/admin/tables';
import { columnsEventVenue } from '@/components/admin/tables/columns/columnsEventVenue';
// Components
import { Heading } from '@/components/headers/admin/heading';
// Import Interface
import { EventVenue as EventVenueInterface } from '@/interfaces/event';
import { useEventsVenues } from '@/hooks/event/event_venue';
import { useCategories } from '@/hooks/admin/event/category';
import { useEventVenueCategories } from '@/hooks/event/event_venue_category';

const EventVenue = () => {
  const ts = useTranslations('Panel_SideBar');
  const tb = useTranslations('btn');
  const locale = useLocale();
  const eventsVenues = useEventsVenues();
  const categoriesVenues = useEventVenueCategories();
  const breadcrumb = [
    { page: ts('admin.admin'), href: '/panel/admin' },
    { page: ts('admin.event.event'), href: '' },
    { page: ts('admin.event.venue'), href: '' },
  ];
  const buttonBread = {
    text: tb('add_event_venue'),
    href: '/panel/admin/event/venue/create',
  };

  const data = useMemo(
    () => [
      {
        id: '1',
        name: 'Estadio Carlos',
        category: 'Stadium',
        city: 'Zacatecas',
        state: 'Zacatecas',
        country: 'México',
        created: '2023-02-02',
        status: true,
      },
      {
        id: '2',
        name: 'Gimnacio Marcelino Gonzáles',
        category: 'Gimnacio',
        city: 'Zacatecas',
        state: 'Zacatecas',
        country: 'México',
        created: '2023-03-02',
        status: true,
      },
    ],
    []
  );
  const columns = columnsEventVenue();

  return (
    <>
      {/* Breadcrumb section */}
      <div>
        <Heading breadcrumb={breadcrumb} buttonBread={buttonBread} />
      </div>
      <div className="flex flex-1 pt-6">
        <div className="w-screen min-h-0 overflow-hidden">
          <div className="flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <div className="min-w-full divide-y divide-gray-300">
                    <BasicTable
                      columns={columns}
                      defaultData={eventsVenues?.data?.map((item) => ({
                        id: item._id,
                        name: item.name,
                        category:
                          categoriesVenues.data
                            ?.find((obj) => obj._id == item.category_id.id)
                            .category.find((obj) => obj.lang == locale).name ||
                          categoriesVenues.data
                            ?.find((obj) => obj._id == item.category_id.id)
                            .category.find((obj) => obj.lang == 'es').name,
                        city: item.address.city,
                        state: item.address.state.long_name,
                        country: item.address.country.long_name,
                        created: item.created_at,
                        status: item.status,
                      }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EventVenue.Layout = AdminLayout;
export default EventVenue;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}
