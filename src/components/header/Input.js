import { Icon } from '@iconify/react';
const Inputt = (InputHandler) => {

    return (
        <div className="w-full h-screen fixed backdrop-blur-sm bg-[#0000006] overflow-hidden 
        z-50" style={{ maxWidth: 'inherit' }} >
            <div className="flex justify-center py-14 backdrop-blur-sm animate__animated animate__bounceInDown">
                <div className="bg-white w-full h-fit p-5 border rounded-lg  ">
                <Icon onClick={() => InputHandler(false)} className="w-5 h-fit mr-64 mb-3 text-gray-500  hover:text-black" icon='mdi:close'></Icon>
                  <div className='flex '>
                  <input placeholder="جستوجو در بیش از 700هزار کالا" className="bg-[#f2f2f3] w-full h-11 font-sm  p-2 text-black  outline-none "></input>
                    <Icon  className=' mt- w-fit h-11 bg-[#f2f2f3] border-gray-300 text-gray-500 p-2  ' icon="material-symbols:search-sharp" />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Inputt;