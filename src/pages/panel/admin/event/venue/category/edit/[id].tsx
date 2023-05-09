/** @format */
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useLocale, useTranslations } from "next-intl";
import axios from '@/lib/axios';
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { HeadingSelect } from '@/components/headers/admin/headingSelect';
// Forms
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomSubmit } from '@/components/forms';
import { EventInputLang, InputLang } from '@/components/forms/lang';
import {  interfaceEventVenueCategory } from '@/interfaces/event';
import { useUpdateEventVenueCategory,useReadEventVenueCategory} from '@/hooks/event/event_venue_category';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

const EventCreateVenueCategory = ({dataInit}) => {
    console.log('valor inicial',dataInit)
    const t = useTranslations("Panel_SideBar");
    const locale = useLocale();
    const{push,query,locales}=useRouter()
   
    const {mutate,isLoading,isError,isSuccess}= useUpdateEventVenueCategory()

    const onSubmit:SubmitHandler< interfaceEventVenueCategory>= (data: interfaceEventVenueCategory)=>{
        const DataForm = JSON.stringify(data) 
      
    
      mutate({updateCategory_id:`${query.id}`,eventCategory:DataForm })
    };
    const { register, handleSubmit,setValue, formState: { errors, isSubmitted }, reset, getValues } = useForm({defaultValues:dataInit});

    useEffect(()=>{
        if (isSuccess && isSubmitted ){
            toast.success('Event venue category updated :)',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'success Updated',
                        text:'This is a success message '
                    }
                
            } )
            push(`/${locale}/panel/admin/event/venue/category`)   
        }else if(isError && isSubmitted ){

            isSubmitted && reset()
            
            toast.error(' Error, No updated :(',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'error Updated',
                        text:'This is a error message' 
                    }
                } )
        }
    },[isSuccess, isError]);

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/admin' },
        { page: t('admin.event.event'), href: '/panel/admin/event/venue' },
        { page: t('admin.event.venue'), href: '/panel/admin/event/venue' },
        { page: t('admin.event.category'), href: '/panel/admin/event/venue/category' },
        { page: t('actions.update'), href: '' }
    ]
    
    
 
    const[category,setCategory]=useState( dataInit.category)

/*Lang*/
    const[lang ,setlang]=useState(dataInit.category?.map((e)=> e.lang))
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
    console.log('values',getValues())
    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <HeadingSelect breadcrumb={breadcrumb} langBread onChange={LangSelect} onAppend={onAppend}/>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9"  onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div className="py-6 grid grid-cols-12 gap-6">
                          {
                            lang.map((exp, index)=>{
                                return (<EventInputLang 
                                    key={index} 
                                    index={index} 
                                    lang={exp} 
                                    onChange={handleName}
                                    num={category?.length}
                                    onClick={(e)=>onDelete(e, exp,index)} 
                                    category={category}/>)
                            })
                            }

                        </div>
                        <ToastContainer/>
                        <div className="divide-y divide-gray-200">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel onClick={()=>push(`/${locale}/panel/admin/event/venue/category`)}/>
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
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ locale,params }: GetStaticPropsContext) {

    const { data } = await axios.get(`/events/venues/categories/${params.id}`);
    delete data.created_at
    delete data.status
    delete data.updated_at
    delete data._id
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
            dataInit:data
        },
    };
}
