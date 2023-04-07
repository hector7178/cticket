import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { EventDate } from "./program/eventDate";

export const EventDateSalider = () => {
  const dates = [
    { month: "March", date: "8", day: 'Friday' },
    { month: "March", date: "9", day: 'Friday' },
    { month: "March", date: "10", day: 'Friday' },
    { month: "March", date: "11", day: 'Friday' },
    { month: "March", date: "12", day: 'Friday' },
    { month: "March", date: "13", day: 'Friday' },
    { month: "March", date: "14", day: 'Friday' },
    { month: "March", date: "15", day: 'Friday' },
    { month: "March", date: "16", day: 'Friday' },
    { month: "March", date: "17", day: 'Friday' },
    { month: "March", date: "18", day: 'Friday' },
    { month: "March", date: "19", day: 'Friday' },
    { month: "March", date: "20", day: 'Friday' }
]

  return (
    <div className="w-[100%] h-40 flex flex-row items-center">
      <Swiper
        slidesPerView={9}
        keyboard={true}
        navigation={true}
        modules={[Navigation, Keyboard]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          // when window width is >= 980px
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          },
          // when window width is >= 1280px
          1640: {
            slidesPerView: 9,
            spaceBetween: 40
          }
        }}
      >
        {dates.map((date) => (
          <SwiperSlide key={date.date}>
            <EventDate month={date.month} date={date.date} day={date.day} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
