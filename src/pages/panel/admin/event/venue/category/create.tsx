/** @format */
import { useEffect, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { HeadingSelect } from '@/components/headers/admin/headingSelect';
// Forms
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import { EventInputLang, InputLang } from '@/components/forms/lang';
import {  interfaceEventVenueCategory } from '@/interfaces/event';
import { useCreateEventVenueCategory} from '@/hooks/event/event_venue_category';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

const EventCreateVenueCategory = () => {
    const tc = useTranslations("Common_Forms");
    const t = useTranslations("Panel_SideBar");

    const YupSchema= yup.object().shape({
        category:yup.array().of(
            yup.object().shape({
                lang:yup.string().required( tc('Lang_required')),
                name:yup.string().min(3, tc('Min_3_caracters')).required(tc('Name_is_required'))
            })
        ).required(tc('Category_is_required')),
   })
    const{push,locale}=useRouter()
    

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/venue' },
        { page: t('admin.event.venue'), href: '/panel/admin/event/venue' },
        { page: t('admin.event.category'), href: '/panel/admin/event/venue/category' },
        { page: t('actions.create'), href: '' }
    ]
    const {mutate,isLoading,isError,isSuccess}=useCreateEventVenueCategory()
    

    const onSubmit:SubmitHandler< interfaceEventVenueCategory>=   (data)=>{
      
      const DataForm = JSON.stringify(data)
      mutate(DataForm )
    };

    const { register, handleSubmit,setValue, formState: { errors,isSubmitted, isValid }, reset, getValues} = useForm({resolver:yupResolver(YupSchema)});
  
    useEffect(()=>{
         if(!isValid && isSubmitted){
             toast.error(' Error in form :(',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'error form',
                        text:'This is a error message' 
                    }
                } )
            
        }else if (isSuccess && isSubmitted){
            toast.success('Event venue category updated :)',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'success Updated',
                        text:'This is a success message '
                    }
                
            } )
            push(`/${locale}/panel/admin/event/venue/category`)   
        }else if(isError && isSubmitted){
           

            toast.error(' Error, No updated :(',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'error Updated',
                        text:'This is a error message' 
                    }
                } )
        }
    
    },[isSuccess, isError, isSubmitted])

    
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
        setCategory(arr)
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
                    <form className="divide-y divide-gray-200 lg:col-span-9"  onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div >
                                
                        </div>
                        <div className="py-6 grid grid-cols-12 gap-6">
                             
                            {
                            category.map((exp, index)=>{
                                return (<div className="w-full col-span-4">
                                    <span  className='text-[#e74c3c] w-full flex justify-end'>{
                                    Array.isArray(errors?.category)?
                                        errors.category[index]?
                                            errors.category[index]["name"]?errors.category[index]["name"].message:null
                                        :null
                                    :null}</span>
                    
                                    <EventInputLang 
                                    key={index} 
                                    index={index} 
                                    lang={exp.lang} 
                                    onChange={handleName}
                                    num={category?.length}
                                    onClick={(e)=>onDelete(e, exp.lang,index)} 
                                    category={category}
                                    /></div>)
                            })
                            }

                        </div>
                        <ToastContainer/>
                        <div className="divide-y divide-gray-200">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel onClick={()=>push(`/${locale}/panel/admin/event/venue/category`)} />
                                <CustomSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

EventCreateVenueCategory.Layout = AdminLayout;
export default EventCreateVenueCategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}
