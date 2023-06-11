






import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules

import { Icon } from "@iconify/react";
import ProductItem from "@/components/product-item/ProductItem";

const Slider4 = () => {

  const myList = [
    {
      id: 1,
      title: 'طالبی'  ,
      endTime: '1401/12/29 14:00:05',
      price: 12000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/5e83013bdd8d3d5f5c420bf7d2249c419c318e5e_1625308028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: 'شلیل  ',
      endTime: '1401/12/29 14:00:05',
      price: 20000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/33e2bf793c3193336ff077f6b858501c5dfb52f8_1633930411.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: 'انگور یاقوتی  ',
      endTime: '1401/12/29 14:00:05',
      price: 10000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/111739812.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: 'موز  ',
      endTime: '1401/12/29 14:00:05',
      price: 50000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/997f85045f05d837803b9b8018454396a799d67c_1625303009.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: 'نارگیل  ',
      endTime: '1401/12/29 14:00:05',
      price: 40000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/4467320.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: ' هندوانه ',
      endTime: '1401/12/29 14:00:05',
      price: 880000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/b47a67eb95476e52583cbad33ffc574e9d81a5ef_1618390770.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: 'لیموترش  ',
      endTime: '1401/12/29 14:00:05',
      price: 7000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/dbda82235bcf69780179a7e1575d440eb480d317_1631442261.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },
    {
      id: 1,
      title: 'پرتغال  ',
      endTime: '1401/12/29 14:00:05',
      price: 10000,
      img: 'https://dkstatics-public.digikala.com/digikala-products/7039a6a0cc1d7273db5d36e1e590d4b02f89de77_1611555812.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
    },

  ]


  return (

    <Swiper

      breakpoints={{
        0: {
          // width: 576,
          slidesPerView: 1,
          spaceBetween: 0
        },
        320: {
          // width: 576,
          slidesPerView: 1.5,
          spaceBetween: 0
        },
        500: {
          // width: 576,
          slidesPerView: 2,
          spaceBetween: 0
        },
        768: {
          // width: 768,
          slidesPerView: 3,
          spaceBetween: 0
        },
        1024: {
          // width: 768,
          slidesPerView: 6,
          spaceBetween: 0
        },
      }}





      className="mySwiper shadow-sm"
    >



      <div className="">






        {
          myList.map(item => {
            return (

              <SwiperSlide key={item.id} className="p-1 bg-white" >
                <ProductItem item={item} />


              </SwiperSlide>


            )
          })
        }






      </div>
    </Swiper>

  );
}

export default Slider4
















