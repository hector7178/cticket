/** @format */
import { useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
import { BasicTable } from '@/components/admin/tables';
import { ColumnsEventCreate } from '@/components/admin/tables/columns/columnsEventCreate';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { FormStyles } from '@/helpers';

const EventAddress = () => {
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.address'), href: '' }
    ]

    const data = useMemo(() => [
        { id: '1', date: '2023-02-02', initial_hour:'16:00', final_hour:'18:00', low_cost:'400', regular_cost:'400', hight_cost:'400', url: 'https://url.com', streaming: 'https://url.com', status: true },
        { id: '2', date: '2023-02-02', initial_hour:'20:00', final_hour:'22:00', low_cost:'400', regular_cost:'400', hight_cost:'400', url: 'https://url.com', streaming: 'https://url.com', status: true  },
    ], []);
    const columns = ColumnsEventCreate();

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" action="#" method="POST">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="flex items-center pl-2">
                                <input
                                    name="date_type"
                                    type="radio"
                                    defaultChecked={true}
                                    className={FormStyles('radio')}
                                />
                                <span className='ml-3'>
                                    <CustomLabel field="range" name={tc('field_defined')} />
                                </span>
                            </div>
                            <div className="flex items-center pl-20 md:pl-10 lg:pl-2">
                                <input
                                    name="date_type"
                                    type="radio"
                                    defaultChecked={false}
                                    className={FormStyles('radio')}
                                />
                                <span className='ml-3'>
                                    <CustomLabel field="range" name={tc('field_range')} />
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="initial_date" name={tc('field_initial_date')} required />
                                <input
                                    type="text"
                                    name="initial_date"
                                    id="initial_date"
                                    autoComplete={tc('field_initial_date')}
                                    placeholder={tc('field_initial_date')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="final_date" name={tc('field_final_date')} />
                                <input
                                    type="text"
                                    name="final_date"
                                    id="final_date"
                                    autoComplete={tc('field_final_date')}
                                    placeholder={tc('field_final_date')}
                                    className={FormStyles('input')}
                                />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                                <BasicTable columns={columns} defaultData={data} addSchedule />
                            </div>
                        </div>

                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200 pt-6">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel />
                                <CustomSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

EventAddress.Layout = AdminLayout;
export default EventAddress;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
