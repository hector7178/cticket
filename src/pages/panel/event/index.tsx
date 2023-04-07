/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable } from '@/components/admin/tables';
import { columnsEvent } from '@/components/admin/tables/columns/columnsEvent';
// Components
import { Heading } from '@/components/headers/admin/heading';
// Import Interface
import { Event as EventInterface } from '@/interfaces/event';

const Event = () => {
    const ts = useTranslations("Panel_SideBar");
    const tb = useTranslations("btn");

    const breadcrumb = [
        { page: ts('event.event'), href: '' }
    ]
    const buttonBread =  { text: tb('add_event'), href: '/panel/event/create' }

    const data = useMemo(() => [
        { id: '1', event: 'Alicia en el país de las maravillas', category: "Theater", date: "2024-01-01 14:00", visit: 100, like: 100, assisted: 100, shared: 100, status: true },
        { id: '2', event: 'Hell & Heaven - Preferente', category: "Músic-Rock/Metal", date: "2025-02-03 14:00 - 18:00", visit: 100, like: 100, assisted: 100, shared: 100, status: true },
    ], []);
    const columns = columnsEvent();

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

Event.Layout = AdminLayout;
export default Event;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
