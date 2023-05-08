/** @format */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useLocale, useTranslations } from "next-intl";
import axios from '@/lib/axios';
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
import {useReadEventSubcategory, useUpdateEventSubCategory} from '@/hooks/event/event_subcategory'
import { ToastContainer, toast } from 'react-toastify';
import { HeadingSelect } from '@/components/headers/admin/headingSelect';




const EventCreateSubcategory = ({dataInit}) => {
    const {data}=useCategories()
    const {push, query } = useRouter();
    const t = useTranslations("Panel_SideBar");
    const tc = useTranslations("Common_Forms");
    const locale = useLocale();
    console.log('data', dataInit)
    const{mutate, isLoading, isError, isSuccess}=useUpdateEventSubCategory()
    const { register, handleSubmit,setValue, formState: { errors, isSubmitted }, reset,getValues } = useForm<EventSubcategory>({defaultValues:dataInit});
   
    useEffect(()=>{
        if (isSuccess && isSubmitted){
            toast.success('Event sub category updated :)',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'success Updated',
                        text:'This is a success message '
                    }
                
            } )
            push(`/${locale}/panel/admin/event/subcategory`)   
        }else if(isError && isSubmitted){
            reset();
            toast.error(' Error, No updated :(',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'error Updated',
                        text:'This is a error message' 
                    }
                } )
        }
    },[isSuccess,isError])
    
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
        { page: t('actions.update')  , href: '' }
        
    ]

  const[category,setCategory]=useState( dataInit.subcategory)

/*Lang*/
    const[lang ,setlang]=useState(dataInit.subcategory?.map((e)=> e.lang))
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
console.log('values',getValues())
 
/*submit*/  
    const onSubmit:SubmitHandler<EventSubcategory >= (data:EventSubcategory)=>{
       
      const updateData={updateSubCategory_id:`${query.id}`,eventSubCategory:JSON.stringify(data)}
      mutate(updateData)
        
    };
   
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
                                <CustomLabel field="category" name={tc('field_category')} required />
                                <select
                                    id="category"
                                    className={FormStyles('select')}
                                    onChange={handleSelected}
                                >
                                    <option >{dataTableE.find((e)=>e.id===dataInit.category_id)?.category}</option>
                                    {dataTableE.map((e, i)=>{
                                    return(<option key={i}>{e.category}</option>)})}
                                </select>
                            </div>
                            {
                            lang?.map((exp, index)=>{
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
                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel onClick={()=>push(`/${locale}/panel/admin/event/subcategory`)}/>
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
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ locale, params }: GetStaticPropsContext) {
    
    const { data } = await axios.get(`/events/subcategories/${params.id}`);
    
    delete data._id
    delete data.status
    delete data.created_at
    delete data.updated_at
    data.category_id=data.category_id.id
    
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
            dataInit:data
        },
    };
}
