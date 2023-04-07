/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable } from '@/components/admin/tables';
import { columnsCategory } from '@/components/admin/tables/columns/columnsCategory';
// Components
import { Heading } from '@/components/headers/admin/heading';
// Import Interface
import { EventVenueCategory as EventVenueCategoryInterface } from '@/interfaces/event';

const EventVenueCategory = () => {
    const t = useTranslations("table_columns");
    const ts = useTranslations("Panel_SideBar");
    const tb = useTranslations("btn");

    const breadcrumb = [
        { page: ts('admin.admin'), href: '/panel/admin' },
        { page: ts('admin.event.event'), href: '/panel/admin/venue' },
        { page: ts('admin.event.venue'), href: '/panel/admin/venue' },
        { page: ts('admin.event.category'), href: '' }
    ]
    const buttonBread =  { text: tb('add_event_venue_category'), href: '/panel/admin/event/venue/category/create' }

    const data = useMemo(() => [
        { id: '1', category: 'Stadium', status: true },
        { id: '2', category: 'Teather', status: true },
    ], []);
    const columns = columnsCategory(t('admin.event.venue.category'));
   
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
                                        <BasicTable columns={columns} defaultData={data} />
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

EventVenueCategory.Layout = AdminLayout;
export default EventVenueCategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}