import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getEventsCategories,
  createEventCategory,
  readEventCategory,
  updateEventCategory,
  deleteEventCategory,
} from '@/api/event/event_category';
import { EventCategory } from '@/interfaces/event';
import { useState } from 'react';

const key = 'event_category';

export function useCategories() {
  const { data, isLoading, isError } = useQuery([key], getEventsCategories);

  return { data, isLoading, isError };
}
/*Create category*/

export function useCreateCategories() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, isSuccess } = useMutation(
    createEventCategory,
    {
      onSuccess: (data) => {
        queryClient.setQueryData([key], (prev: any) => prev.concat(data));
      },
    }
  );
  return { mutate, isLoading, isError, isSuccess };
}
/*Read category*/
export function useReadEventCategory(category_id: string) {
  return useQuery([key, category_id], () => readEventCategory(category_id));
}

/*update category*/
export function useUpdateEventCategory() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, isSuccess } = useMutation(
    updateEventCategory as MutationFunction,
    {
      onSuccess: (data) => {
        queryClient.setQueryData([key], (prev: any) => prev.concat(data));
      },
    }
  );
  return { mutate, isLoading, isError, isSuccess };
}
/*delete category*/
export function useDeleteEventCategory(deleteCategory_id: string) {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, isSuccess } = useMutation(
    deleteEventCategory,
    {
      onSuccess: (data) => {
        queryClient.setQueryData([key], (prev: any) => prev.concat(data));
      },
    }
  );
  return { mutate, isLoading, isError, isSuccess };
}
