import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8'>
        {/* 1st Part */}
          <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Solution</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Enterprice
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              By Worflow
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              By Teams
            </p>
          </div>
        {/* 2st Part */}
          <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              About Us
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              News & Press
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Our Customer
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Leadership
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Careers
            </p>
          </div>
        {/* 3st Part */}
          <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Resources</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Blog
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Webinar & Events
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Podcast
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              E-book & Guides
            </p>
          </div>
        {/* 4st Part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Contact</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>
              06 06 06 06 06
            </p>
            <p className='text-gray-800 font-medium cursor-pointer text-md hover:text-blue-950'>
              techDev@gmail.com
            </p>
          </div>
      </div>
      {/* Bottom */}
      <div className='mt-8 w-[80%] mx-auto border-t-2 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='flex items-center gap-2'>
          <AiFillSafetyCertificate />
          moonspark
        </p>
      </div>
    </div>
  )
}

export default Footer