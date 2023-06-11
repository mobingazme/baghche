import useCountdown from './../../hooks/useCountdown'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const ProductItem = ({ item }) => {
    const countdown = useCountdown('1403/01/01 00:00:01')
    return (
        <div className=" hover:shadow-md transition-all h-80  flex-col min-w-[192px]">
            <img className="w-full h-48" src={item.img} />

            <Link href={'/imgs/h1.1.jpg'}>
                <h6 className="text-gray-900  pt-1 px-1">{item.title}   </h6>
                <h6 className="text-gray-900 font-bold pt-1 px-1"> بالا ترین پیشنهاد :  </h6>
                <div className="flex justify-end  pt-2">
                    <h4 className="text-black font-bold pl-1">{item.price} </h4>
                    <h6 className="text-gray-600 text-sm mr-1 pt-1">تومان</h6>
                </div>
            </Link>

            <div className="flex justify-between border-t w-full  ">
                <div className="flex items-center mx-1">
                    <Icon className=' text-[#fd7904] bg-[#fff3f0] rounded-full   h-fit p-1' width={24} icon="mdi:court-hammer" />
                    <span className='  text-[#fd7904]  rounded-full w-7 h-fit mr-1 p-1 '>66</span>

                </div>
                <div className="flex items-center  flex-1">
                    <span className=" bg-[#fff3f0] rounded-full flex justify-center items-center w-7 h-7">
                        <Icon className='  text-[#fd7904] rounded-full  ' icon="ic:outline-watch-later" />
                    </span>
                    <span className=' flex text-[#fd7904]   rounded-full  text-[15px]  ' dir='ltr'>  {`${countdown?.days} : ${countdown?.hours} : ${countdown?.minutes} : ${countdown?.seconds}`} </span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem