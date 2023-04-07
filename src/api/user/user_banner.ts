import axios from '@/lib/axios';
import { UserBanner } from '@/interfaces/user';

export const getUsersBanners = async () => {
    const { data } = await axios.get(`/users/banners/`);
    
    return data;
};

export const createUserBanner = async (user_banner: UserBanner) => {
    const { data } = await axios.post(`/users/banners/`, user_banner);

    return data;
}

export const readUserBanner = async (id: string) => {
    const { data } = await axios.get(`/users/banners/${id}`);

    return data;
}

export const updateUserBanner = async (id: string, user_banner: UserBanner) => {
    const { data } = await axios.put(`/users/banners/${id}`, user_banner);

    return data;
}

export const deleteUserBanner = async (id: string) => {
    const { data } = await axios.delete(`/users/banners/${id}`);

    return data;
}