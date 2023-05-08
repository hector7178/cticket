import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  createEventVenue,
  deleteEventVenue,
  getEventsVenues,
  readEventVenue,
  updateEventVenue,
} from '@/api/event/event_venue';
import { EventVenue } from '@/interfaces/event';

const key = 'event_venue';

export function useEventsVenues() {
  return useQuery<EventVenue[]>([key], getEventsVenues);
}

export function useEventVenue(event_venue_id: string) {
  return useQuery<EventVenue>([key, event_venue_id], () =>
    readEventVenue(event_venue_id as any)
  );
}

export function useCreateEventVenue() {
  const queryClient = useQueryClient();

  return useMutation(createEventVenue, {
    onSuccess: () => queryClient.invalidateQueries([key]),
  });
}
