import axios from '@/lib/axios';
import { AdvertisementOrderItem } from '@/interfaces/advertisement';

export const AdvertisementsOrdersItems = async () => {
    const { data } = await axios.get(`/advertisements/orders/items/`);
    
    return data;
};

export const createAdvertisementOrderItem = async (advertisement_order_item: AdvertisementOrderItem) => {
    const { data } = await axios.post(`/advertisements/orders/items/`, advertisement_order_item);

    return data;
}

export const readAdvertisementOrderItem = async (id: string) => {
    const { data } = await axios.get(`/advertisements/orders/items/${id}`);

    return data;
}

export const updateAdvertisementOrderItem = async (id: string, advertisement_order_item: AdvertisementOrderItem) => {
    const { data } = await axios.put(`/advertisements/orders/items/${id}`, advertisement_order_item);

    return data;
}

export const deleteAdvertisementOrderItem = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/orders/items/${id}`);

    return data;
}