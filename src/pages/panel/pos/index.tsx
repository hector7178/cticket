/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable } from '@/components/admin/tables';
import { columnsPOS } from '@/components/admin/tables/columns/columnsPOS';
// Components
import { Heading } from '@/components/headers/admin/heading';

const POS = () => {
    const ts = useTranslations("Panel_SideBar");
    const tb = useTranslations("btn");

    const breadcrumb = [
        { page: ts('dashboard'), href: '/panel/pos' },
    ]

    const data = useMemo(() => [
        { id: '1', event: 'test', type_sale: 'Cash', delivery: 'Ticket', amount: 2, price: '$1200', sell_date: '2023-02-02' },
        { id: '2', event: 'test2', type_sale: 'Card', delivery: 'Digital', amount: 4, price: '$1200', sell_date: '2023-02-02' },
    ], []);
    const columns = columnsPOS();

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
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

POS.Layout = AdminLayout;
export default POS;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
