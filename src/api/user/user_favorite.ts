import axios from '@/lib/axios';
import { UserFavorite } from '@/interfaces/user';

export const getUsersFavorites = async () => {
    const { data } = await axios.get(`/users/favorites/`);
    
    return data;
};

export const createUserFavorite = async (user_favorite: UserFavorite) => {
    const { data } = await axios.post(`/users/favorites/`, user_favorite);

    return data;
}

export const readUserFavorite = async (id: string) => {
    const { data } = await axios.get(`/users/favorites/${id}`);

    return data;
}

export const updateUserFavorite = async (id: string, user_favorite: UserFavorite) => {
    const { data } = await axios.put(`/users/favorites/${id}`, user_favorite);

    return data;
}

export const deleteUserFavorite = async (id: string) => {
    const { data } = await axios.delete(`/users/favorites/${id}`);

    return data;
}