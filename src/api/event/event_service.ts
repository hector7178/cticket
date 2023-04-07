import axios from '@/lib/axios';
import { EventService } from '@/interfaces/event';

export const getEventsServices = async () => {
    const { data } = await axios.get(`/events/services/`);
    return data;
};

export const createEventService = async (service: EventService) => {
    const { data } = await axios.post(`/events/services/`, service);

    return data;
}

export const readEventService = async (id: string) => {
    const { data } = await axios.get(`/events/services/${id}`);

    return data;
}

export const updateEventService = async (id: string, service: EventService) => {
    const { data } = await axios.put(`/events/services/${id}`, service);

    return data;
}

export const deleteEventService = async (id: string) => {
    const { data } = await axios.delete(`/events/services/${id}`);

    return data;
}