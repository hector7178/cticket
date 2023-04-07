import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getEventsSchedules,
  createEventSchedule,
  readEventSchedule,
  updateEventSchedule,
  deleteEventSchedule,
} from '@/api/event/event_schedule';
import { EventSchedule } from '@/interfaces/event';

const key = 'event_schedule';

export function useEventSchedules() {
  return useQuery<EventSchedule[]>([key], getEventsSchedules);
}

export function useEventSchedule(event_schedule_id: string) {
  return useQuery<EventSchedule>([key, event_schedule_id], () => readEventSchedule(event_schedule_id as any));
}
