/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Switch } from '@headlessui/react'
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from "@/components/headers/admin/heading";
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomLabel, CustomCancel, CustomSubmit } from '@/components/forms';
import { FormStyles } from '@/helpers';
// Components
import { CustomTag } from '@/components/commons/customTag';

const ProfileFollow = () => {
    const tc = useTranslations("Common_Forms");
    const ts = useTranslations("Panel_SideBar");

    const breadcrumb = [
        { page: ts('user'), href: '/panel/profile' },
        { page: ts('profile.config.config'), href: '/panel/profile/config' },
        { page: ts('profile.config.follow'), href: '' }
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            {/* Admin section */}
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="lg:col-span-9" action="#" method="POST">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field="search" name={tc('field_search')} />
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    autoComplete={tc('auto_search')}
                                    placeholder={tc('field_search')}
                                    className={FormStyles('input')}
                                />
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-12">
                                <CustomLabel field="tags" name={tc('field_tags')} />
                                <CustomTag name="Iron Maiden" />
                            </div>
                        </div>
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

ProfileFollow.Layout = AdminLayout;
export default ProfileFollow;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
