import axios from '@/lib/axios';
import { EventVenue } from '@/interfaces/event';

export const getEventsVenues = async () => {
    const { data } = await axios.get(`/events/venues/`);
    return data;
};

export const createEventVenue = async (venue: EventVenue) => {
    const { data } = await axios.post(`/events/venues/`, venue);

    return data;
}

export const readEventVenue = async (id: string) => {
    const { data } = await axios.get(`/events/venues/${id}`);

    return data;
}

export const updateEventVenue = async (id: string, venue: EventVenue) => {
    const { data } = await axios.put(`/events/venues/${id}`, venue);

    return data;
}

export const deleteEventVenue = async (id: string) => {
    const { data } = await axios.delete(`/events/venues/${id}`);

    return data;
}