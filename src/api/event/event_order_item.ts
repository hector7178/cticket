import axios from '@/lib/axios';
import { EventOrderItem } from '@/interfaces/event';

export const getEventOrdersItems = async () => {
    const { data } = await axios.get(`/events/orders/items/`);
    return data;
};

export const createEventOrderItem = async (order_item: EventOrderItem) => {
    const { data } = await axios.post(`/events/orders/items/`, order_item);

    return data;
}

export const readEventOrderItem = async (id: string) => {
    const { data } = await axios.get(`/events/orders/items/${id}`);

    return data;
}

export const updateEventOrderItem = async (id: string, order_item: EventOrderItem) => {
    const { data } = await axios.put(`/events/orders/items/${id}`, order_item);

    return data;
}

export const deleteEventOrderItem = async (id: string) => {
    const { data } = await axios.delete(`/events/orders/items/${id}`);

    return data;
}