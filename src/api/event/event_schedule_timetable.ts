import axios from '@/lib/axios';
import { EventScheduleTimetable } from '@/interfaces/event';

export const getEventsSchedulesTimetables = async () => {
    const { data } = await axios.get(`/events/schedules/timetables/`);
    return data;
};

export const createEventScheduleTimetable = async (schedule_timetable: EventScheduleTimetable) => {
    const { data } = await axios.post(`/events/schedules/timetables/`, schedule_timetable);

    return data;
}

export const readEventScheduleTimetable = async (id: string) => {
    const { data } = await axios.get(`/events/schedules/timetables/${id}`);

    return data;
}

export const updateEventScheduleTimetable = async (id: string, schedule_timetable: EventScheduleTimetable) => {
    const { data } = await axios.put(`/events/schedules/timetables/${id}`, schedule_timetable);

    return data;
}

export const deleteEventScheduleTimetable = async (id: string) => {
    const { data } = await axios.delete(`/events/schedules/timetables/${id}`);

    return data;
}