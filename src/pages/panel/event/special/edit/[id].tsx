/** @format */
import { useState, useRef, useCallback, useEffect } from 'react';
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { SketchPicker } from 'react-color';
import axios from '@/lib/axios';
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { Heading } from '@/components/headers/admin/heading';
// Forms
import { FormProvider, SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomCancel, CustomLabel, CustomSubmit } from '@/components/forms';
import { FormStyles } from '@/helpers';
import { InputSpecial } from '@/components/forms/lang';
import Map from '@/components/forms/forms/map';
import {createEventSpecialCategory} from '@/interfaces/event';
import {useEventsSpecialsCategories,
useCreateEventSpecialCategory,
useReadEventSpecialCategory,
useUpdateEventSpecialCategory,
useDeleteEventSpecialCategory}  from '@/hooks/event/event_special_category';
import Dropzone from 'react-dropzone';
import Image from 'next/image';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useMe } from '@/hooks/user/user';
import { useRouter } from 'next/router';
import { ImageURL } from '@/helpers/imageURL';
import { ToastContainer, toast } from 'react-toastify';
import { HeadingSelect } from '@/components/headers/admin/headingSelect';


type locationTypes={
    long_name: string;
    short_name: string;
    types:[];
}

const EventCreateSpecialCategory = ({dataInit}) => {
    const geostatus= new window.google.maps.Geocoder()
    const t = useTranslations("Panel_SideBar");
    const tp = useTranslations('Panel_Profile_Request');
    const tc = useTranslations("Common_Forms");
    

    const breadcrumb = [
        { page: t('admin.admin'), href: '/panel/event' },
        { page: t('event.event'), href: '/panel/event/special' },
        { page: t('event.special'), href: '/panel/event/special' },
        { page: t('actions.update'), href: '' }
    ]
    const methods = useForm<createEventSpecialCategory>({defaultValues:dataInit});
    const {mutate, isLoading, isError, isSuccess}= useUpdateEventSpecialCategory()
    const user=useMe()
    const{query,locale, push}=useRouter()
    
    useEffect(()=>{
        if (isSuccess && methods.formState.isSubmitted){
            toast.success('Event Special updated :)',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'success Updated',
                        text:'This is a success message '
                    }
                
            } );
            push(`/${locale}/panel/event/special`)   
        }else if(isError && methods.formState.isSubmitted){
            toast.error(' Error, No updated :(',{
                    position:toast.POSITION.TOP_RIGHT,
                    data:{
                        tittle:'error Updated',
                        text:'This is a error message' 
                    }
                } )
        }
    },[isSuccess,isError])
    
    
 //input file config   
    const [upload, setUpload ]=useState<string>();
    const [upload2, setUpload2 ]=useState<string>();
   
    const[url,setUrl]=useState<string>();
    const[url2,setUrl2]=useState<string >();
   
   const [Header_event,setHeader_event]=useState<File>()
   const [Event_img,setEvent_img]=useState<File>()   
   if(Event_img!==undefined){
     const reader=new FileReader
        reader.onload=(e)=>{
        setUrl2(`${e.target.result}`)
    }
    reader.readAsDataURL(Event_img)
   }
   if(Header_event!==undefined){
    const reader=new FileReader
   reader.onload=(e)=>{
       setUrl(`${e.target.result}`)
   }
   reader.readAsDataURL(Header_event)
  }
  
   
   

    const handleSelectFile=(e)=>{
               const file=e.target.files[0]
               setUpload(file.name)
               methods.setValue('header_img', file.name)
               setHeader_event(file)
       }
       
    const handleSelectFile2=(e)=>{
      
            const files=e.target.files[0]
            setUpload2(files.name)
            methods.setValue('event_img', files.name)  
            setEvent_img(files)
            
    };

    //location 

    const [mapSearch,setMapSearch]=useState('')

    const[positionMarker,setMarkerPosition]=useState<{lat:number,lng:number}>({lat:parseFloat(dataInit.location.latitude),lng:parseFloat(dataInit.location.longitude)})
     const[dataMarker,setDataPosition]=useState(null)
     const[dataCountry,setDataCountry]=useState<{long_name:string, short_name:string, types:string[]}>({long_name: dataInit.location.country.long_name, short_name: dataInit.location.country.short_name,types:[]})
     const[dataCity,setDataCity]=useState(dataInit.location.city)
     const[dataState,setDataState]=useState<{long_name:string, short_name:string, types:string[]}>({long_name: dataInit.location.state.long_name, short_name: dataInit.location.state.short_name,types:[]})
    

    const search=(e)=>{
        setMapSearch(e.target.value)
    }
    const handleMapClick= (e)=>{
        
        const lat= parseFloat(e.latLng.lat())
        const lng= parseFloat(e.latLng.lng())
        setMapSearch('')

        setMarkerPosition({lat,lng})

        geostatus?.geocode({location:{lat:lat,lng:lng}}).then((res)=>{ 

        const data=res.results.map((e)=>{
            const data={type:e.types,data:e.address_components}
            return data
        })
        const location=data?.find((e)=>e.type?.find((e)=>e==='postal_code'))?.data;
        const country=location?.find((e)=>e.types?.find((e)=>e==='country'));
        const city= location?.find((e)=>e.types?.find((e)=>e==='administrative_area_level_2'))?
        location?.find((e)=>e.types?.find((e)=>e==='administrative_area_level_2'))?.long_name
        :
        location?.find((e)=>e.types?.find((e)=>e==='administrative_area_level_1'))?.long_name;
        const state=location?.find((e)=>e.types?.find((e)=>e==='administrative_area_level_1'));

        setDataCountry(country)
        setDataCity(city)
        setDataState(state)
        methods.setValue('location.country', {long_name:country.long_name,short_name:country.short_name} )
        methods.setValue('location.city', city)
        methods.setValue('location.state', {long_name:state.long_name,short_name:state.short_name})

        }
        
        
        )
       
        
        methods.setValue('location.latitude', lat)
        methods.setValue('location.longitude', lng )
    }

   

    
    
 

/*input color config*/
    const [initColor, setInitColor]=useState<string>(dataInit.color);
    const  onChangeColor=(color:any)=>{ 
        setInitColor(color.hex)
        methods.setValue('color', initColor )
       
    }

/*submit form*/ 
    const onSubmit:SubmitHandler<createEventSpecialCategory>= (data:createEventSpecialCategory)=>{
        const DataForm=new FormData
        DataForm.append("event_special_category", JSON.stringify(data))

        Header_event && DataForm.append("header_img", Header_event)
        Event_img && DataForm.append("event_img", Event_img)
        mutate({id:`${query.id}`,SpecialCategory:DataForm})
    };
   
    
    


 const[category,setCategory]=useState( dataInit.category)

/*Lang*/
    const[lang ,setlang]=useState(dataInit.category.map((e)=>e.lang))
    const[SelectValue ,setSelectValue]=useState('en')

    const LangSelect:React.ChangeEventHandler<HTMLSelectElement> = (e:any)=>{
    const Lang=e.target.value;
    setSelectValue(Lang)
    }
    const onAppend=()=>{
        if(!(lang.includes(SelectValue))){
        setlang([...lang, SelectValue])
        setCategory([...category,{lang:SelectValue, name:'',description:''}])
        }
    }
    const onDelete=(e, exp, index)=>{
        if(category.length >= 2 ){
        setlang((e)=>e.filter((f)=>f !== exp))
        setCategory(category.filter((e)=>e.lang!==exp))
        methods.setValue('category', category.filter((e)=>e.lang!==exp))
        
        }
    }


const[initialDate,setinitialDate]=useState(dataInit.initial_date)
const dateInit=(e)=>{
    setinitialDate(e.target.value)
    methods.setValue('initial_date',e.target.value )
}
const dateEnd=(e)=>{
    methods.setValue('final_date', e.target.value )
}
 useEffect(()=>{
        methods.setValue("header_img",dataInit.header_img)
        methods.setValue("event_img",dataInit.event_img)
},[])


return (<>
            
            <div>
                <HeadingSelect breadcrumb={breadcrumb} langBread onChange={LangSelect} onAppend={onAppend}/>
            </div>
            <FormProvider {...methods}>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <form className="divide-y divide-gray-200 lg:col-span-9"  onSubmit={methods.handleSubmit(onSubmit)} method="PUT">
                        <div className="py-6 grid grid-cols-12 gap-6">
                            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12">
                            <CustomLabel field="header-upload" name={tc('field_header')} required />
                            <Dropzone noClick>
                                {({getInputProps,getRootProps,acceptedFiles})=>{
                                    if(acceptedFiles[0]?.name !== undefined){ 
                                    const file=acceptedFiles[0]
                                     setUpload(file?.name)
                                     setHeader_event(file)
                                     methods.setValue('header_img', file?.name)
                                     }
                                    
                                     
                                return (<div {...getRootProps()}className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 h-60">
                                <div className="space-y-1 text-center">
                                    {upload===undefined ?
                                    <Image src={ImageURL(dataInit.header_img)} alt='Event image' className="mx-auto" width={140} height={100}></Image>
                                    
                                        :
                                      (url && <Image src={url} alt='Event image' className="mx-auto" width={140} height={100}></Image>)
                                    }
                                        
                                    <div className="flex text-sm text-gray-600">
                                    <label
                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                    { upload===(undefined ||'')?  <span  >{tc('field_upload_file')}</span>:<span className='flex flex-row gap-2'>{ upload}<ArrowPathIcon width='1.5rem' height='1.5rem'/></span>}
                                            
                                    </label> 
                                    <input 
                                    id="header-upload" 
                                    name="header-upload" 
                                    type="file" 
                                    onChange={handleSelectFile}
                                    className="opacity-0 absolute"
                                    {...getInputProps()} />
                                    <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                </div>
                            </div>)}}
                            </Dropzone>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                            <Dropzone>
                            {({getRootProps,getInputProps,acceptedFiles})=>{ 
                                    
                                    if(acceptedFiles[0]?.name !== undefined){ 
                                        const file=acceptedFiles[0]
                                        setUpload2(file?.name)
                                        methods.setValue('event_img', file?.name)
                                        setEvent_img(file)
                                    }
                                         
                                    
                                    
                               return ( <div {...getRootProps()} className="relative mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 h-60">
                                    <div className="space-y-1 text-center">
                                        {upload2 === undefined?
                                        <Image src={ImageURL(dataInit.event_img)} alt='Event image' className="mx-auto" width={70} height={60}></Image>
                                        :
                                         url2 && <Image src={url2} alt='Event image' className="mx-auto" width={70} height={60}></Image>
                                       
                                        }
                                            
                                        <div className="flex text-sm text-gray-600">
                                        <label
                                        className="cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                        { upload2===undefined?  <span  >{tc('field_upload_file')}</span>:<span className='flex flex-row gap-2'>{ upload2}<ArrowPathIcon  width='1.5rem' height='1.5rem'/></span>}
                                        
                                        </label> 
                                        <input 
                                        id="event-upload" 
                                        name="event-upload" 
                                        type="file"
                                        {...getInputProps()} 
                                        onDrag={handleSelectFile2}
                                        onChange={handleSelectFile2}
                                        className="opacity-0 absolute w-full h-full top-0 left-0 rigth-0"
                                        />
                                        <p className="pl-1">{tp('text_drag_n_drop')}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF {tp('text_up_to')} 10MB</p>
                                    </div>
                                </div>)}}
                                </Dropzone>
                            </div>
                            
                            <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
                                <div>
                                    <CustomLabel field="front_id" name={tc('field_color')} required />
                                    <SketchPicker 

                                    onChange={onChangeColor}
                                    color={initColor}
                                    />
                                </div>
                                
                              
                            </div>
                            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 gap-6 flex flex-row lg:mb-16 mb-6">
                                <div className="w-full ">
                                    <CustomLabel field="initial_date" name={tc('field_initial_date')}/>
                                    <input type='date' defaultValue={dataInit.initial_date} onChange={dateInit} min={'2023-04-26'} max={'2026-04-26'} placeholder='Selecciona Fecha inicial'  className={FormStyles('input')} />
                                </div>
                                <div className="w-full ">
                                    <CustomLabel field="final_date" name={tc('field_final_date')}/>
                                    <input type='date' defaultValue={dataInit.final_date} onChange={dateEnd} min={initialDate} max={'2026-04-26'} placeholder='Selecciona Fecha final'  className={FormStyles('input')} />
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4">
                                <div>
                                    <CustomLabel field="searchaddress" name={tc('field_searchaddress')} />
                                    <input
                                        type="text"
                                        name="searchaddress"
                                        id="searchaddress"
                                        value={mapSearch}
                                        onChange={search}
                                        autoComplete={tc('auto_searchaddress')}
                                        placeholder={tc('field_searchaddress')}
                                        className={FormStyles('input')}
                                    />
                                </div>
                                <div className='py-6'>
                                    <CustomLabel field="country" name={tc('field_country')} required />
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        {...methods.register('location.country.long_name')}
                                        value={dataCountry?.long_name}
                                        autoComplete={tc('auto_country')}
                                        placeholder={tc('field_country')}
                                        className={FormStyles('input')}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <CustomLabel field="state" name={tc('field_state')} required />
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        {...methods.register('location.state.long_name')}
                                        value={dataState?.long_name}
                                        autoComplete={tc('auto_state')}
                                        placeholder={tc('field_state')}
                                        className={FormStyles('input')}
                                        disabled
                                    />
                                </div>
                                <div className='py-6'>
                                    <CustomLabel field="city" name={tc('field_city')} required />
                                    <input
                                        type="text"
                                        id="city"
                                        {...methods.register('location.city')}
                                        value={dataCity}
                                        autoComplete={tc('auto_city')}
                                        placeholder={tc('field_city')}
                                        className={FormStyles('input')}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8">
                                <div className="relative isolate bg-white">
                                    <span>{tc('field_searchaddress')}</span>
                                    <div className="flex justify-start w-screen" style={{height:'400px', width:'600px'}}>
                                     <Map searchAddress={mapSearch} center={positionMarker} markerPosition={{lat:50,lng:50}} handleMapClick={handleMapClick} />
                                    </div>
                                </div>
                            </div>
                            {
                            category.map((exp, index)=>{
                               return(  <InputSpecial 
                                index={index} 
                                key={index} 
                                lang={exp?.lang} 
                                control={methods.control} 
                                num={category?.length}
                                onClick={(e)=>onDelete(e, exp?.lang,index)}
                                />
                                 )
                            
                            })
                            }
                            <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6">
                            <CustomLabel field="description" name='description' required />
                            <input
                                type="text"
                                {...methods.register('description')}
                                placeholder={tc("field_description")}
                                className={FormStyles('input')}
                            />
                            </div>
                        </div>
                        
                        
                        <ToastContainer/>
                        {/* Buttons section */}
                        <div className="divide-y divide-gray-200">
                            <div className="mt-4 flex justify-end gap-x-3 py-4 px-4 sm:px-6">
                                <CustomCancel onClick={()=>push(`/${locale}/panel/event/special`)} />
                                <CustomSubmit disabled={isLoading}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FormProvider>
        </>
    );
};

EventCreateSpecialCategory.Layout = AdminLayout;
export default EventCreateSpecialCategory;
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ locale,params }: GetStaticPropsContext) {
    const { data } = await axios.get(`/events/specials/categories/${params.id}`);
    delete data.created_at
    delete data.updated_at
    delete data._id
    delete data.status
    data.user_id=data.user_id.id


    
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
            dataInit:data
        },
    };
}
