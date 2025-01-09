import React from 'react'
import logo from "../../assets/avataaars.svg"


export default function Framework() {
  return (
    <>
      <div className="framework py-16 bg-[#1ABC9C] flex justify-center  ">
        <div className="all ">
          <div className='mb-10' >
            <img className='w-[250px] m-auto' src={logo} alt="" />
          </div>

          <div className="contentframework">
            <h2 className='font-bold text-4xl md:text-5xl text-white'>START FRAMEWORK</h2>
            <div className=" flex  justify-center items-center my-4 text-white">
              <div className="line1 "></div>
              <i className='fa-solid fa-star mx-3'></i>
              <div className="line1">
              </div>
            </div>
            <p className='text-white text-[17px]'>Graphic Artist - Web Designer - Illustrator</p>
          </div>

        </div>
      </div>
    </>
  )
}

