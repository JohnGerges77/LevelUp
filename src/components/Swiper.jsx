import React from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function SwiperGames({ games }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      loop
      centeredSlides
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 25,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
      className="w-full pb-10"
    >
      {games.map((game) => (
        <SwiperSlide
          key={game._id}
          className="h-[220px] sm:h-[260px] md:h-[290px]"
        >
          <div className="
            relative w-full h-full rounded-3xl overflow-hidden
            bg-cover bg-center
          ">
            <img
              src={game.img}
              alt={game.title}
              className="
                absolute inset-0 w-full h-full
                object-cover brightness-75
              "
            />

            {/* Text Overlay */}
            <div className="
              absolute bottom-4 left-4 right-4
              text-stone-50 z-10
            ">
              <h1 className="text-lg md:text-xl font-bold">
                {game.title}
              </h1>
              <p className="text-slate-300 text-xs md:text-sm line-clamp-2">
                {game.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperGames;
