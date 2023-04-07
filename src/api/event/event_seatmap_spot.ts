import axios from '@/lib/axios';
import { EventSeatmapSpot } from '@/interfaces/event';

export const getEventsSeatmapsSpots = async () => {
    const { data } = await axios.get(`/events/seatmaps/spots/`);
    return data;
};

export const createEventSeatmapSpot = async (seatmap: EventSeatmapSpot) => {
    const { data } = await axios.post(`/events/seatmaps/spots/`, seatmap);

    return data;
}

export const readEventSeatmapSpot = async (id: string) => {
    const { data } = await axios.get(`/events/seatmaps/spots/${id}`);

    return data;
}

export const updateEventSeatmapSpot = async (id: string, seatmap: EventSeatmapSpot) => {
    const { data } = await axios.put(`/events/seatmaps/spots/${id}`, seatmap);

    return data;
}

export const deleteEventSeatmapSpot = async (id: string) => {
    const { data } = await axios.delete(`/events/seatmaps/spots/${id}`);

    return data;
}