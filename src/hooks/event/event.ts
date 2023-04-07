import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getEvents,
  createEvent,
  readEvent,
  updateEvent,
  deleteEvent,
} from '@/api/event/event';
import { Event } from '@/interfaces/event';

const key = 'event';

export function useEvents() {
  return useQuery<Event[]>([key], getEvents);
}

export function useEvent(event_id: string) {
  return useQuery<Event>([key, event_id], () => readEvent(event_id as any));
}
