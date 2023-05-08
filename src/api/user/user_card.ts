import axios from '@/lib/axios';
import { UserPayment } from '@/interfaces/serializers/user'

export const getUserCard = async () => {
    const { data } = await axios.get(`/users/card/`);

    return data;
};

export const createUserCard = async () => {
    const { data } = await axios.post(`/users/card/`);

    return data;
}

export const updateUserCard = async (card_id: string) => {
    const { data } = await axios.put(`/users/card/${card_id}`);

    return data;
}

export const deleteUserCard = async (payment_id: string) => {
    const { data } = await axios.delete(`/users/card/${payment_id}`);

    return data;
}