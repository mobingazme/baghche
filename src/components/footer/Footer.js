import { Icon } from "@iconify/react";
const Footer = () => {
    return (
        <div className="bg-white pt-20 ">
            <div className=" border-t border-gray-300" >
                <div className="grid justify-items-center grid-cols-2 sm:grid-cols-5 pb-5 pt-5">
                    <ul className="px-5  pt-5 sm:pt-0">
                        <li className="text-lg font-bold text-gray-900 ">خرید از باغچه</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-5 cursor-pointer  ">مزایای خرید</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer">ضمانت برگششت پول</li>
                    </ul>

                    <ul className="px-5  pt-5 sm:pt-0">
                        <li className="text-lg font-bold text-gray-900 ">فروش در باغچه</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-5 cursor-pointer ">مزایای فروش</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer ">تعرفه در باغچه</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer ">قوانین و شرایط</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer ">حمایت از فروشندگان</li>
                    </ul>

                    <ul className="px-5  pt-8 sm:pt-0">
                        <li className="text-lg font-bold text-gray-900 "> درباره باغچه</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-5 cursor-pointer ">پرسشش های متداول</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer ">تماس باما</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer ">درباره ما</li>
                        <li className=" text-gray-500 sm:hover:border-b border-gray-900 w-fit pt-2 sm:pt-3 cursor-pointer ">راهنما</li>
                    </ul>


                    <ul className="px-5 pt-8 sm:pt-0">
                        <li className="text-lg font-bold text-gray-900 "> پاسخگوی شما هستیم:</li>
                        <li className="text-lg font-bold text-gray-900  ">   021-28102</li>
                        <li className=" text-gray-500  w-fit pt-3">شنبه تا چهارشنبه9الی17 پنجشنبه<br className="hidden sm:flex" />9الی13</li>
                    </ul>

                    <ul className="px-5 pt-5 sm:pt-0">
                        <li className="text-lg font-bold  text-gray-900">  قلک را در شکه های اجتماعی <br className="hidden sm:flex" />دنبال کنید</li>
                        <div className="pt-5 flex">
                            <Icon className='w-full sm:w-10 h-fit sm:h-10 p-1 cursor-pointer border border-gray-300 text-gray-900 rounded-md' icon="line-md:instagram" />
                            <Icon className='w-full sm:w-10 h-fit sm:h-10 p-1 cursor-pointer mx-5 border border-gray-300 text-gray-900 rounded-md' icon="file-icons:telegram" />
                            <Icon className='w-full sm:w-10 h-fit sm:h-10 p-1 cursor-pointer border border-gray-300 text-gray-900 rounded-md' icon="ph:youtube-logo-bold" />
                        </div>
                    </ul>

                </div>

                <div className="p-5 border-t flex justify-between sm:justify-around ">
                   <div>
                   <p className="text-gray-500">
                        استفاده از سایت مشروط برقبول <span className="text-blue-700 font-bold hover:border-b border-blue-700 w-fit">توافقنامه کاربری</span> و <span className="text-blue-700 font-bold hover:border-b border-blue-700 w-fit">حفظ حریم شخصی </span>است
                    </p>
                    <p className="text-gray-500">تمام حقوق مادی و معنوی این مجموعه متعلق به شرکت تجارت باغچه سهامی خاص تحت شماره 339393 است.</p>
                   </div>
                  <div className="  sm:flex  pr-14 sm:pr-0  ">
                    <img className=" w-full  sm:w-20 h-fit border border-gray-300 rounded-lg p-1 " src="/img/logo2.png"/>
                    <img className=" w-full  sm:w-20 h-fit border border-gray-300 rounded-lg p-1 " src="/img/logo1.png"/>
                  </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;