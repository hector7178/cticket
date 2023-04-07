/** @format */
import { EventCardList } from "./eventCardList";

export const EventCardListLayout = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center space-y-6 gap-x-2">
      <EventCardList />
      <EventCardList />
      <EventCardList />
      <EventCardList />
    </div>
  );
}