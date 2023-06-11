import Slider1 from "@/containers/home/components/sliders/Slider1";
import Slider2 from "@/containers/home/components/sliders/Slider2";
import { Icon } from "@iconify/react";
import next from "next";
import 'animate.css';
import Item2 from "../../components/product-item/Item2"
import React, { useState } from "react";
import ProductDetail from "../product-detail/ProductDetai"

import Link from "next/link";
import Slider3 from "./components/sliders/Slider3";
import Slider4 from "./components/sliders/Slider4";


const Home = () => {
    const [showStatus, setShowStatus] = useState({
        slider1: false,
        slider2: false,
        slider3: false,
        slider4: false,
    })
    const showHandler = (params) => {
        setShowStatus(prev => ({ ...prev, ...params }))

    }
    return (

        <div className="bg-gray-50 pt-2 sm:pt-5 p-2 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-6  ">
                <div className="col-span-4 sm:p-2 " >
                  <Slider1/>
                </div>
                <div className="col-span-2 p-1 hidden sm:grid  sm:mt-3 " >
                    <Link href={'/ProductDetails'}>
                        <div className="relative">
                            <img className=" rounded-lg w-[415px] h-[200px]" src="https://www.jowhareh.com/images/Jowhareh/galleries/large_c98dc20a-2656-45c6-9b57-4e47485ead93.webp" />

                        </div>
                    </Link>
                    <Link href={'/ProductDetails'}>
                        <div className="relative ">
                            <img className="  rounded-lg w-[415px] h-[200px]" src="https://pikfree.ir/wp-content/uploads/edd/2020/12/apricot-with-leaves-wooden-background-Top.jpg" />

                        </div>
                    </Link>

                </div>
            </div>


            <div className="flex justify-between bg-white mx-0 sm:mx-3 border border-solid border-gray-200 rounded-lg shadow-sm mt-2 sm:mt-8">
                <div className="p-5 w-1/4 hidden sm:flex flex-col">
                    <h2 className="text-black text-lg font-bold w-auto">چرا از باغچه خرید کنیم؟</h2>
                    <div className="flex cursor-pointer">
                        <h6 className="text-gray-600 font-bold pt-2 w-auto carsou">بیشتر بخوانید</h6>
                        <Icon className='mt-3   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                    </div>
                </div>
                <div className="  sm:flex justify-center items-center  sm:hover:shadow-md transition-all mr-1 sm:mr-0 p-0 py-1 sm:py-0 sm:p-2  sm:w-1/4">
                    <Icon className=' w-6 sm:w-10 h-fit mr-6 sm:mr-0 ml-0 sm:ml-2  text-blue-700 border border-gray-400 rounded-full p-1' icon="material-symbols:verified-user-outline-sharp" />
                    <div className="flex-col w-auto">
                        <h3 className="text-black font-bold w-auto  text-sm sm:text-lg ">اطمینان در خرید</h3>
                        <h6 className="text-gray-500  w-auto hidden sm:flex">انتقال وجه بعد از تحویل و تایید کالا</h6>
                    </div>
                </div>
                <div className="   sm:flex justify-center items-center  sm:hover:shadow-md transition-all p-0 py-1 sm:py-0 sm:p-2 sm:w-1/4">
                    <Icon className=' w-6 sm:w-10 h-fit mr-5 sm:mr-0 ml-0 sm:ml-2 text-blue-700 border border-gray-400 rounded-full p-1' icon="eos-icons:products-outlined" />
                    <div className="flex-col w-auto">
                        <h3 className="text-black font-bold w-auto  text-sm sm:text-lg ">تنوع بالای کالا</h3>
                        <h6 className="text-gray-500  w-auto hidden sm:flex">خرید از بین بیش از 700 هزار کالا </h6>
                    </div>
                </div>
                <div className="  sm:flex justify-center items-center  sm:hover:shadow-md transition-all p-0  py-1 sm:py-0 sm:p-2 sm:w-1/4 ">
                    <Icon className=' w-6 sm:w-10 h-fit mr-5  sm:mr-0 ml-0 sm:ml-2 text-blue-700 border border-gray-400 rounded-full p-1' icon="material-symbols:quick-reference-all-outline" />
                    <div className="  flex-col w-auto ml-1 ">
                        <h3 className="text-black w-auto  font-bold text-sm sm:text-lg  ">پیگیری سریع</h3>
                        <h6 className="text-gray-500  w-auto hidden sm:flex">وضعیت کالای خودرا در باغچه من برسی </h6>
                    </div>
                </div>
            </div>

            <div className="sm:p-2 ">
                <div className="flex justify-between sm:justify-start mt-10 sm:mt-10  ">
                    <h4 className="text-md sm:text-xl font-bold text-gray-900 mb-4"> میوه هایه تازه</h4>
                    <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                    <Link href={'/ProductDetails'}>
                        <div className="flex cursor-pointer">
                            <h6 className="sm:text-lg text-md  font-bold  text-gray-600  ">نمایش همه</h6>
                            <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                        </div>
                    </Link>
                </div>
                <Link className="" href={'/ProductDetails'}>
                    <Slider2 />
                </Link>
            </div>


            <div className="pt-5 w-full " >
                <div className=" hidden sm:flex">
                    <Item2 />
                </div>
                <div className=" flex sm:hidden w-full">
                    <Slider3 />
                </div>
            </div>


            <div className="sm:p-2 ">
                <div className="flex  justify-between sm:justify-start mt-5 sm:mt-5">
                    <h4 className="text-md sm:text-xl font-bold text-gray-900 mb-4"> میوه هایه تابستانی  </h4>
                    <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                    <Link href={'/ProductDetails'}>
                        <div className="flex cursor-pointer">
                            <h6 className="sm:text-lg text-md font-bold  text-gray-600 cursor-pointer">نمایش همه</h6>
                            <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                        </div>
                    </Link>
                </div>
                <Link href={'/ProductDetails'}>
                    <Slider2 />
                </Link>
            </div>

            <div className="sm:p-2 ">
                <div className="flex  justify-between sm:justify-start  mt-5 ">
                    <h4 className="text-md sm:text-xl text-gray-900 font-bold mb-4">     محصولات تخفیفی      </h4>
                    <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                    <Link href={'/ProductDetails'}>
                        <div className="flex">
                            <h6 className="sm:text-lg text-md font-bold  text-gray-600 cursor-pointer">نمایش همه</h6>
                            <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                        </div>
                    </Link>
                </div>
                <Link href={'/ProductDetails'}>
                    <Slider4 />
                </Link>
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-0 mt-5  sm:p-2">
                <Link href={'/ProductDetails'}>
                    <div className="relative">
                        <img className="w-full h-56 rounded-lg" src="https://sabziman.com/images/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%B3%D8%A8%D8%B2%DB%8C-%D8%AE%D9%88%D8%B1%D8%AF%D9%86.jpg" />

                    </div>
                </Link>
                <Link href={'/ProductDetails'}>
                    <div className="relative">
                        <img className="w-full h-56 rounded-lg  " src="https://server01.farsibeauty.com/public/articles/content/2023/4/md/2df60c7c-f6db-4f14-9a57-afda001372ed-%D8%B3%D8%A8%D8%B2%DB%8C%D8%AC%D8%A7%D8%AA.jpg" />

                    </div>
                </Link>
            </div>

            <div className="sm:p-2 ">
                <div className="flex  justify-between sm:justify-start  mt-5 ">
                    <h4 className="text-md sm:text-xl text-gray-900 font-bold mb-4">    تخفیف ویژه </h4>
                    <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                    <Link href={'/ProductDetails'}>
                        <div className="flex">
                            <h6 className="sm:text-lg text-md font-bold  text-gray-600 cursor-pointer">نمایش همه</h6>
                            <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                        </div>
                    </Link>
                </div>
                <Link href={'/ProductDetails'}>
                    <Slider4 />
                </Link>
            </div>

            <div className="grid grid-cols-1  sm:py-5 sm:mt-5  sm:p-3">
                <Link href={'/ProductDetails'}>
                    <div className=" hidden sm:flex">
                        <img className="w-full h-[200px] rounded-lg" src="https://www.jowhareh.com/images/Jowhareh/galleries/large_c98dc20a-2656-45c6-9b57-4e47485ead93.webp" />

                    </div>
                </Link>

            </div>

            <div className="sm:p-2 ">
                <div className="flex justify-between sm:justify-start mt-5 ">
                    <h4 className=" text-md sm:text-xl  text-gray-900 font-bold mb-4">میوه های پیشنهادی  </h4>
                    <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                    <Link href={'/ProductDetails'}>
                        <div className="flex">
                            <h6 className="sm:text-lg text-md font-bold  text-gray-600  cursor-pointer">نمایش همه</h6>
                            <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                        </div>
                    </Link>
                </div>
                <Link href={'/ProductDetails'}>
                    <Slider4 />
                </Link>
            </div>


            <div className="sm:p-2 relative">
                <div className="flex justify-between sm:justify-start mt-5  ">
                    <h4 className=" text-md sm:text-xl  text-gray-900 font-bold mb-4">محصولات  گلخانه ای    </h4>
                    <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                    <Link href={'/ProductDetails'}>
                        <div className="flex">
                            <h6 className="sm:text-lg text-md font-bold  text-gray-600  cursor-pointer">نمایش همه</h6>
                            <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                        </div>
                    </Link>
                </div>
                <Link href={'/ProductDetails'}>
                    <Slider2 />
                </Link>
                {
                    !showStatus.slider4 &&
                    <button
                        onClick={() => showHandler({ slider4: !showStatus.slider4 })}
                        className=" absolute  right-9 sm:right-80 mr-7 sm:mr-60 mt-5 border hover:border-gray-300 w-60 h-14 bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-gray-700 font-bold">نمایش بیشتر...   </button>

                }            </div>



            {
                showStatus.slider4 &&
                <div className="sm:p-2 alert">
                    <div className="flex justify-between sm:justify-start mt-5  ">
                        <h4 className="sm:text-xl text-md text-gray-900 font-bold mb-4">  محصولات زمستانی  </h4>
                        <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                        <Link href={'/ProductDetails'}>
                            <div className="flex">
                                <h6 className="sm:text-lg text-md font-bold  text-gray-600  cursor-pointer">نمایش همه</h6>
                                <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                            </div>
                        </Link>
                    </div>
                    <Link href={'/ProductDetails'}>
                        <Slider2 />
                    </Link>
                    {
                        !showStatus.slider3 &&
                        <button
                            onClick={() => showHandler({ slider3: !showStatus.slider3 })}
                            className=" absolute  right-11 sm:right-80  mr-7 sm:mr-60  mt-5 border hover:border-gray-300 w-60 h-14 bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-gray-700 font-bold">نمایش بیشتر...   </button>

                    }
                </div>
            }

            {
                showStatus.slider3 &&
                <div className="sm:p-2 alert">
                    <div className="flex justify-between sm:justify-start mt-5  ">
                        <h4 className="sm:text-xl text-md text-gray-900 font-bold mb-4">محصولات بسنه بندی شده</h4>
                        <h6 className="px-3 text-gray-400 hidden md:flex" >|</h6>
                        <Link href={'/ProductDetails'}>
                            <div className="flex">
                                <h6 className="sm:text-lg text-md font-bold  text-gray-600  cursor-pointer">نمایش همه</h6>
                                <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                            </div>
                        </Link>
                    </div>
                    <Link href={'/ProductDetails'}>
                        <Slider2 />
                    </Link>
                    {
                        !showStatus.slider2 &&
                        <button
                            onClick={() => showHandler({ slider2: !showStatus.slider2 })}
                            className=" absolute  right-11 sm:right-80  mr-7 sm:mr-60  mt-5 border hover:border-gray-300 w-60 h-14 bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-gray-700 font-bold">نمایش بیشتر...   </button>

                    }
                </div>
            }

            {
                showStatus.slider2 &&

                <div className="sm:p-2 alert">
                    <div className="flex justify-between sm:justify-start mt-5  ">
                        <h4 className="sm:text-xl text-md text-gray-900 font-bold mb-4">   محصولات وارداتی </h4>
                        <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                        <Link href={'/ProductDetails'}>
                            <div className="flex">
                                <h6 className="sm:text-lg text-md font-bold  text-gray-600  cursor-pointer">نمایش همه</h6>
                                <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                            </div>
                        </Link>
                    </div>
                    <Link href={'/ProductDetails'}>
                        <Slider2 />
                    </Link>
                    {
                        !showStatus.slider1 &&
                        <button
                            onClick={() => showHandler({ slider1: !showStatus.slider1 })}
                            className=" absolute  right-11 sm:right-80  mr-7 sm:mr-60  mt-5 border hover:border-gray-300 w-60 h-14 bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-gray-700 font-bold">نمایش بیشتر...   </button>

                    }

                </div>
            }
            {
                showStatus.slider1 &&

                <div className="sm:p-2 alert ">
                    <div className="flex justify-between sm:justify-start mt-5  ">
                        <h4 className="sm:text-xl text-md text-gray-900 font-bold mb-4">   محصولات خاص   </h4>
                        <h6 className="px-3 text-gray-400 hidden sm:flex" >|</h6>
                        <Link href={'/ProductDetails'}>
                            <div className="flex">
                                <h6 className="sm:text-lg text-md font-bold  text-gray-600  cursor-pointer">نمایش همه</h6>
                                <Icon className='mt-1   mx-0 sm:mx-2 w-4 sm:w-5 h-fit  text-gray-600  ' icon="ic:baseline-keyboard-arrow-left" />
                            </div>
                        </Link>
                    </div>
                    <Link href={'/ProductDetails'}>
                        <Slider2 />
                    </Link>

                </div>
            }

           







        </div>


    )
}
export default Home;



