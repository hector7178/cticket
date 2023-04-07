/** @format */
import { useState } from 'react';
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
// Icons
import { PlusIcon } from '@heroicons/react/20/solid';
import { NameDescLang } from '@/components/forms/lang';

const EventCreate = () => {
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");
    const tp = useTranslations('Panel_Profile_Request');

    const breadcrumb = [
        { page: t('event.event'), href: '' },
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
                    <form className="lg:col-span-9" action="#" method="POST">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                                <CustomLabel field="supplier" name={tc('field_supplier')} />
                                <select
                                    id="supplier"
                                    name="supplier"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_select_supplier')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="special_category" name={tc('field_special_category')} required />
                                <select
                                    id="special_category"
                                    name="special_category"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_select_special_category')}</option>
                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="category" name={tc('field_category')} required />
                                <select
                                    id="category"
                                    name="category"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_select_category')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="subcategory" name={tc('field_subcategory')} required />
                                <select
                                    id="subcategory"
                                    name="subcategory"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_select_subcategory')}</option>
                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                <CustomLabel field="subsubcategory" name={tc('field_subsubcategory')} required />
                                <select
                                    id="subsubcategory"
                                    name="subsubcategory"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                >
                                    <option value=''>{tc('field_select_subsubcategory')}</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <CustomLabel field="event_image_web-upload" name={tc('field_event_image_web')} required />
                                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
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
                                                htmlFor="event_image_web-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>{tc('field_upload_file')}</span>
                                                <input id="event_image_web-upload" name="event_image_web-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <CustomLabel field="event_image_app-upload" name={tc('field_event_image_app')} required />
                                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
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
                                                htmlFor="event_image_app-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>{tc('field_upload_file')}</span>
                                                <input id="event_image_app-upload" name="event_image_app-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <CustomLabel field="event_image_flyer-upload" name={tc('field_event_image_flyer')} required />
                                <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
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
                                                htmlFor="event_image_flyer-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>{tc('field_upload_file')}</span>
                                                <input id="event_image_flyer-upload" name="event_image_flyer-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="tags" name={tc('field_tags')} />
                                <input
                                    type="input"
                                    name="tags"
                                    id="tags"
                                    autoComplete={tc('auto_tags')}
                                    placeholder={tc('field_tags')}
                                    className={FormStyles('input')}
                                />
                                <button>
                                    <PlusIcon />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <NameDescLang lang="es" />
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

EventCreate.Layout = AdminLayout;
export default EventCreate;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
