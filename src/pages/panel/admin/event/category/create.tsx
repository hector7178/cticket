/** @format */
import React, { useState, useRef,useEffect, useCallback} from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations,useLocale } from "next-intl";
import { SketchPicker } from 'react-color'
// Helpers
import { FormStyles } from "@/helpers";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { HeadingSelect } from '@/components/headers/admin/headingSelect';
// Forms
import { useForm, SubmitHandler } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import {EventInputLang } from '@/components/forms/lang';
import { EventCategory } from '@/interfaces/event';
//icon
import {ArrowPathIcon} from '@heroicons/react/24/outline';
/*Hooks */
import {useCreateEventCategory, useCategories} from '@/hooks/event/event_category';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import { ImageURL } from '@/helpers/imageURL';
import { useRouter } from 'next/router';
import { min } from 'date-fns';


const EventCreateCategory = () => {
    const {locale,push, locales}=useRouter()
    const t = useTranslations("Panel_SideBar");
    const tf = useTranslations("Common_Forms");
    const tp = useTranslations('Panel_Profile_Request');
    const tc = useTranslations("Common_Forms");

    const YupSchema= yup.object().shape({
        category:yup.array().of(
            yup.object().shape({
                lang:yup.string().required('lang required'),
                name:yup.string().min(2,'name required').required('Name is Required')
            })
        ),
        color:yup.string().required('Color is Required'),
        picture:yup.string().required('Foto is Required')

    })
    

const { register, handleSubmit,setValue, formState: { errors, isSubmitted }, reset,getValues } = useForm<EventCategory>({resolver:yupResolver(YupSchema)});
const {mutate, isLoading, isError, isSuccess}= useCreateEventCategory()


useEffect(()=>{
if (isSuccess && isSubmitted){
    toast.success('Event category created :)',{
            position:toast.POSITION.TOP_RIGHT,
            data:{
                tittle:'success Updated',
                text:'This is a success message '
            }
         
    } )
    push(`/${locale}/panel/admin/event/category`)   
}else if(isError && isSubmitted){
    reset();
    toast.error(' Error, No created:(',{
            position:toast.POSITION.TOP_RIGHT,
            data:{
                tittle:'error Updated',
                text:'This is a error message  ' 
            }
        } )
}

},[isSuccess,isError])

    //drop file
    const [upload, setUpload ]=useState('');
    const[url,setUrl]=useState('')
    const [fileUpload,SetFileUpload]=useState()
   

    const onDrop=useCallback((acceptedFile)=>{
    const file= acceptedFile[0]
        setUpload(file.name)
        SetFileUpload(file)
        setValue('picture', file.name)
        const link= URL.createObjectURL(file)
        setUrl(link)
      
    },[]) 
    
    const {getRootProps,getInputProps,isDragActive, acceptedFiles}=useDropzone({onDrop})
   

//input file config
    
    const handleSelectFile=(e)=>{
            const file=e.target.files[0]
            setUpload(file.name)
            SetFileUpload(file)
            setValue('picture', file.name)
            const link= URL.createObjectURL(file)
            setUrl(link)
    }
    


    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/category' },
        { page: t('admin.event.category'), href: '/panel/admin/event/category' },
        { page: t('actions.create'), href: '' }
    ];
    

    


/*input color config*/
    const [initColor, setInitColor]=useState<string>('#ffffff');
    const  onChangeColor=(color:any)=>{ 
        setInitColor(color.hex)
        setValue('color', initColor )
    }

/*submit form*/ 
    const onSubmit:SubmitHandler<EventCategory>= (data:EventCategory)=>{
        const form=new FormData
        form.append("event_category",JSON.stringify(data))
        form.append("picture",fileUpload)
           
        
       
      mutate(form)
    };
   
    
    
    const[category,setCategory]=useState( [{lang:'en', name:''}])

/*Lang*/
    const[lang ,setlang]=useState(['en'])
    const[langRest ,setlangRest]=useState(locales)
    const[SelectValue ,setSelectValue]=useState('en')
   
    const LangSelect:React.ChangeEventHandler<HTMLSelectElement> = (e:any)=>{
    const Lang=e.target.value;
    setSelectValue(Lang)
    }

    const onAppend=()=>{
        if(!(lang.includes(SelectValue))){
        setlang([...lang, SelectValue])
        setCategory([...category,{lang:SelectValue, name:''}])
        }
    }
    const onDelete=(e, exp, index)=>{
        if(category.length >= 2 ){
        setlang((e)=>e.filter((f)=>f !== exp))
        setCategory(category.filter((e)=>e.lang!==exp))
        setValue('category', category.filter((e)=>e.lang!==exp))
        
        }
        
    }
/*Name*/
    const handleName:React.ChangeEventHandler<HTMLInputElement> = (e:any)=>{
    const Name=e.target.value;
    const id=e.target.id;
    if(category.find((e)=>e.lang===id)){
        const arr=category.slice()
        arr.find((e)=>e.lang===id).name=Name
        setValue('category', arr)
        
    }else{
        setCategory([...category, {lang:id,name:Name}])
        setValue('category', category)
    }
    
} 


    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <HeadingSelect breadcrumb={breadcrumb} langBread onChange={LangSelect} onAppend={onAppend}/>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9" onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <span className='text-[#e74c3c]'>{errors?.picture?.message}</span>
                                <CustomLabel field="icon-upload" name={tc('field_icon')} required />
                                <div {...getRootProps()} className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        {upload===''?<svg
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
                                        </svg>:
                                        <Image src={url} alt='Event image' className="mx-auto" width={70} height={60}></Image>}
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label
                                                htmlFor="picture"
                                                className="relative cursor-pointer relative z-10 rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                             { upload===''?  <span  >{tc('field_upload_file')}</span>:<span className='flex flex-row gap-2'>{ upload}<ArrowPathIcon width='1.5rem' height='1.5rem'/></span>}
                                             <input  {...getInputProps()}  id="picture" type="file" onChange={handleSelectFile} className='opacity-0 absolute' accept="image/jpeg, image/png, .gif" size={10000000}/>
                                            
                                            </label>
                                            
                                            { upload===''? <p className="pl-1">{tp('text_drag_n_drop')}</p>: null}
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <span className='text-[#e74c3c]'>{errors?.color?.message}</span>
                                <CustomLabel field="front_id" name={tc('field_color')} required />
                                <SketchPicker 
                                onChange={onChangeColor}
                                color={initColor}
                                />
                            </div>
                            <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8 flex-col">
                                {errors?.category?.map((e, i)=>{
                                            return (<span key={i} className='text-[#e74c3c]'>{e.name.message}</span>)
                                })}
                            </div>
                            {
                            lang.map((exp, index)=>{
                                return (
                                 <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex-col">
                                    
                                    <EventInputLang
                                    key={index} 
                                    index={index} 
                                    lang={exp} 
                                    onChange={handleName}
                                    num={category?.length}
                                    onClick={(e)=>onDelete(e, exp,index)} 
                                    category={category}
                                    /></div>)
                            
                            })
                            }
                        </div>
                        <ToastContainer/>
                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel onClick={()=>push(`/${locale}/panel/admin/event/category`)}/>
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
