import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='contact mt-36 h-screen'>
                <h2 className='text-4xl  md:text-5xl  text-[#2C3E50] font-bold '>CONTACT SECTION</h2>

                <div className=" flex text-[#2C3E50]  justify-center items-center mt-5">
                    <div className="line "></div>
                    <i className='fa-solid fa-star mx-3'></i>
                    <div className="line">
                    </div>
                </div>


                <div className="lg:w-[50%] mx-3 lg:mx-auto relative  mt-[4rem] ">

                    <div className="relative z-0 w-full mb-7 group">
                        <input type="text" name="username" id="name" className=" block py-7  w-full text-sm text-gray-900 bg-transparent border-b-2 rounded-sm appearance-none focus:outline-none focus:ring-0 peer placeholder:text-lg placeholder:text-gray-700 " placeholder=" userName" required />
                    </div>
                    <div className="relative z-0 w-full mb-7 group">
                        <input type="text" name="username" id="name" className="block py-7 w-full text-sm text-gray-900 bg-transparent rounded-sm border-b-2  appearance-none focus:outline-none focus:ring-0 peer placeholder:text-lg  placeholder:text-gray-700 " placeholder=" userAge" required />
                    </div>
                    <div className="relative z-0 w-full mb-7 group">
                        <input type="text" name="username" id="name" className="block py-7 w-full text-sm text-gray-900 bg-transparent rounded-sm border-b-2  appearance-none focus:outline-none focus:ring-0 peer placeholder:text-lg placeholder:text-gray-700 " placeholder=" userEmail" required />
                    </div>
                    <div className="relative z-0 w-full mb-7 group">
                        <input type="text" name="username" id="name" className="block py-7 w-full text-sm text-gray-900 bg-transparent rounded-sm border-b-2  appearance-none focus:outline-none focus:ring-0 peer placeholder:text-lg placeholder:text-gray-700 " placeholder=" userPassword" required />
                    </div>

                    <button type="submit" className="absolute left-0  text-white bg-[#1ABC9C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ">Send Massage</button>
                </div>

            </div>
        </>
    )
}

