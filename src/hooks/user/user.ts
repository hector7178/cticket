import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getMe, getUsers, createUser, readUser, updateUser, deleteUser } from '@/api/user/user'

const key = "user";

export function useMe() {
  return useQuery([key], getMe);
}

export function useUsers() {
  return useQuery([key], getUsers);
}

export function useMutationCreateUers() {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    onSuccess: (user) => {
      queryClient.setQueryData([key], (prevUser: any) => prevUser.concat(user));
      queryClient.invalidateQueries([key]);
    },
  });
}

export function useUser(user_id: string) {
  return useQuery([key, user_id], () => readUser(user_id));
}

export function useMutationUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: (user) => {
      queryClient.setQueryData([key], (prevUser: any) => prevUser.concat(user));
      queryClient.invalidateQueries([key]);
    },
  });
}
