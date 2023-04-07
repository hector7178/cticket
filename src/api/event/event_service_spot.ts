import axios from '@/lib/axios';
import { EventServiceSpot } from '@/interfaces/event';

export const getEventsServicesSpots = async () => {
    const { data } = await axios.get(`/events/services/spots/`);
    return data;
};

export const createEventServiceSpot = async (service_spot: EventServiceSpot) => {
    const { data } = await axios.post(`/events/services/spots/`, service_spot);

    return data;
}

export const readEventServiceSpot = async (id: string) => {
    const { data } = await axios.get(`/events/services/spots/${id}`);

    return data;
}

export const updateEventServiceSpot = async (id: string, service_spot: EventServiceSpot) => {
    const { data } = await axios.put(`/events/services/spots/${id}`, service_spot);

    return data;
}

export const deleteEventServiceSpot = async (id: string) => {
    const { data } = await axios.delete(`/events/services/spots/${id}`);

    return data;
}