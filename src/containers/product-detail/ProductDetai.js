import useCountdown from "./../../hooks/useCountdown";
import React, { useEffect, useState } from "react"
import Slider11 from "../home/components/Slider11";
const { Icon } = require("@iconify/react");
import Slider2 from "../home/components/sliders/Slider2";
import Slider3 from "../home/components/sliders/Slider3";
import Slider4 from "../home/components/sliders/Slider4";
import Slider5 from "../home/components/sliders/slider5";
import Loginn from './../../components/login/Loginn';



const ProductDetail = () => {
    const [Login, setLogin] = useState(false)
    const countdown = useCountdown('1402/01/01 00:00:01')
 
    return (
        <div className="w-fill bg-gray-50 p-0 sm:p-5 relative sm:absolute">
            <div className="grid grid-cols-1 sm:grid-cols-8 gap-7">
                <div className=" col-span-6  ">

                    <div className="bg-white grid grid-cols-1 sm:grid-cols-4  pt-10  p-5 sm:p-10 border rounded-lg">
                        <div className="sm:col-span-2 ">
                            <div >
                                <Slider11 />
                            </div>
                            <div className=" w-80 pt-5 hidden sm:flex">
                                <div className="border rounded-lg"> <img className="w-20 h-fit" src="https://www.hidoctor.ir/wp-content/uploads/2014/06/Strawberries-photos-tootfarangi-17.jpg" /></div>
                                <div className="border rounded-lg mx-4"> <img className="w-20 h-fit" src="https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1394/09/02/139409021117595456560604.jpg" /></div>
                                <div className="border rounded-lg"> <img className="w-20 h-fit" src="https://tiktarh.com/wp-content/uploads/2023/05/Shfrvg1001409www.tiktarh.com_.jpg" /></div>
                            </div>
                        </div>


                        <div className=" ">
                            <div className="flex justify-between mr-14 sm:mr-3 sm:mt-10  border-b border-[#fd7904] absolute top-0">
                                <h4 className="text-xl text-[#fd7904] bg-[#fff3f0] rounded-full p-1 ">مزایده</h4>
                                <div className="text-2xl text-black rounded-full p-1  " dir="ltr">{`${countdown?.days} : ${countdown?.hours} : ${countdown?.minutes} : ${countdown?.seconds}`} </div>
                            </div>
                            <div className="sm:col-span-2 w-80 pr-0 sm:pr-3 pt-6 sm:pt-5   ">
                                <h2 className="text-2xl text-black  h-fit font-bold mt-3 w-full ">  توت فرنگی   </h2>
                                <p className="text-lg text-gray-500  h-fit py-4">     توت فرنگی گلخانه ای  <br className="flex md:hidden" />   قیمت برایه هر 1کیلوگرم     </p>
                                <h4 className="text-lg text-gray-500  h-fit font-bold ">وضعیت کالا:    <span className="text-blue-400 font-bold">تازه</span></h4>
                                <h4 className="text-lg text-gray-500  h-fit  font-bold">118 بازدید</h4>
                                <h4 className="text-lg text-gray-500  h-fit font-bold ">شماره کالا: 25098264</h4>
                            </div>
                            <div className="pt-5 sm:pt-0 flex-col ">

                                <div className=" flex justify-start pt-3 cursor-pointer">
                                    <h6 className="text-[#0c80ff] font-bold ">جدول پیشنهادات</h6>
                                    <Icon className=' text-[#0c80ff] w-6 h-fit ' icon="ic:baseline-chevron-left" />
                                </div>
                                <div className=" border rounded-lg  w-auto h-14 sm:w-[26rem] mt-2   bg-gray-100">
                                    <h6 className="text-gray-500 font-bold w-full pt-4  pr-3 h-10"> بالا ترین پیشنهاد <span className="text-black taxt-lg">25.000 تومان برایه هرکیلو </span></h6>
                                </div>
                                <div className="w-full">
                                    <h6 className="text-[#0ca96e] text-lg w-80 mt-10">بالا ترین پیشنهاد به قیمت رزرو رسیده است.</h6>
                                    <div className="flex sm:w-[30rem] w-auto">
                                        <button className="text-white  font-bold text-lg rounded-lg  w-full h-14 bg-[#fd7904] transition-all ">  ثبت پیشنهادات   </button>
                                        <div className="mr-2 mt-1 ">
                                            <Icon className='w-12 h-12  border rounded-lg text-gray-500  ' icon="mdi:eye-plus-outline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" pt-5 flex justify-end sm:justify-around  sm:w-[30rem]   ">
                                <div className=" w-fit sm:w-full hover:bg-gray-100 transition-all justify-center items-center  ">
                                    <Icon className='w-8 sm:w-10 h-fit  text-gray-500  p-1  mr-0 sm:mr-12' icon="mdi:cards-heart-outline" />
                                    <h4 className=" text-gray-500 font-bold mr-8 hidden sm:flex">علاقه مندی ها</h4>
                                </div>
                                <div className=" w-fit sm:w-full h-fit hover:bg-gray-100 transition-all sm:mx-5 justify-center items-center ">
                                    <Icon className='w-8 sm:w-10 h-fit justify-center items-center mr-0 sm:mr-12 text-gray-500  p-1' icon="mdi:prohibited" />
                                    <h4 className=" text-gray-500 font-bold mr-8 hidden sm:flex">گزارش تخلف</h4>
                                </div>
                                <div className=" w-fit sm:w-full hover:bg-gray-100 transition-all justify-center items-center">
                                    <Icon className='w-8 sm:w-10 h-fit  text-gray-500 mr-0 sm:mr-12  p-1' icon="material-symbols:share-outline-sharp" />
                                    <h4 className=" text-gray-500 font-bold mr-8 hidden sm:flex">اشتراک گذاری</h4>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="pt-5">
                        <div className="flex justify-between sm:justify-start p-2 ">
                            <h2 className="text-black text-xl">کالا هایه مشابه</h2>
                            <div className="flex pr-8 cursor-pointer">
                                <h4 className="text-gray-700 text-lg ">نمایش همه</h4>
                                <Icon className=' text-gray-700 w-6 h-fit ' icon="ic:baseline-chevron-left" />
                            </div>
                        </div>

                        <div className="border rounded-xl p-4">
                            <Slider5 />
                        </div>


                        <div className="border-t  mt-10 pt-5">
                            <div className="flex ">
                                <button className="flex px-o sm:px-4  text-gray-500 hover:text-gray-700 sm:hover:border-b ">
                                    <Icon className=' mx-2 w-7 h-fit mb-3   ' icon="carbon:white-paper" />
                                    <h4 className="font-bold text-md sm:text-xl ">مشخصات کالا</h4>
                                </button>
                                <button className="flex text-gray-500 hover:text-gray-700 sm:hover:border-b pr-8 sm:pr-0">
                                    <Icon className=' mx-2 w-7 h-fit mb-3   ' icon="mdi:comment-question-outline" />
                                    <h4 className=" font-bold text-md sm:text-xl ">سوال از فروشنده </h4>
                                </button>
                            </div>
                        </div>

                        <div className="border-t sm:border rounded-lg sm:p-10 bg-white ">
                            <h4 className="text-black text-xl sm:text-2xl font-bold pt-5 sm:pt-0 pr-2 sm:pr-0 sm:pb-2">مشخصات کالا</h4>
                            <div className=" sm:border rounded-lg p-5">
                                <div className="flex cursor-pointer pb-2 w-full">
                                    <h4 className="text-gray-500 mx-0 sm:mx-12 text-lg w-1/6">نوع:</h4>
                                    <h4 className="text-blue-500 hover:text-blue-700  w-auto px-5 sm:px-20 sm:text-lg sm:border-r">گلخانه ای</h4>
                                </div>

                                <div className="flex cursor-pointer pt-2 pb-2 w-full sm:border-t bg-white sm:bg-gray-100 rounded-xl">
                                    <h4 className="text-gray-500 mx-0 sm:mx-12 text-lg w-1/6">قیمت:</h4>
                                    <h4 className="text-blue-500 hover:text-blue-700 sm:auto px-0 sm:px-20  sm:text-lg sm:border-r"> 20.000</h4>
                                </div>

                                <div className="flex cursor-pointer pt-2 pb-2  w-full sm:border-t bg-white rounded-xl">
                                    <h4 className="text-gray-500  mx-0 sm:mx-12 text-lg w-1/6">تخفیف:</h4>
                                    <h4 className="text-blue-500 hover:text-blue-700 w-1/3 px-0 sm:px-20 sm:text-lg sm:border-r"> دارد</h4>
                                </div>

                                <div className="flex cursor-pointer pt-2 pb-2  w-full sm:border-t bg-white sm:bg-gray-100 rounded-xl">
                                    <h4 className="text-gray-500  mx-0 sm:mx-12 text-lg sm:w-1/6">نوع پرداخت : </h4>
                                    <h4 className="text-blue-500 hover:text-blue-700 w-1/3 px-3 sm:px-20  sm:text-lg sm:border-r"> نقدی </h4>
                                </div>

                                <div className="flex cursor-pointer pt-2 pb-2  w-full sm:border-t bg-white rounded-xl">
                                    <h4 className="text-gray-500 mx-0 sm:mx-12 text-lg  sm:w-1/6">فروش کلی : </h4>
                                    <h4 className="text-blue-500 hover:text-blue-700 w-1/3 px-3 sm:px-20  sm:text-lg sm:border-r"> دارد</h4>
                                </div>
                              
                                <div className="flex cursor-pointer pt-2 pb-2  w-full sm:border-t bg-white rounded-xl">
                                    <h4 className="text-gray-500  mx-0 sm:mx-12 text-lg w-1/6">جعبه:  </h4>
                                    <h4 className="text-blue-500 hover:text-blue-700 w-1/3 px-0  sm:px-20 sm:text-lg sm:border-r"> دلرد</h4>
                                </div>

                            </div>

                            <div className="border-t pt-5 ">
                                <div className="pr-6 sm:pr-0">
                                    <h4 className="text-black text-2xl font-bold  sm:py-4">سوال از فروشنده</h4>
                                    <div onClick={() => setLogin(!Login)}>
                                        <p className="text-gray-700 text-lg ">برایه سوال از فروشنده این کالا وارد<span className="text-blue-500 hover:text-blue-700 font-bold cursor-pointer">  حساب کاربری</span >خود شوید </p>
                                        <p className="text-gray-700 text-lg">اگر حساب کار بری ندارید      <span className="font-bold text-blue-500 hover:text-blue-700 cursor-pointer">  ثبت نام    </span>کنید.   </p>
                                        {Login && <Loginn LoginHandler={setLogin} />}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className=" w-full col-span-6 sm:col-span-2 ">
                    <div className="bg-white border-y sm:border  sm:rounded-lg p-4">
                        <div className="flex justify-between ">
                            <div className="flex bg-gray-100 h-10  w-fit p-1 rounded-3xl cursor-pointer">
                                <div className="flex">
                                    <Icon className='p-1  mx-2 w-8 h-fit  text-white bg-[#07d183] rounded-full cursor-pointer ' icon="mdi:tick-decagram" />
                                    <h6 className="text-[#07d183]  sm:pt-1 px-1">خرید با تضمین باغچه</h6>
                                </div>
                            </div>
                            <div >
                                <Icon className='mt-2 sm:-mt-1 sm:pt-2 mx-2 w-6 h-fit text-[#07d183] cursor-pointer ' icon="ic:baseline-chevron-left" />
                            </div>
                        </div>

                        <p className="text-gray-700 pt-2 px-4 sm:px-0">با ضمانت باغچه کالا را با همان مشخصات تحویل می‌گیرید، همراه با گارانتی برگشت وجه ۱۰۰٪</p>
                    </div>

                    <div className="bg-gray-100 border-y sm:border sm:rounded-lg p-5   mt-5">
                        <div className="flex w-full">
                            <div className="flex text-gray-700 hover:text-blue-800 cursor-pointer w-auto sm:w-auto">
                                <h4 className="font-bold w-auto" >اطلاعات فروشنده</h4>
                                <Icon className='  w-6 h-fit ' icon="ic:baseline-chevron-left" />
                            </div>
                            <div className="flex  w-auto">
                                <Icon className='w-8 h-fit  text-gray-700  p-1 -mt-1 sm:-mt-0 mr-0 sm:mr-12' icon="mdi:cards-heart-outline" />
                                <h4 className="text-black font-bold w-auto ">فروشنده مورد علاقه </h4>
                            </div>

                        </div>
                        <div className="flex pt-4">
                            <img className="w-12 h-fit rounded-xl" src="/img/rrr.jpg" />
                            <div className="pr-4">
                                <h6 className="text-black text-lg">(22)u37jz785</h6>
                                <h6 className="text-[#07d183] text-sm">100٪ رضایت خرید</h6>
                            </div>
                        </div>

                        <div className="border-t flex justify-around  pt-3 mt-5">
                            <div>
                                <h4 className="text-gray-900 text-lg">فروش موفق:</h4>
                                <h4 className="text-gray-700 text-sm"> 24 عدد </h4>
                            </div>
                            <div className="px-5">
                                <h4 className="text-gray-900 text-lg"> عضویت:</h4>
                                <h4 className="text-gray-700 text-sm"> 4 سال </h4>
                            </div>
                            <div>
                                <h4 className="text-gray-900 text-lg"> کالا ها:</h4>
                                <h4 className="text-gray-700 text-sm"> 357 عدد </h4>
                            </div>

                        </div>

                        <button className="bg-white rounded-xl flex w-auto p-2 mt-5">
                            <Icon className='  w-6 h-fit text-gray-900' icon="fluent-mdl2:product-list" />
                            <h6 className="text-gray-900 pr-1">کالاهای دیگر فروشنده</h6>
                        </button>

                    </div>

                    <div className="bg-white border-y sm:border sm:rounded-lg p-3  mt-5">
                        <h4 className="text-lg text-gray-700">کالای مشابه این کالا دارید؟</h4>
                        <div className="flex cursor-pointer">
                            <h4 className="text-blue-500 font-bold text-sm">فروش کالای مشابه</h4>
                            <Icon className='-mt-0 sm:-mt-2 sm:pt-2  w-5 h-fit text-blue-500 cursor-pointer ' icon="ic:baseline-chevron-left" />
                        </div>
                    </div>

                    <div className="bg-white border-y sm:border sm:rounded-lg p-3  mt-5">
                        <h6 className="text-gray-500 font-bold">هزینه ارسال</h6>
                        <div className=" border rounded-lg p-3 mt-2 flex hover:bg-blue-200 transition-all delay-100">
                            <Icon className='w-6 h-6 text-blue-600 cursor-pointer ' icon="mdi:address-marker-outline" />
                            <h4 className="text-gray-700 font-bold pr-2">لطفا شهر خودرا وارد کنید</h4>
                        </div>

                        <div className="flex justify-between pt-4">
                            <h4 className="text-gray-800 text-lg">تحویل به خریدار</h4>
                            <div className="flex text-blue-500 hover:text-blue-700 cursor-pointer">
                                <h4 className="">جزِئیات</h4>
                                <Icon className='w-5 h-6  cursor-pointer ' icon="material-symbols:keyboard-arrow-down-sharp" />
                            </div>
                        </div>

                        <div className="flex mt-3 ">
                            <Icon className=' mx-2 w-10 h-fit p-1 mt-1 text-[#ed4848] bg-gray-100 rounded-full  ' icon="mdi:box-clock-outline" />
                            <h4 className="text-[#ed4848] bg-gray-100 rounded-xl w-auto  p-1 h-auto ">برای مشاهده تاریخ تحویل شهر خودرا انتخاب کنید</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail;
