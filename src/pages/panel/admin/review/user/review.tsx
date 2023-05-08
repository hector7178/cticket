/** @format */
import { useState } from 'react';
import { GetStaticPropsContext } from "next";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { Switch } from '@headlessui/react'
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from "@/components/headers/admin/heading";
import { CustomCancel, CustomLabel, CustomSubmit } from "@/components/forms";
import { CurrentColor, FormStyles, classNames } from "@/helpers";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }, { color: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'color',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
];

const AdminSetting = () => {
    const [acceptEnabled, setAcceptEnabled] = useState(true)
    const [content, setContent] = useState('');

    const ts = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");

    const currentColor = CurrentColor();
    const breadcrumb = [
        { page: ts('admin.admin'), href: '/panel/admin' },
        { page: ts('admin.review'), href: '/panel/admin/review/user' },
        { page: ts('admin.user'), href: '/panel/admin/review/user' },
        { page: ts('admin.review'), href: '' },
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
                        <div className="pt-3 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6">
                                <p><span className='text-customGray'>{tc('field_name')}:</span> Arturo Martínez</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <p><span className='text-customGray'>{tc('field_address')}:</span> Jardínez de la patría Num. 24, Villas del Carmen, Zacatecas, Zac, Mexico.</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <p><span className='text-customGray'>{tc('field_email')}:</span> unemaildeprueba@z.com</p>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <p><span className='text-customGray'>{tc('field_requested')}:</span> 20/10/1986</p>
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                <div className='text-center'>
                                    <span className='text-customGray'>{tc('field_front_id')}</span>
                                    <div className='flex justify-center'>
                                        <div className='relative w-60 h-48'>
                                            <Image src="/images/events/event/prueba01.webp" alt="" className="object-fill" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                <div className='text-center'>
                                    <span className='text-customGray'>{tc('field_back_id')}</span>
                                    <div className='flex justify-center'>
                                        <div className='relative w-60 h-48'>
                                            <Image src="/images/events/event/prueba01.webp" alt="" className="object-fill" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-4">
                                <div className='text-center'>
                                    <span className='text-customGray'>{tc('field_selfie')}</span>
                                    <div className='flex justify-center'>
                                        <div className='relative w-60 h-48'>
                                            <Image src="/images/events/event/prueba01.webp" alt="" className="object-fill" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <div className='flex flex-1 justify-start py-2 text-customForm'>
                                    <div className='w-auto pr-2'>{tc('field_accept')}</div>
                                    <div>
                                        <Switch
                                            checked={acceptEnabled}
                                            onChange={setAcceptEnabled}
                                            className={classNames(
                                                acceptEnabled ? `bg-${currentColor}` : 'bg-gray-300',
                                                `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:${currentColor} focus:ring-offset-2 sm:ml-auto`
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    acceptEnabled ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <CustomLabel field='comments' name={tc('field_comment')} />
                                <QuillNoSSRWrapper modules={modules} formats={formats} onChange={setContent} theme="snow" className='h-40 sm:h-60' />
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

AdminSetting.Layout = AdminLayout;
export default AdminSetting;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
