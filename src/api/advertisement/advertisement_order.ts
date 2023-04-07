import axios from '@/lib/axios';
import { AdvertisementOrder } from '@/interfaces/advertisement';

export const getAdvertisementsOrders = async () => {
    const { data } = await axios.get(`/advertisements/orders/`);
    
    return data;
};

export const createAdvertisementOrder = async (advertisement_order: AdvertisementOrder) => {
    const { data } = await axios.post(`/advertisements/orders/`, advertisement_order);

    return data;
}

export const readAdvertisementOrder = async (id: string) => {
    const { data } = await axios.get(`/advertisements/orders/${id}`);

    return data;
}

export const updateAdvertisementOrder = async (id: string, advertisement_order: AdvertisementOrder) => {
    const { data } = await axios.put(`/advertisements/orders/${id}`, advertisement_order);

    return data;
}

export const deleteAdvertisementOrder = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/orders/${id}`);

    return data;
}