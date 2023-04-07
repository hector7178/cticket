/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from "@/components/headers/admin/heading";
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomError, CustomCancel, CustomSubmit } from '@/components/forms';
// Components
import { CustomCategory } from '@/components/admin/profile/customCategory';

const ProfileCustom = () => {
    const t = useTranslations("Panel_Profile_Category");
    const ts = useTranslations("Panel_SideBar");

    const breadcrumb = [
        { page: ts('user'), href: '/panel/profile' },
        { page: ts('profile.config.config'), href: '/panel/profile/config' },
        { page: ts('profile.config.custom'), href: '' }
    ]

    const categories = [
        { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
        { name: "Cine", src: "/images/events/category/cine.png", selected: false },
        { name: "Danza", src: "/images/events/category/dance.png", selected: true },
        { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
        { name: "Cine", src: "/images/events/category/cine.png", selected: false },
        { name: "Danza", src: "/images/events/category/dance.png", selected: true },
        { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
        { name: "Cine", src: "/images/events/category/cine.png", selected: false },
        { name: "Danza", src: "/images/events/category/dance.png", selected: true },
        { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
        { name: "Cine", src: "/images/events/category/cine.png", selected: false },
        { name: "Danza", src: "/images/events/category/dance.png", selected: true },
    ]

    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
                        <div className='lg:col-span-9'>
                            <div>
                                <div className="grid text-stone-500 text-20 ">
                                    {t('message')}
                                </div>
                            </div>
                            <div className="py-6">
                                <div className="md:flex md:items-center md:justify-between">
                                    <div className="mt-2 grid grid-cols-2 gap-5 sm:grid-cols-5 lg:grid-cols-7">
                                        {categories.map((category) => (
                                            <CustomCategory name={category.name} srcImage={category.src} selected={category.selected} />
                                        ))}
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

ProfileCustom.Layout = AdminLayout;
export default ProfileCustom;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
