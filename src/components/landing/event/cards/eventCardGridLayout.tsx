/** @format */
import { EventCardGrid } from "./eventCardGrid";

export const EventCardGridLayout = () => {
    return (
        <div className= "grid grid-cols-[repeat(auto-fit,_20.7rem)] place-content-center gap-x-2">
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
            <EventCardGrid />
        </div>
  );
}