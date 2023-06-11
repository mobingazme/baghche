import Link from "next/link";
import React from "react";
const Item2 = () => {
    return (
        <div className="bg-white w-full flex justify-between ">
            <Link href={'/ProductDetails'}>

                <img className="rounded-lg w-auto h-60" src="https://i1.delgarm.com/i/828/9912/17/6044c5e29f6e3.jpg" />

            </Link>
            <Link href={'/ProductDetails'}>

                <img className="rounded-lg w-auto h-60 px-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuwUn_qjU3GuOm1B0C38Ie2AZI2gXjqNqeQ&usqp=CAU" />

            </Link>
            <Link href={'/ProductDetails'}>

                <img className="rounded-lg w-auto h-60 pl-1" src="https://i1.delgarm.com/i/828/9911/28/602b7a531d67e.jpg" />

            </Link>
            <Link href={'/ProductDetails'}>

                <img className="rounded-lg w-auto h-60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxXnCjwd4D4J3av9Tt06s7PEl-iWQ5FnNaV2fj9ySo1xYI7OV1HWOLuLsPPG3BPy5gcM&usqp=CAU" />
            </Link>
        </div>
    )
}

export default Item2