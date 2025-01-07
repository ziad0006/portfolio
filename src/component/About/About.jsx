import React from 'react'

export default function About() {
  return (
    <div className="about bg-[#1ABC9C] h-screen  items-center flex justify-center">
      <div className="all">

        <div className="title">
          <h2 className='text-4xl  text-white  font-bold'>ABOUT COMPONENT</h2>
          <div className=" flex  justify-center items-center my-5 text-white">
            <div className="line1 "></div>
            <i className='fa-solid fa-star mx-3'></i>
            <div className="line1">
            </div>
          </div>

        </div>




        <div className="container">
          <div className="px-6 grid md:grid-cols-2  mb-3">

            <div className="par1 ps-[48px] pe-[12px] text-white ">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="par2 pe-[48px] ps-[12px] text-white">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}






