import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Slider1 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  console.log(
    nextRef.current)
  return (



    <>
      <Swiper

        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current
        }
        }
        modules={[Autoplay, Navigation, Pagination]}
        watchSlidesProgress


        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = nextRef.current
            swiper.params.navigation.nextEl = prevRef.current

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          }, 0)
        }}
        className="mySwiper rounded-lg "
      >

        <SwiperSlide>
          <Link href={'/ProductDetails'}>
            <img className="w-full h-[430px] " src="https://digitbox.ir/upload/images/products/821/2022-09-10/1662844029/%D9%BE%D8%B3-%D8%B2%D9%85%DB%8C%D9%86%D9%87-%D8%B3%D8%A8%D8%AF-%D8%AA%D9%88%D8%AA-%D9%81%D8%B1%D9%86%DA%AF%DB%8C-big.jpeg" />
          </Link>
        </SwiperSlide>
        
        <SwiperSlide>
          <Link href={'/ProductDetails'}>
            <img className="w-full  h-[430px]" src="https://www.jowhareh.com/images/Jowhareh/galleries_4/poster_106debbf-16b5-4155-97fb-62cb65a872e0.jpeg" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/ProductDetails'}>
            <img className="w-full  h-[430px]" src="https://newshopkala.com/media/2021/01/pear-1280x720-fruit-5k-153503.jpg" />
          </Link>
        </SwiperSlide>
        <button className="absolute top-1/2 z-40 hidden sm:flex " ref={nextRef}>
          <Icon className='  text-white w-10 h-10' icon="material-symbols:chevron-right-rounded" />

        </button>
        <button className="absolute top-1/2 z-40 hidden sm:flex  left-0" ref={prevRef}>
          <Icon className='  text-white w-10 h-10  ' icon="ic:baseline-keyboard-arrow-left" />


        </button>


      </Swiper>
    </>
  );
}


export default Slider1;

