/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable } from '@/components/admin/tables';
import { columnsUserReview } from '@/components/admin/tables/columns/columnsUserReview';
// Components
import { Heading } from '@/components/headers/admin/heading';
// Import Interface
import { Event as EventInterface } from '@/interfaces/event';

const AdminUserReview = () => {
    const ts = useTranslations("Panel_SideBar");

    const breadcrumb = [
        { page: ts('admin.admin'), href: '/panel/admin' },
        { page: ts('admin.review'), href: '' },
        { page: ts('admin.user'), href: '' }
    ]

    const data = useMemo(() => [
        { id: '1', name: 'José Alfredo Demostenez', email: "jose.alfredo.demo@gmail.com", requested: "2022-03-08", created: "2022-03-08" },
        { id: '2', name: 'Mariano Figueroa', email: "mariano.figueroa@hotmail.com", requested: "2022-03-08", created: "2022-03-09" },
    ], []);
    const columns = columnsUserReview();

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

AdminUserReview.Layout = AdminLayout;
export default AdminUserReview;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
