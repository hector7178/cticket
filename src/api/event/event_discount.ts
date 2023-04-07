import axios from '@/lib/axios';
import { EventDiscount } from '@/interfaces/event';

export const getEventsDiscounts = async () => {
    const { data } = await axios.get(`/events/discounts/`);
    return data;
};

export const createEventDiscount = async (discount: EventDiscount) => {
    const { data } = await axios.post(`/events/discounts/`, discount);

    return data;
}

export const readEventDiscount = async (id: string) => {
    const { data } = await axios.get(`/events/discounts/${id}`);

    return data;
}

export const updateEventDiscount = async (id: string, discount: EventDiscount) => {
    const { data } = await axios.put(`/events/discounts/${id}`, discount);

    return data;
}

export const deleteEventDiscount = async (id: string) => {
    const { data } = await axios.delete(`/events/discounts/${id}`);

    return data;
}