import axios from '@/lib/axios';
import { EventServiceCategory } from '@/interfaces/event';

export const getEventsServicesCategories = async () => {
    const { data } = await axios.get(`/events/services/categories/`);
    return data;
};

export const createEventServiceCategory = async (service_category: EventServiceCategory) => {
    const { data } = await axios.post(`/events/services/categories/`, service_category);

    return data;
}

export const readEventServiceCategory = async (id: string) => {
    const { data } = await axios.get(`/events/services/categories/${id}`);

    return data;
}

export const updateEventServiceCategory = async (id: string, service_category: EventServiceCategory) => {
    const { data } = await axios.put(`/events/services/categories/${id}`, service_category);

    return data;
}

export const deleteEventServiceCategory = async (id: string) => {
    const { data } = await axios.delete(`/events/services/categories/${id}`);

    return data;
}