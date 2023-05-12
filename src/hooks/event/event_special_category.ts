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
  return useQuery<EventSpecialCategory>([key], ()=> getEventsSpecialsCategory(searchkey, searchword, sortby));
}

export function useEventSpecialCategory(event_special_category_id: string) {
  const {data,isError, isLoading, isSuccess}= useQuery<EventSpecialCategory>([key, event_special_category_id], () =>
    readEventSpecialCategory(event_special_category_id as any)
  );
  return {data,isError, isLoading, isSuccess}
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
      return queryClient.setQueryData([key],  (prevEventSpecialCategory:any) =>{
        return prevEventSpecialCategory?.push(dataRes)
      }

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
        return queryClient.setQueryData([key],(prev:any)=>{ 
           console.log('dataRes' ,dataRes)
          let arr=prev
        
          if(arr?.items){
            arr.items = prev?.items?.map((item)=>{
             if( item._id===dataRes._id){
                 return  dataRes
             }else{
                  return item
              }
            })
            return arr
          }
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
      let arr=prev
      arr.items= prev.items?.map((dat)=>{
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

