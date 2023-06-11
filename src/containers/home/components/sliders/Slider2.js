import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules
import {    } from "swiper";


const Slider2 = () => {
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
          slidesPerView: 1.75,
          spaceBetween: 0
        },
        576: {
          // width: 576,
          slidesPerView: 2.5,
          spaceBetween: 0
        },
        768: {
          // width: 768,
          slidesPerView: 4,
          spaceBetween: 0
        },
        1024: {
          // width: 768,
          slidesPerView: 7,
          spaceBetween: 0
        },
      }}
    
        spaceBetween={30}
        centeredSlides={true}
      
        
        loop={true}
       

      className="mySwiper shadow-sm"
    >



      <div className="bg-white">

     

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/5e83013bdd8d3d5f5c420bf7d2249c419c318e5e_1625308028.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">    طالبی  </h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">12,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/33e2bf793c3193336ff077f6b858501c5dfb52f8_1633930411.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">    شلیل</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">20,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        

       
        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/111739812.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   انگوریاقوتی</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">600,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/997f85045f05d837803b9b8018454396a799d67c_1625303009.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   موز</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">80,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/4467320.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   نارگیل</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">100,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/b47a67eb95476e52583cbad33ffc574e9d81a5ef_1618390770.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   هندوانه</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">6,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/dbda82235bcf69780179a7e1575d440eb480d317_1631442261.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   لیمو ترش</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">60,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/7039a6a0cc1d7273db5d36e1e590d4b02f89de77_1611555812.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   پرتغال</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">9,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/859f8d9fb7d1e9e0c0e9f4d99d61a7a74340bfa8_1618390466.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   خیار</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">600,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/b47a67eb95476e52583cbad33ffc574e9d81a5ef_1618390770.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   هندوانه</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">6,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/7039a6a0cc1d7273db5d36e1e590d4b02f89de77_1611555812.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   پرتغال</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">9,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

      
        <SwiperSlide className="bg-white" >
          <div className="p-2 hover:shadow-md transition-all   flex-col w-40">
            <img className="w-48 h-48" src="https://dkstatics-public.digikala.com/digikala-products/997f85045f05d837803b9b8018454396a799d67c_1625303009.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" />
            <div className="flex-col  ">
              <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900 text-lg pt-2">   موز</h6>
                <div className="flex justify-end  pt-5">
                  <h4 className="text-black font-bold">80,000</h4>
                  <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>



      </div>
    </Swiper>

  );
}

export default Slider2










