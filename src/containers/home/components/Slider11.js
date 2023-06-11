import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay } from "swiper";

const Slider11 = () => {
  return (
    <>
      <Swiper

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Autoplay]}


        className="mySwiper rounded-lg "
      >
        <div className="bg-white rounded-md ml-10">
          <SwiperSlide className="relative ">
            <img className="w-full h-80" src="https://www.hidoctor.ir/wp-content/uploads/2014/06/Strawberries-photos-tootfarangi-17.jpg" />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full h-80" src="https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1394/09/02/139409021117595456560604.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-80" src="https://tiktarh.com/wp-content/uploads/2023/05/Shfrvg1001409www.tiktarh.com_.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}


export default Slider11;
