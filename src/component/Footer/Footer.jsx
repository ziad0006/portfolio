import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer  text-white ">
        <div className="content grid md:grid-cols-3 bg-[#2C3E50] p-[40px] ">


          <div className="location p-[16px]">
            <h3 className='text-[27px]'>LOCATION</h3>
            <p className='my-2'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="around p-[16px]">
            <h3 className='text-[27px]'>AROUN DTHE WEB</h3>
            <div className="icon mt-2">
              <ul className='flex gap-3 justify-center'>
                <li><i className='fa-brands fa-facebook border-2 p-2 rounded-full'></i></li>
                <li><i className='fa-brands fa-twitter border-2 p-2 rounded-full'></i></li>
                <li><i className='fa-brands fa-linkedin border-2 p-2 rounded-full'></i></li>
                <li><i className='fa-solid fa-globe border-2 p-2 rounded-full'></i></li>
              </ul>
            </div>
          </div>
          <div className="freelancer p-[16px]">
            <h3 className='text-[27px]'>ABOUT FREELANCER</h3>
            <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
          </div>
        </div>

        <div className="end bg-[#151E26] p-4">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>

    </>
  )
}
