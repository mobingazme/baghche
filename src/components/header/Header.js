import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import next from 'next';
import Link from 'next/link';

import Loginn from './../login/Loginn';
import Inputt from './Input';
import Modal from '../modal/Modal';
const Header = () => {
    const [Login, setLogin] = useState(false);
    const [searchModalStaatus, setSearchModalStaatus] = useState(false);
    return (

        <div className="bg-white  flex shadow-lg py-4   max-h-20 border-b">
            <div className="flex w-fit">
                <img className=' w-14 sm:w-16 h-14 mr-5   sm:ml-3 rounded-full' src="/img/images.jpg" />
            </div>


            <div className='flex  justify-between sm:justify-around flex-1  '>
                <div className="  h-11  justify-center min-w-fit hidden sm:flex  rounded-md border mr-8 px-1 py-1  space-x-3 space-x-reverse">

                    <button className="text-gray-700 text-sm  flex items-center    hover:text-blue-600">
                    <Icon className='  w-4 h-fit ml-2 text-gray-700  hover:text-blue-600' icon="pajamas:group" />
                        <span>
                            دسته بندی  ها
                        </span>
                    </button>
                    <button className="text-gray-700 text-sm px-3 border-x     hover:text-blue-600">مزایدات  </button>
                    <button className="text-gray-700 text-sm      hover:text-blue-600">  فروش کالا</button>
                </div>
                <div className="flex-1 items-center sm:bg-[#f2f2f3] rounded-md   h-11 mx-5 ml-10 sm:shadow-sm hidden sm:flex pr-10">
                    <input placeholder="جستوجو در بیش از 700هزار کالا" className="bg-[#f2f2f3] w-full h-11 font-sm rounded-md  text-black sm:pr-2 outline-none "></input>
                    <Icon className=' mr-5 w-12 h-5 sm:border-r border-gray-300 text-gray-500  pr-1 ' icon="material-symbols:search-sharp" />
                </div>
                <div className='flex-1 sm:hidden ' onClick={() => setSearchModalStaatus(true)}>
                    <div className='flex justify-end ml-3   '>
                        <Icon className='  w-6 h-fit  text-gray-700 ml-2 ' icon="material-symbols:search-sharp" />
                        <Icon className=' w-6 h-fit text-gray-700 ' icon="ph:shopping-cart-simple-bold" />
                    </div>
                </div>
            </div>
            {/* modal  */}
            <Modal open={searchModalStaatus} setOpen={setSearchModalStaatus}>
                <div className="bg-white w-full h-fit p-2 border rounded-lg  ">
                    <Icon onClick={() => setSearchModalStaatus(false)} className="w-5 h-fit mr-auto mb-3 text-gray-500  hover:text-black" icon='mdi:close'></Icon>
                    <div className='flex '>
                        <input placeholder="جستوجو در بیش از 700هزار کالا" className="bg-gray-50 w-full h-11 font-sm   text-black  outline-none "></input>
                        <Icon className=' mt- w-fit h-11 bg-gray-50 border-gray-300 text-gray-500 p-2  ' icon="material-symbols:search-sharp" />
                    </div>
                </div>
            </Modal>


            <div onClick={() => setLogin(!Login)} className="  hidden sm:flex justify-around w-48">
                <button className=' justify-center  items-center flex flex-col  border-l  '>
                    <Icon className='  ml-4  h-fit text-gray-700' icon="mdi:user-outline" fontSize={24}/>
                    <span className="text-gray-700  text-xs  hover:text-blue-600 ml-2">ورود / ثبت نام</span>
                </button>
                <button className=' hidden sm:flex flex-col ml-3'>
                    <Icon className='ml-1 w-auto h-fit ' icon="ph:shopping-cart-simple-bold" color="black" fontSize={20}/>
                    <h6 className="text-gray-700 text-sm bg-[#f2f2f3]  rounded-full font-bold">0</h6>
                </button>
            </div>
            {Login && <Loginn LoginHandler={setLogin} />}
        </div>

    )
}
export default Header;


