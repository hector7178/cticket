import axios from '@/lib/axios';
import { UserRecommend } from '@/interfaces/user';

export const getUsersRecommend = async () => {
    const { data } = await axios.get(`/users/recommends/`);
    
    return data;
};

export const createUserRecommend = async (user_recommend: UserRecommend) => {
    const { data } = await axios.post(`/users/recommends/`, user_recommend);

    return data;
}

export const readUserRecommend = async (id: string) => {
    const { data } = await axios.get(`/users/recommends/${id}`);

    return data;
}

export const updateUserRecommend = async (id: string, user_recommend: UserRecommend) => {
    const { data } = await axios.put(`/users/recommends/${id}`, user_recommend);

    return data;
}

export const deleteUserRecommend = async (id: string) => {
    const { data } = await axios.delete(`/users/recommends/${id}`);

    return data;
}