import axios from '@/lib/axios';
import { User } from '@/interfaces/user';
import { Role } from "@/interfaces/user";

type UserLogin = { uid: string, id_token: string }

interface AuthResponse {
    user: User,
    autorization: {
        token: string
        token_type: string
    }
    providerId: string
    role: Role
}

export const userLogin = async (login: UserLogin) => {
    const { data } = await axios.post<AuthResponse>(`/auths/login/`, login);

    return data;
}

export const userRegister = async (user: User) => {
    const { data } = await axios.post<AuthResponse>(`/auths/register`, user);

    return data;
}

