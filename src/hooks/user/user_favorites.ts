import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addUserFavorite,
  createUserFavorite,
  deleteUserFavorite,
  getUsersFavorites,
  readUserFavorite,
  removeUserFavorite,
  updateUserFavorite,
} from '@/api/user/user_favorite';
import { UserFavorite } from '@/interfaces/user';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'user_favorite';

export function useUserFavorites() {
  return useQuery<UserFavorite[]>([key], getUsersFavorites);
}

export function useUserFavorite(id: string) {
  return useQuery<UserFavorite>([key, id], () => readUserFavorite(id as any));
}

export function useMutationAddFavorite() {
  const queryClient = useQueryClient();
  return useMutation(addUserFavorite, {
    onSuccess: () => queryClient.invalidateQueries([key]),
  });
}

export function useMutationRemoveFavorite() {
  const queryClient = useQueryClient();
  return useMutation(removeUserFavorite, {
    onSuccess: () => queryClient.invalidateQueries([key]),
  });
}
