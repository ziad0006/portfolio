import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>


      <nav className="text-white bg-[#2C3E50] fixed top-0 right-0 left-0 px-4 py-5 z-50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-3xl font-bold whitespace-nowrap md:text-5xl">START FRAMEWORK
            </span>
          </Link>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className=" flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent flex items-center justify-center">
              <li>
                <Link to="about" className="block focus:py-2  focus:px-3 focus:bg-[#1ABC9C] md:p-0 rounded-lg md:bg-transparent  focus:border-0    font-bold" aria-current="page">ABOUT</Link>
              </li>
              <li>
                <Link to="portfolio" className="block focus:py-2  focus:px-3 focus:bg-[#1ABC9C] md:p-0 rounded-lg md:bg-transparent  focus:border-0    font-bold" aria-current="page">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="contact" className="block focus:py-2  focus:px-3 focus:bg-[#1ABC9C] md:p-0 rounded-lg md:bg-transparent  focus:border-0    font-bold" aria-current="page">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
