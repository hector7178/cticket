import axios from '@/lib/axios';
import { AdvertisementOrderPayment } from '@/interfaces/advertisement';

export const getAdvertisementsOrdersPayments = async () => {
    const { data } = await axios.get(`/advertisements/orders/payments/`);
    
    return data;
};

export const createAdvertisementOrderPayment = async (advertisement_order_payment: AdvertisementOrderPayment) => {
    const { data } = await axios.post(`/advertisements/orders/payments/`, advertisement_order_payment);

    return data;
}

export const readAdvertisementOrderPayment = async (id: string) => {
    const { data } = await axios.get(`/advertisements/orders/payments/${id}`);

    return data;
}

export const updateAdvertisementOrderPayment = async (id: string, advertisement_order_payment: AdvertisementOrderPayment) => {
    const { data } = await axios.put(`/advertisements/orders/payments/${id}`, advertisement_order_payment);

    return data;
}

export const deleteAdvertisementOrderPayment = async (id: string) => {
    const { data } = await axios.delete(`/advertisements/orders/payments/${id}`);

    return data;
}