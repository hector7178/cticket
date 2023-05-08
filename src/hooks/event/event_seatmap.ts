import { useQuery } from '@tanstack/react-query';
import {
  createEventSeatmap,
  deleteEventSeatmap,
  getEventsSeatmaps,
  readEventSeatmap,
  updateEventSeatmap,
} from '@/api/event/event_seatmap';
import { EventSeatmap } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_seatmap';

export function useEventSeatmaps() {
  return useQuery<EventSeatmap[]>([key], getEventsSeatmaps);
}

export function useEventSeatmap(event_seatmap_id: string) {
  return useQuery<EventSeatmap>([key, event_seatmap_id], () =>
    readEventSeatmap(event_seatmap_id)
  );
}
