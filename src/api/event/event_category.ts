import axios from '@/lib/axios';
import { EventCategory } from '@/interfaces/event';

export const getEventsCategories = async () => {
    const { data } = await axios.get(`/events/categories/`);
    return data;
};

export const createEventCategory = async (category: EventCategory) => {
    const { data } = await axios.post(`/events/categories/`, category);

    return data;
}

export const readEventCategory = async (id: string) => {
    const { data } = await axios.get(`/events/categories/${id}`);

    return data;
}

export const updateEventCategory = async (id: string, category: EventCategory) => {
    const { data } = await axios.put(`/events/categories/${id}`, category);

    return data;
}

export const deleteEventCategory = async (id: string) => {
    const { data } = await axios.delete(`/events/categories/${id}`);

    return data;
}