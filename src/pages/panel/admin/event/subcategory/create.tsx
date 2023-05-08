/** @format */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from "next";
import { useLocale, useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { useForm, SubmitHandler} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import { CurrentColor, FormStyles } from '@/helpers';
import { EventInputLang, InputLang } from '@/components/forms/lang';
import { EventSubcategory } from '@/interfaces/event';
import { useCategories} from '@/hooks/event/event_category';

import { useCreateEventSubcategory} from '@/hooks/event/event_subcategory';
import { HeadingSelect } from '@/components/headers/admin/headingSelect';
import { ToastContainer, toast } from 'react-toastify';




const EventCreateSubcategory = () => {

     const YupSchema= yup.object().shape({
        subcategory:yup.array().of(
            yup.object().shape({
                lang:yup.string().required('Lang is required'),
                name:yup.string().min(3,'Name required').required('Name is Required')
            }),
        ),
        category_id:yup.string().required('Category is Required')

    })
    const {data}=useCategories();
    const{ mutate,isLoading,isError,isSuccess}=useCreateEventSubcategory()
    const { locales,push } = useRouter();
    const dataColor= CurrentColor();
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");
    const locale = useLocale();
    const { register, handleSubmit,setValue, formState: { errors }, reset, getValues } = useForm<EventSubcategory>({resolver:yupResolver(YupSchema)});
    useEffect(()=>{
        if (isSuccess){
            toast.success('Event sub category created :)',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'success Updated',
                        text:'This is a success message '
                    }
                
            } )
            push(`/${locale}/panel/admin/event/subcategory`)   
        }else if(isError){
            toast.error(' Error, No created:(',{
            position:toast.POSITION.TOP_RIGHT,
            data:{
                tittle:'error Updated',
                text:'This is a error message  ' 
            }
        } )
    }},[isSuccess, isError])
    

    let dataTableE=[]
    data?.map((item) => {
        let dataIn = {
            id:item._id,
            category: item.category.find((obj) => obj.lang == locale)?.name,
            
        }
        dataTableE.push(dataIn)  
    })

    const handleSelected=(e)=>{
          const id= dataTableE.find((pre)=> pre.category===e.target.value)?.id
          setValue('category_id', id )
    }

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/subcategory' },
        { page: t('admin.event.subcategory'), href: '/panel/admin/event/subcategory' },
        { page: t('actions.create'), href: '' }
        
    ]
    
    const onSubmit:SubmitHandler<EventSubcategory >= (data:EventSubcategory)=>{
       mutate(data)
    };
 
  
    const[category,setCategory]=useState( [{lang:'en', name:''}])

/*Lang*/
    const[lang ,setlang]=useState(['en'])
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
        setValue('subcategory', category.filter((e)=>e.lang!==exp))
        
        }
        
    }
/*Name*/
    const handleName:React.ChangeEventHandler<HTMLInputElement> = (e:any)=>{
    const Name=e.target.value;
    const id=e.target.id;
    if(category.find((e)=>e.lang===id)){
        const arr=category.slice()
        arr.find((e)=>e.lang===id).name=Name
        setValue('subcategory', arr)
        
    }else{
        setCategory([...category, {lang:id,name:Name}])
        setValue('subcategory', category)
    }
    
} 
   
console.log('errors', errors)
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
                            <div className="col-span-12 sm:col-span-3 md:col-span-3 lg:col-span-3">
                                <span className='text-[#e74c3c]'>{errors?.category_id?.message}</span>
                                <CustomLabel field="category" name={tc('field_category')} required />
                                <select
                                    id="category"
                                    className={FormStyles('select')}
                                    defaultValue={''}
                                    onChange={handleSelected}
                                >
                                    <option value=''>{tc('field_select_category')}</option>
                                    {dataTableE.map((e,i)=>{
                                    return(<option key={i}>{e.category}</option>)})}
                                </select>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex flex-col gap-4">
                            <div >
                                {errors?.subcategory?.map((e,i)=>{
                                            return (<span key={i} className='text-[#e74c3c] w-full flex justify-end'>{e.name.message}</span>)
                                })}
                            </div>
                             {
                            lang.map((exp, index)=>{
                                return (<EventInputLang 
                                    key={index} 
                                    index={index} 
                                    lang={exp} 
                                    onChange={handleName}
                                    num={category?.length}
                                    onClick={(e)=>onDelete(e, exp,index)} 
                                    category={category}
                                    />)
                            })
                            }
                            </div>
                        </div>
                        <ToastContainer/>
                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel onClick={()=>push(`/${locale}/panel/admin/event/subcategory`)} />
                                <CustomSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

EventCreateSubcategory.Layout = AdminLayout;
export default EventCreateSubcategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
