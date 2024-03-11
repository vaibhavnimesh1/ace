import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
 
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper bg-black "
        height="400px"
      >
        <SwiperSlide>
          <img
            src="
        https://images.pexels.com/photos/5477755/pexels-photo-5477755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="
            https://images.pexels.com/photos/1216346/pexels-photo-1216346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="
            https://images.pexels.com/photos/4253690/pexels-photo-4253690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
       
   
      </Swiper>
  );
}
