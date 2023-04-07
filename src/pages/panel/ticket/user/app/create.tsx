/** @format */
import { useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
import { BasicTable } from '@/components/admin/tables';
import { columnsUserAppCreate } from '@/components/admin/tables/columns/columnsUserAppCreate';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomAdd, CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
// Helpers
import { FormStyles } from '@/helpers';

const TicketAppUserCreate = () => {
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('ticket.ticket'), href: '/panel/ticket' },
        { page: t('ticket.user.user'), href: '/panel/ticketuser/app' },
        { page: t('ticket.user.app'), href: '/panel/ticket/user/app' },
        { page: t('actions.create'), href: '' }
    ]

    const data = useMemo(() => [
        { id: '1', event: "Alicia en el país de las maravillas - 2022-03-08 16:00", location: "Gate A" },
        { id: '2', event: "Alicia en el país de las maravillas - 2022-03-08 20:00", location: "Gate B" },
    ], []);
    const columns = columnsUserAppCreate();

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" action="#" method="POST">
                        <div className="mt-6 flex flex-col lg:flex-row">
                            <div className="flex-grow space-y-6">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12">
                                        <CustomLabel field="email" name={tc('field_email')} />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete={tc('auto_email')}
                                            placeholder={tc('field_email')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="pass" name={tc('field_pass')} required />
                                        <input
                                            type="password"
                                            name="pass"
                                            id="pass"
                                            autoComplete={tc('auto_pass')}
                                            placeholder={tc('field_pass')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <CustomLabel field="repass" name={tc('field_repass')} />
                                        <input
                                            type="password"
                                            name="repass"
                                            id="repass"
                                            autoComplete={tc('field_repass')}
                                            placeholder={tc('field_repass')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <CustomLabel field="event" name={tc('field_event')} />
                                        <select
                                            id="event"
                                            name="event"
                                            className={FormStyles('select')}
                                            defaultValue={''}
                                        >
                                            <option value=''>{tc('field_select_event')}</option>
                                        </select>
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <CustomLabel field="location" name={tc('field_location')} />
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            autoComplete={tc('field_location')}
                                            placeholder={tc('field_location')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <div className="pt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                            <CustomAdd />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12">
                                        <BasicTable columns={columns} defaultData={data} />
                                    </div>
                                </div>
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

TicketAppUserCreate.Layout = AdminLayout;
export default TicketAppUserCreate;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
