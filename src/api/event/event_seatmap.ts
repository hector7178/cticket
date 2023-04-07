import axios from '@/lib/axios';
import { EventSeatmap } from '@/interfaces/event';

export const getEventsSeatmaps = async () => {
    const { data } = await axios.get(`/events/seatmaps/`);
    return data;
};

export const createEventSeatmap = async (seatmap: EventSeatmap) => {
    const { data } = await axios.post(`/events/seatmaps/`, seatmap);

    return data;
}

export const readEventSeatmap = async (id: string) => {
    const { data } = await axios.get(`/events/seatmaps/${id}`);

    return data;
}

export const updateEventSeatmap = async (id: string, seatmap: EventSeatmap) => {
    const { data } = await axios.put(`/events/seatmaps/${id}`, seatmap);

    return data;
}

export const deleteEventSeatmap = async (id: string) => {
    const { data } = await axios.delete(`/events/seatmaps/${id}`);

    return data;
}