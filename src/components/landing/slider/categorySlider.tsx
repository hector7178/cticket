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
import { CustomCategory } from "./category/customCategory";

export const CategorySlider = () => {
  const categories = [
    { name: "Artes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cine", src: "/images/events/category/cine.png", selected: false },
    { name: "dance", src: "/images/events/category/dance.png", selected: true },
    { name: "Artes xsVisuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Ci1ne", src: "/images/events/category/cine.png", selected: false },
    { name: "Da2nza", src: "/images/events/category/dance.png", selected: true },
    { name: "Arwtes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cisne", src: "/images/events/category/cine.png", selected: false },
    { name: "Danxza", src: "/images/events/category/dance.png", selected: true },
    { name: "Artfes Visuales", src: "/images/events/category/arts.png", selected: true },
    { name: "Cinte", src: "/images/events/category/cine.png", selected: false },
    { name: "Da3nza", src: "/images/events/category/dance.png", selected: true },
]

  return (
    <div className="w-[60%] md:w-[60%] h-40 flex flex-row items-center">
      <Swiper
        slidesPerView={7}
        keyboard={true}
        navigation={true}
        modules={[Navigation, Keyboard]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 980px
          1024: {
            slidesPerView: 7,
            spaceBetween: 40
          }
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <CustomCategory name={category.name} srcImage={category.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
