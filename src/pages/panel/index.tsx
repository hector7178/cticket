/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable, TopEvents } from '@/components/admin/tables';
import { columnsUserDashboard } from '@/components/admin/tables/columns/columnsUserDashboard';
import { columnsTicketDashboard } from '@/components/admin/tables/columns/columnsTicketDashboard';
import { columnsTicketPhaseDashboard } from '@/components/admin/tables/columns/columnsTicketPhaseDashboard';
// Components
import { Heading } from '@/components/headers/admin/heading';

const Panel = () => {
    const ts = useTranslations("Panel_SideBar");
    const tb = useTranslations("btn");

    const breadcrumb = [
        { page: ts('dashboard'), href: '/panel/pos' },
    ]

    const data = useMemo(() => [
        { id: '1', event: 'test', event_date: '2023-02-02', limit_date: '2023-02-02', pending: '$1200', status: true },
        { id: '2', event: 'test2', event_date: '2023-02-02', limit_date: '2023-02-02', pending: '$1200', status: false },
    ], []);
    const columns = columnsUserDashboard();

    const dataT = useMemo(() => [
        { id: '1', section: 'test', amount: 200, available: 100, sold: 100, attendance: 90, earns: '$1200' },
        { id: '2', section: 'test2', amount: 200, available: 100, sold: 100, attendance: 90, earns: '$1200' },
    ], []);
    const columnsT = columnsTicketDashboard();

    const dataTP = useMemo(() => [
        { id: '1', phase: 'test', start_at: '2023-02-02', end_at: '2023-02-02', available: 100, sold: 100, earns: '$1200' },
        { id: '2', phase: 'test2', start_at: '2023-02-02', end_at: '2023-02-02', available: 100, sold: 100, earns: '$1200' },
    ], []);
    const columnsTP = columnsTicketPhaseDashboard();

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className="min-w-full divide-y divide-gray-300">
                                        <BasicTable columns={columns} defaultData={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className="min-w-full divide-y divide-gray-300">
                                        <BasicTable columns={columnsT} defaultData={dataT} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className="min-w-full divide-y divide-gray-300">
                                        <BasicTable columns={columnsTP} defaultData={dataTP} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className="min-w-full divide-y divide-gray-300">
                                        <TopEvents />
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

Panel.Layout = AdminLayout;
export default Panel;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
