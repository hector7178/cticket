/** @format */
import { useState, useRef} from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { SketchPicker } from 'react-color'
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import { InputLang } from '@/components/forms/lang';
import { EventCategory } from '@/interfaces/event';

const EventCreateCategory = () => {
    const t = useTranslations("Panel_SideBar");
    const tp = useTranslations('Panel_Profile_Request');
    const tc = useTranslations("Common_Forms");

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/category' },
        { page: t('admin.event.category'), href: '/panel/admin/event/category' },
        { page: t('actions.create'), href: '' }
    ];
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm<EventCategory >({});

/*input lang*/
const [langSelected, setLangSelected ]=useState<string>(null);
const langRef =useRef();
 const changeLang=()=>{
    console.log(langRef.current)
    setLangSelected('selected')
    console.log(langSelected)
 }

/*input file config*/ 
    const fileRef=useRef();
    const inputFile=()=>{
        fileRef.current.click();

    }
  
    const handleFile=(event)=>{
        const file=event.target.files[0];
 console.log(file)
    }
  

/*input color config*/
    const [initColor, setInitColor]=useState<string>('#ffffff');
    const  onChangeColor=(color:any):void=>{ 
        setInitColor(color.hex)
    }

/*submit form*/ 
    const onSubmit:SubmitHandler<EventCategory >= (data: any)=>console.log(data);
    const submit=(e:SubmitHandler<EventCategory >)=>
    {handleSubmit((e)=>{

        console.log('enviado'+e)
    });
    e.preventDefault();
    }


    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} langBread ref={langRef}/>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" onSubmit={submit} method="POST">
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <CustomLabel field="icon-upload" name={tc('field_icon')} required />
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
                                                ref={fileRef}
                                                onClick={inputFile}
                                                htmlFor="picture"
                                                className="relative cursor-pointer relative z-10 rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span >{tc('field_upload_file')}</span>
                                                <input  onChange={handleFile} id="icon-upload" {...register('picture')} type="file"  hidden/>
                                            </label>
                                            <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <CustomLabel field="front_id" name={tc('field_color')} required />
                                <SketchPicker 
                                {...register('color')}
                                onChange={onChangeColor}
                                color={initColor}
                                />
                            </div>


                            <InputLang lang="en" {...register('category')}/>
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

EventCreateCategory.Layout = AdminLayout;
export default EventCreateCategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
