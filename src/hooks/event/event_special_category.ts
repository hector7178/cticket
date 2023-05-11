import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createEventSpecialCategory,
  deleteEventSpecialCategory,
  getEventsSpecialsCategories,
  getEventsSpecialsCategory,
  readEventSpecialCategory,
  readEventSpecialCategoryDateRange,
  updateEventSpecialCategory,
} from '@/api/event/event_special_category';
import { EventSpecialCategory } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_special_category';

export function useEventsSpecialsCategories() {
  return useQuery<WithDocs<EventSpecialCategory>>(
    [key],
    getEventsSpecialsCategories
  );
}

export function useQueryEventsSpecialsCategories(searchkey:string , searchword:string,sortby:string) {
  return useQuery<WithDocs<EventSpecialCategory>>([key], ()=> getEventsSpecialsCategory(searchkey, searchword, sortby));
}

export function useEventSpecialCategory(event_special_category_id: string) {
  return useQuery<EventSpecialCategory>([key, event_special_category_id], () =>
    readEventSpecialCategory(event_special_category_id as any)
  );
}

export function useEventSpecialCategoryDateRange(
  event_special_category_id: string
) {
  return useQuery(['event_special_category_daterange', event_special_category_id],
    () => readEventSpecialCategoryDateRange(event_special_category_id)
  );
}

export function useCreateEventSpecialCategory() {
  
  const queryClient=useQueryClient();

  const {mutate, isLoading, isError, isSuccess}= useMutation(
     createEventSpecialCategory, {onSuccess: (dataRes, event_SpecialCategory) => {
      return queryClient.setQueryData([key], async (prevEventSpecialCategory:any) =>{
        const data= await getEventsSpecialsCategory('','','')
        const edited=data?.items?.find((e)=>e._id===dataRes._id)
          const arr= await prevEventSpecialCategory?.items?.map((e)=>{
              if(e._id===dataRes._id){
                  return e=edited
              }else{
                 return e
              }
          })
        
        return  arr}
      );
    },
  }); 
  return {mutate, isLoading, isError, isSuccess}
}


/*Read SpecialCategory*/
export function useReadEventSpecialCategory(category_id: string) {
  return useQuery([key, category_id], () => readEventSpecialCategory(category_id));
}

/*update SpecialCategory*/
export function useUpdateEventSpecialCategory( ) {

  const queryClient=useQueryClient();

  const {mutate, isLoading, isError, isSuccess}= useMutation((values:{id:string,SpecialCategory:FormData})=>{
        
         
    return updateEventSpecialCategory(values.id, values.SpecialCategory )},{onSuccess: (dataRes,value)=>{
        return queryClient.setQueryData([key], async (prev:any)=>{
          const data= await getEventsSpecialsCategory('','','')
          if(prev?.items){
            prev.items=data?.items
          }

          return prev
          
        })
    }}
)
return {mutate, isLoading, isError, isSuccess};
}


/*delete SpecialCategory*/
export function useDeleteEventSpecialCategory( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation((id:string)=>{
    return deleteEventSpecialCategory(id)},{onSuccess: (data,catDel)=>{
    return queryClient.setQueryData([key], (prev:any)=>{
      const arr= prev?.map((dat)=>{
              if(dat._id===catDel){
                
                dat.status=!dat.status
               return dat
              }else{
                return dat
              }
            })
          return arr})
}}
)
return {mutate, isLoading, isError, isSuccess}
  
  
}

