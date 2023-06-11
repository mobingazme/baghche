import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

const Slider3=()=> {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" ">
          <Link href={'/ProductDetails'}>

            <img className="rounded-lg w-full h-60" src="https://i1.delgarm.com/i/828/9912/17/6044c5e29f6e3.jpg" />

          </Link>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <Link href={'/ProductDetails'}>

            <img className="rounded-lg w-full h-60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuwUn_qjU3GuOm1B0C38Ie2AZI2gXjqNqeQ&usqp=CAU" />

          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link href={'/ProductDetails'}>

            <img className="rounded-lg w-full h-60" src="https://i1.delgarm.com/i/828/9911/28/602b7a531d67e.jpg" />

          </Link>
        </SwiperSlide>

        <SwiperSlide className="">
          <Link href={'/ProductDetails'}>

            <Link href={'/ProductDetails'}>

              <img className="rounded-lg w-full h-60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxXnCjwd4D4J3av9Tt06s7PEl-iWQ5FnNaV2fj9ySo1xYI7OV1HWOLuLsPPG3BPy5gcM&usqp=CAU" />
            </Link>

          </Link>
        </SwiperSlide>

      </Swiper>
    </>
  );
}


export default Slider3;