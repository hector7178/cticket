/** @format */
import { useEffect, useMemo, useState } from 'react';
import { GetStaticPropsContext } from "next";
import { useLocale, useTranslations } from "next-intl";
import axios from '@/lib/axios';
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable } from '@/components/admin/tables';
import { columnsEventSpecialCategory } from '@/components/admin/tables/columns/columnsEventSpecialCategory';
// Components
import { Heading } from '@/components/headers/admin/heading';
// Import Interface
import { EventCategory } from '@/interfaces/event';
import { useEventSpecialCategory, useQueryEventsSpecialsCategories } from '@/hooks/event/event_special_category';
import { useUsers} from '@/hooks/user/user';


const EventSpecialCategory = ({dataInit}) => {
    const ts = useTranslations("Panel_SideBar");
    const tb = useTranslations("btn");
    const {data}=useQueryEventsSpecialsCategories('', '', '')
    const user=useUsers()
    const locale = useLocale();
    const breadcrumb = [
        { page: ts('event.event'), href: '/panel/event' },
        { page: ts('event.special'), href: '' }
    ]
    const buttonBread =  { text: tb('add_event_special_category'), href: '/panel/event/special/create' }


    
    let dataTableE = [];
    console.log(dataInit)
    data?.items?.map((item) => {
        let dataIn = {
            id:item._id,
            category: item.category?.find((obj) => obj.lang == locale)?.name,
            owner:item.user_id?.['firstname'] || dataInit.items?.find((e)=>e._id===item.user_id.id)?.firstname,
            created:item.created_at?.split('T')[0],
            status:item.status
        }
        dataTableE.push(dataIn)
    })


    const columns = columnsEventSpecialCategory();
   
    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} buttonBread={buttonBread} />
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="flow-root">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className="min-w-full divide-y divide-gray-300">
                                        <BasicTable columns={columns} defaultData={dataTableE} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

EventSpecialCategory.Layout = AdminLayout;
export default EventSpecialCategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
const { data } = await axios.get('/users/?page=1&size=100&searchkey=search_key&searchword=search_word&sortby=key_sort&descending=true')
    
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
            dataInit:data
        },
    };
}