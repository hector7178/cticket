import { useState, useContext } from 'react'
import { useQueryClient } from '@tanstack/react-query'
// Libraries
import { sign_up_with_credentials, sign_in_with_credentials, ProviderType, sing_in } from '@/lib/firebase_auth'
// Hooks
import { useMutationRegister, useMutationLogin } from './auth'
// Context
import { AuthContext } from '@/context/auth/auth_provider'
// Interfaces
import { SignIn, SignUp } from '@/interfaces/auth'


export const useAuthRegister = () => {

    const on_success = useRewriteQueryData()

    const { mutateAsync, ...rest } = useMutationRegister()
    const { change_status } = useContext(AuthContext)
    // error by Firebase
    const [customError, setCustomError] = useState('')

    const register_user = async (inputs: SignUp) => {
        change_status('checking')
        // register user in Firebase and wait response/data
        const { user, error: error_firebase } = await sign_up_with_credentials(inputs)

        if (error_firebase || !user) return setCustomError(error_firebase)

        const { providerId, displayName, ...rest } = user

        const new_user = { ...rest, firstname: displayName }

        try {
            // register user in own API
            await mutateAsync(new_user, {
                onSuccess: (data) => {
                    on_success(data, providerId)
                    change_status('authenticated')
                }
            })

        } catch (error) {
            console.log((error as Error).message)
            change_status('no-authenticated')
            setCustomError('There was an error, please try it later')
        }
    }

    return {
        ...rest,
        register_user,
        customError,
    }
}

export const useAuthLogin = () => {

    const { mutateAsync, ...rest } = useMutationLogin()

    const on_success = useRewriteQueryData()

    // error by Firebase
    const [customError, setCustomError] = useState('')

    const login_user = async (inputs: SignIn) => {
        // login user in Firebase and wait response/data
        const { error: error_firebase, user } = await sign_in_with_credentials(inputs)

        if (error_firebase || !user) return setCustomError(error_firebase)

        const { providerId, ...rest } = user

        try {
            // login user in own API
            await mutateAsync(rest, {
                onSuccess(data) { on_success(data, providerId) },
            })

        } catch (error) {
            console.log((error as Error).message)
        }
    }

    return {
        ...rest,
        login_user,
        customError
    }
}

export const useAuthWithProvider = () => {

    const on_success = useRewriteQueryData()

    const { mutateAsync: login_mutate } = useMutationLogin()

    const { mutateAsync: register_mutate } = useMutationRegister()

    const { change_status } = useContext(AuthContext)

    const [customError, setCustomError] = useState('')

    const login_provider = async (provider: ProviderType) => {

        let need_create_account = false

        change_status('checking')

        // login in firebase (by provider example: google)
        const { error: error_firebase, user } = await sing_in(provider)
        // if error exists, then return it
        if (error_firebase || !user) return setCustomError(error_firebase)

        const { uid, id_token, avatar, email, firstname, providerId } = user

        try {
            // login in the API
            await login_mutate({
                id_token,
                uid
            },
                {
                    onSuccess(data) {
                        // rewrite cache, add providerId
                        on_success(data, providerId)
                        change_status('authenticated')
                    },
                })

        } catch (error) {
            // if there is an error and it is this one, it is because the user does not exist in the DB, 
            // so it is necessary to create it.
            if ((error as Error).message === 'Request failed with status code 403') {
                need_create_account = true
            }
        }

        // create a new user only if necessary
        if (need_create_account) {
            // Register in the API
            await register_mutate({
                id_token,
                uid,
                avatar, email, firstname
            },
                {
                    onSuccess(data) {
                        on_success(data, providerId)
                        change_status('authenticated')
                    },
                })
        }
    }

    return {
        login_provider,
        customError
    }
}

export const useRewriteQueryData = () => {

    const queryClient = useQueryClient()

    const onSuccess = (data: any, providerId: string) => {
        // we leave the user as it is, we only add the providerID
        const newLogin = {
            ...data,
            providerId
        }
        queryClient.setQueryData(['user'], () => [newLogin])

        localStorage.setItem('token', data.autorization.token)
    }

    return onSuccess
}