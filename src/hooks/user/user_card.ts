import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
    getUserCard,
    createUserCard,
    updateUserCard,
    deleteUserCard
} from '@/api/user/user_card'
import { User } from "@/interfaces/user";

const key = 'user';

export function useUserCard() {
    return useQuery([key, "get card"], getUserCard);
}

export function useCreateUserCard() {
    return useQuery([key, "post card"], createUserCard);
}

export function useUpdateUsersCard() {
    const queryClient = useQueryClient();

    return useMutation(updateUserCard, {
        onSuccess: (user) => {
            queryClient.setQueryData([key], (prevUser: any) => prevUser.concat(user));
            queryClient.invalidateQueries([key]);
        },
    });
}

export function useDeleteUsersCard(payment_id: string) {
    return useQuery([key, payment_id], () => deleteUserCard(payment_id));
}

// export function useMutationUpdateUser() {
//     const queryClient = useQueryClient();
//     return useMutation(updateUser, {
//         onSuccess: (data) => {
//             console.log('Data returned by updateUser:', data);
//             const updatedUser = data;
//             queryClient.setQueryData([key], (prevUsers: any) => {
//                 return prevUsers.map((user: User) => {
//                     if (user.uid === updatedUser.uid) {
//                         return { ...user, ...updatedUser };
//                     }
//                     return user;
//                 });
//             });
//             queryClient.invalidateQueries([key]);
//         },
//     });
// }