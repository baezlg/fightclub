import React, { useState } from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
SwiperCore.use([Autoplay]);

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__overlay"></div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        effect="fade"
        className="featured__slider"
      >
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1593352216894-89108a0d2653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1611816153165-fed23698666d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1576149146095-caa19d4de102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80"
            alt="slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Featured;
