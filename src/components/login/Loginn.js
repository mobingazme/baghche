import 'animate.css';



const { Icon } = require("@iconify/react")



const Loginn = ({ LoginHandler }) => {

    return (
        <div className="w-full h-screen fixed backdrop-blur-sm bg-[#00000056] overflow-hidden 
        z-50" style={{ maxWidth: 'inherit' }} >
            <div className="flex justify-center py-40 backdrop-blur-sm animate__animated animate__bounceInDown">
                <div className="bg-white w-80 h-fit p-5 border rounded-lg">
                    <div className="flex justify-between ">
                        <h2 className="text-black font-bold text-xl  "> باغچه - ورود/ثبت نام</h2>
                        <Icon onClick={() => LoginHandler(false)} className="w-6 h-6 text-gray-500  hover:text-black" icon='mdi:close'></Icon>
                    </div>
                    <div className="pt-4">
                        <h4 className="text-sm font-bold text-gray-700 pb-3">لطفا شماره موبایل خود را وارد کنید</h4>
                        <input className="border w-full bg-gray-200 border-gray-300 p-1 hover:border-gray-700 text-gray-500 rounded-lg" placeholder="شماره موبایل"></input>
                    </div>
                    <div className="pt-3 ">
                        <button className="w-full bg-gray-200 rounded-lg text-gray-700 p-1 ">ادامه</button>
                        <p className="flex text-gray-700 text-sm pt-4 mr-10">
                            <span className=" text-blue-600 text-sm hover:border-b w-fit border-blue-600">توافقنامه کاربری</span>
                            راخوانده و قبول دارم
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginn;