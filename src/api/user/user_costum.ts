import axios from '@/lib/axios';
import { UserCostum } from '@/interfaces/user';

export const getUsersCostumes = async () => {
    const { data } = await axios.get(`/users/costumes/`);
    
    return data;
};

export const createUserCostum = async (user_costum: UserCostum) => {
    const { data } = await axios.post(`/users/costumes/`, user_costum);

    return data;
}

export const readUserCostum = async (id: string) => {
    const { data } = await axios.get(`/users/costumes/${id}`);

    return data;
}

export const updateUserCostum = async (id: string, user_costum: UserCostum) => {
    const { data } = await axios.put(`/users/costumes/${id}`, user_costum);

    return data;
}

export const deleteUserCostum = async (id: string) => {
    const { data } = await axios.delete(`/users/costumes/${id}`);

    return data;
}