/** @format */
import { useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
// Helpers
import { FormStyles } from '@/helpers';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

const Profile = () => {
    const ts = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: ts('event.event'), href: '/panel/event' },
        { page: ts('event.discount'), href: '/panel/event/discount' },
        { page: ts('actions.create'), href: '' }
    ]

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
                                    <div className="col-span-12 md:col-span-6">
                                        <CustomLabel field="name" name={tc('field_name')} />
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete={tc('field_name')}
                                            placeholder={tc('field_name')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
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
                                    <div className="col-span-12 md:col-span-6">
                                        <CustomLabel field="event_datetime" name={tc('field_event_datetime')} />
                                        <select
                                            id="event_datetime"
                                            name="event_datetime"
                                            className={FormStyles('select')}
                                            defaultValue={''}
                                        >
                                            <option value=''>{tc('field_select_event_datetime')}</option>
                                        </select>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <CustomLabel field="event_seatmap" name={tc('field_event_seatmap')} />
                                        <select
                                            id="event_seatmap"
                                            name="event_seatmap"
                                            className={FormStyles('select')}
                                            defaultValue={''}
                                        >
                                            <option value=''>{tc('field_select_event_seatmap')}</option>
                                        </select>
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-2">
                                        <CustomLabel field="cuopon" name={tc('field_cuopon')} />
                                        <input
                                            type="text"
                                            name="cuopon"
                                            id="cuopon"
                                            autoComplete={tc('auto_cuopon')}
                                            placeholder={tc('field_cuopon')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-2">
                                        <CustomLabel field="discount" name={tc('field_discount')} />
                                        <input
                                            type="text"
                                            name="discount"
                                            id="discount"
                                            autoComplete={tc('field_discount')}
                                            placeholder={tc('field_discount')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 md:col-span-6 lg:col-span-2">
                                        <CustomLabel field="limit" name={tc('field_limit')} />
                                        <input
                                            type="text"
                                            name="limit"
                                            id="limit"
                                            autoComplete={tc('field_limit')}
                                            placeholder={tc('field_limit')}
                                            className={FormStyles('input')}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-3">
                                        <CustomLabel field="init_at" name={tc('field_init_at')} />
                                        <div className="relative rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="init_at"
                                                id="init_at"
                                                autoComplete={tc('field_init_at')}
                                                placeholder={tc('field_init_at')}
                                                className={FormStyles('input')}
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                <CalendarDaysIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-3">
                                        <CustomLabel field="expired_at" name={tc('field_expired_at')} />
                                        <div className="relative rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="expired_at"
                                                id="expired_at"
                                                autoComplete={tc('field_expired_at')}
                                                placeholder={tc('field_expired_at')}
                                                className={FormStyles('input')}
                                            />
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                                <CalendarDaysIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                        </div>
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

Profile.Layout = AdminLayout;
export default Profile;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
