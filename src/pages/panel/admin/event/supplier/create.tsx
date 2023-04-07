/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { SketchPicker } from 'react-color'
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import { FormStyles } from '@/helpers';
import { LinkIcon } from '@heroicons/react/24/solid';

const EventCreateSuplier = () => {
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/supplier' },
        { page: t('admin.event.supplier'), href: '/panel/admin/event/supplier' },
        { page: t('actions.create'), href: '' }
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
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
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
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <CustomLabel field="url" name={tc('field_url')} />
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="url"
                                        id="url"
                                        autoComplete={tc('field_url')}
                                        placeholder={tc('field_url')}
                                        className={FormStyles('input')}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <CustomLabel field="front_id" name={tc('field_color')} required />
                                <SketchPicker />
                            </div>

                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <CustomLabel field="name" name={tc('field_type')} />
                                <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    autoComplete={tc('field_name')}
                                    placeholder={tc('field_name')}
                                    className={FormStyles('input')}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <CustomLabel field="data_url" name={tc('field_data_url')} />
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="data_url"
                                        id="data_url"
                                        autoComplete={tc('field_data_url')}
                                        placeholder={tc('field_data_url')}
                                        className={FormStyles('input')}
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <CustomLabel field="key" name={tc('field_key')} />
                                <input
                                    type="text"
                                    name="key"
                                    id="key"
                                    autoComplete={tc('field_key')}
                                    placeholder={tc('field_key')}
                                    className={FormStyles('input')}
                                />
                            </div>
                        </div>

                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
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

EventCreateSuplier.Layout = AdminLayout;
export default EventCreateSuplier;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
