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
import { NameDescLang } from '@/components/forms/lang';

const EventCreateSpecialCategory = () => {
    const t = useTranslations("Panel_SideBar");
    const tp = useTranslations('Panel_Profile_Request');
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/event' },
        { page: t('event.event'), href: '/panel/event/special' },
        { page: t('event.special'), href: '/panel/event/special' },
        { page: t('actions.create'), href: '' }
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} langBread />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12">
                                <CustomLabel field="header-upload" name={tc('field_header')} required />
                                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 h-60">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-28 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="header-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>{tc('field_upload_file')}</span>
                                                <input id="header-upload" name="header-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <CustomLabel field="icon-upload" name={tc('field_icon')} required />
                                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 h-60">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-28 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="icon-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>{tc('field_upload_file')}</span>
                                                <input id="icon-upload" name="icon-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <div>
                                    <CustomLabel field="front_id" name={tc('field_color')} required />
                                    <SketchPicker />
                                </div>
                                <div className='py-6'>
                                    <CustomLabel field="front_id" name={tc('field_color')} required />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        placeholder="name"
                                        className={FormStyles('input')}
                                    />
                                </div>
                                <div>
                                    <CustomLabel field="front_id" name={tc('field_color')} required />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        placeholder="name"
                                        className={FormStyles('input')}
                                    />
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4">
                                <div>
                                    <CustomLabel field="searchaddress" name={tc('field_searchaddress')} />
                                    <input
                                        type="text"
                                        name="searchaddress"
                                        id="searchaddress"
                                        autoComplete={tc('auto_searchaddress')}
                                        placeholder={tc('field_searchaddress')}
                                        className={FormStyles('input')}
                                    />
                                </div>
                                <div className='py-6'>
                                    <CustomLabel field="country" name={tc('field_country')} required />
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        autoComplete={tc('auto_country')}
                                        placeholder={tc('field_country')}
                                        className={FormStyles('input')}
                                    />
                                </div>
                                <div>
                                    <CustomLabel field="state" name={tc('field_state')} required />
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        autoComplete={tc('auto_state')}
                                        placeholder={tc('field_state')}
                                        className={FormStyles('input')}
                                    />
                                </div>
                                <div className='py-6'>
                                    <CustomLabel field="city" name={tc('field_city')} required />
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete={tc('auto_city')}
                                        placeholder={tc('field_city')}
                                        className={FormStyles('input')}
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8">
                                <div className="relative isolate bg-white">
                                    <div className="flex justify-start w-screen">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.7347204632892!2d-102.54627301188026!3d22.767649335671468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824eb8de657407%3A0x1036f7d9db767840!2sJos%C3%A9%20Sergio%20B%C3%A1ez%20101%2C%20Villas%20del%20Sol%2C%2098067%20Guadalupe%2C%20Zac.!5e0!3m2!1ses-419!2smx!4v1678590382873!5m2!1ses-419!2smx" width="1200" height="310" style={{ border: 0 }} loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                            <NameDescLang lang="es" />
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

EventCreateSpecialCategory.Layout = AdminLayout;
export default EventCreateSpecialCategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
