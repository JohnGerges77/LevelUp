import React, { useState } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa"
// import Swiper from 'swiper';
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
import styled from "styled-components";




function SwiperGames({ games }) {
  const [active, setactive] = useState(false);
  function handleActive() {
    setactive(!active);
  }
  return (


    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={2}
      spaceBetween={50}
      navigation={true}
      loop={true}
      centeredSlides={"auto"}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
       autoplay={{
          delay:3000,
          disableOnInteraction:false,
       }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="w-[95%] pb-7"
    >
      
      {games.map((game) => (
        <SwiperSlide key={game._id} className=" h-[290px] w-[550px] ">
          <div
            className="overflow-hidden 
            p-[30px] w-[100%] h-[100%]
             relative bg-cover bg-center after:inset-0 
             after:absolute "
          >
            <img
              src={game.img}
              alt={game.title}
              className="absolute rounded-[30px] left-5 top-0 w-[90%]
               h-[100%] 
              object-cover object-center brightness-75
              "
            />
            <div>
              {/* <iframe className={`youtube_video ${ active?'active':''}`}
              width="1200"
              height="720"
              src={game.trailer}
              title={game.title}
              allowFullScreen
              allow="accelerometer; clipboard-write; encrypted-media; gyroscpe; picture-in-picture;"
              >

                </iframe> */}
            </div>
           
            <div className="absolute bottom-[20px] z-50 w-[70%] text-stone-50">
              <h1 className="logo">{game.title}</h1>
              <p className="text-slate-300 text-[.8rem]">{game.description}</p>
              <div className="inline-flex items-center gap-[20px]">
              
            
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperGames;
