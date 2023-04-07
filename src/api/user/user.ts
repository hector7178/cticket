import axios from '@/lib/axios';
import { User } from '@/interfaces/user';

export const getMe = async () => {
    const { data } = await axios.get(`/users/me`);

    return data;
};

export const getUsers = async () => {
    const { data } = await axios.get(`/users/`);

    return data;
};

export const createUser = async (user: User) => {
    const { data } = await axios.post(`/users/`, user);

    return data;
}

export const readUser = async (id: string) => {
    const { data } = await axios.get(`/users/${id}`);

    return data;
}

export const updateUser = async (user: User) => {
    const { data } = await axios.put(`/users/${user.uid}`, user);

    return data;
}

export const deleteUser = async (id: string) => {
    const { data } = await axios.delete(`/users/${id}`);

    return data;
}