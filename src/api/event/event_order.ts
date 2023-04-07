import axios from '@/lib/axios';
import { EventOrder } from '@/interfaces/event';

export const getEventsOrders = async () => {
    const { data } = await axios.get(`/events/orders/`);
    return data;
};

export const createEventOrder = async (order: EventOrder) => {
    const { data } = await axios.post(`/events/orders/`, order);

    return data;
}

export const readEventOrder = async (id: string) => {
    const { data } = await axios.get(`/events/orders/${id}`);

    return data;
}

export const updateEventOrder = async (id: string, order: EventOrder) => {
    const { data } = await axios.put(`/events/orders/${id}`, order);

    return data;
}

export const deleteEventOrder = async (id: string) => {
    const { data } = await axios.delete(`/events/orders/${id}`);

    return data;
}