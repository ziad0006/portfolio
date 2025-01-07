import React from 'react'
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"
export default function Portfolio() {

  return (
    <>
      <div className="portfolio mt-36">
        <h2 className='text-5xl   text-[#2C3E50] font-bold'>PORTFOLIO COMPONENT</h2>
        <div className=" text-[#2C3E50] flex  justify-center items-center my-5 ">
          <div className="line "></div>
          <i className='fa-solid fa-star mx-3'></i>
          <div className="line">
          </div>
        </div>
        <div className="container">
          <div className="grid lg:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-12 mb-6  ">

            <div className=" relative " >
              <div className=" rounded-xl overflow-hidden relative"><img className='w-[100%]' src={img1} alt="" />
                <div className="layer absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 hover:opacity-100  ease-in duration-700">
                  <i className='fa-solid fa-plus text-white fa-6x '></i>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <div className=" rounded-xl overflow-hidden relative"><img className='w-[100%]' src={img2} alt="" />
                <div className="layer absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 hover:opacity-100  ease-in duration-700">
                  <i className='fa-solid fa-plus text-white fa-6x '></i>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <div className=" rounded-xl overflow-hidden relative"><img className='w-[100%]' src={img3} alt="" />
                <div className="layer absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 hover:opacity-100  ease-in duration-700">
                  <i className='fa-solid fa-plus text-white fa-6x '></i>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <div className=" rounded-xl overflow-hidden relative"><img className='w-[100%]' src={img1} alt="" />
                <div className="layer absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 hover:opacity-100  ease-in duration-700">
                  <i className='fa-solid fa-plus text-white fa-6x '></i>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <div className=" rounded-xl overflow-hidden relative"><img className='w-[100%]' src={img2} alt="" />
                <div className="layer absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 hover:opacity-100  ease-in duration-700">
                  <i className='fa-solid fa-plus text-white fa-6x '></i>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <div className=" rounded-xl overflow-hidden relative"><img className='w-[100%]' src={img3} alt="" />
                <div className="layer absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#1abc9ce6] opacity-0 hover:opacity-100  ease-in duration-700">
                  <i className='fa-solid fa-plus text-white fa-6x '></i>
                </div>
              </div>
            </div>



          </div>
        </div>



      </div>



    </>
  )
}
