import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
        getEventsVenuesCategories,
        createEventVenueCategory,
        readEventVenueCategory,
        updateEventVenueCategory,
        deleteEventVenueCategory
} from '@/api/event/event_venue_category';
import { WithDocs } from '@/interfaces/serializers/commons';
import { EventVenueCategory, interfaceEventVenueCategory } from '@/interfaces/event';


const key = 'event_venue_category';

export function useEventVenueCategories() {
  return useQuery<EventVenueCategory[]>([key], getEventsVenuesCategories);
}

export function useEventVenueCategory(event_venue_category_id: string) {
  return useQuery<EventVenueCategory>([key, event_venue_category_id], () =>
    readEventVenueCategory(event_venue_category_id as any)
  );
}

export function useAllEventVenueCategory() {
const{data,isLoading,isError}=useQuery([key], getEventsVenuesCategories)
  return {isError,isLoading,data}
}

export function useUpdateEventVenueCategory() {

    const queryClient=useQueryClient();
    
  
    const {mutate, isLoading, isError, isSuccess}= useMutation((value:{ updateCategory_id: string, eventCategory:string})=>{
          return updateEventVenueCategory(value.updateCategory_id,value.eventCategory)},{
            onSuccess:  (data, value) => {
              return queryClient.setQueryData([key], (prev:any)=>{
            
                const newArray = prev?.map((item)=>{
                if( item._id===value.updateCategory_id){
                    return  data
                }else{
                      return item
                  }
                })
              return newArray
              })
            }}
      )
  return {mutate, isLoading, isError, isSuccess};
}


export function useCreateEventVenueCategory() {
  const queryClient = useQueryClient();

  const{mutate, isLoading, isError, isSuccess}= useMutation( (venueCategory:string)=>  createEventVenueCategory(venueCategory), {
      onSuccess: (event_venue_category) => {
      return queryClient.setQueryData([key], (prevEventCategory: any) =>{
        return prevEventCategory?.push(event_venue_category)}
      );
    },
  });
  return {mutate, isLoading, isError, isSuccess}
}


export function useReadEventVenueCategory(EventVenue_id: string){
  return useQuery([key, EventVenue_id], () => readEventVenueCategory(EventVenue_id));
  
}


export function useDeleteEventVenueCategory() {
  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation((id:string)=>{
        return deleteEventVenueCategory(id)},{onSuccess: (data,categoryDel)=>{
          console.log('delete',data)
        return queryClient.setQueryData([key], (prev:any)=>{
            const arr= prev?.map((dat)=>{
              if(dat._id===categoryDel){
                
                dat.status=!dat.status
               return dat
              }else{
                return dat
              }
            })
          return arr
        })
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
