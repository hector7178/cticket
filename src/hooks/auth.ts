import { QueryObserver, useMutation, useQueryClient } from '@tanstack/react-query'
import { userLogin, userRegister } from '@/api/auth'
import { AuthContext } from '@/context/auth/auth_provider'
import { User } from '@/interfaces/user'
import { useContext, useEffect, useState } from 'react'

const key = "user";

export function useMutationLogin() {
  const queryClient = useQueryClient();

  return useMutation(userLogin, {
    onSuccess: (user) => {
      queryClient.setQueryData([key], () => [{ ...user, role: user.role }]);
      queryClient.invalidateQueries([key]);
    },
  });
}

export function useMutationRegister() {
  const queryClient = useQueryClient();

  return useMutation(userRegister, {
    onSuccess: (user) => {
      queryClient.setQueryData([key], () => [{ ...user, role: user.role }]);
      queryClient.invalidateQueries([key]);
    },
  });
}

// changed
// export function useMutationLogin() {
//   const queryClient = useQueryClient();

//   return useMutation(userLogin, {
//     onSuccess: (user) => {
//       queryClient.setQueryData([key], () => [user]);
//       queryClient.invalidateQueries([key]); // Remove cache en refetch data
//     },
//   });
// }

// export function useMutationRegister() {
//   const queryClient = useQueryClient();

//   return useMutation(userRegister, {
//     onSuccess: (user) => {
//       queryClient.setQueryData([key], () => [user]);
//       queryClient.invalidateQueries([key]);
//     },
//   });
// }

interface UserAuth {
  user: User | null,
  providerId: string | null,
}

export const useUserAuthObserver = () => {
  const { statusAuth } = useContext(AuthContext)

  const queryClient = useQueryClient()

  const [auth, setUser] = useState<UserAuth>(
    () => {
      const data = queryClient.getQueryData<UserAuth[]>([key])?.[0]
      return {
        user: data?.user || null,
        providerId: data?.providerId || null
      }
    }
  )

  useEffect(() => {
    const observer = new QueryObserver<UserAuth[]>(queryClient, { queryKey: [key] })
    const unsubscribe = observer.subscribe(result => {
      if (result.data) {

        const providerId = result.data[0].providerId
        const user = result.data[0].user

        setUser({ providerId, user });

        return
      }

      setUser({ providerId: null, user: null });
    })

    return () => unsubscribe()
  }, [])

  return {
    user: auth.user,
    providerId: auth.providerId,
    queryClient,
    isLoading: statusAuth === 'checking',
    isAuthenticated: statusAuth === 'authenticated' && auth.user,
  }
}
