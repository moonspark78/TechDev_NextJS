import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const About = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Image content */}
            <div>
                <Image
                    src="/images/about.png"
                    alt='about'
                    width={600}
                    height={600}
                />
            </div>
            {/* Text Content */}
            <div>
              <h1 className='border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bold'>
                About Us
              </h1>
              <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.2rem] sm:leading-[2.2rem]'>
                Everything You Need To Grow Your Business
              </h1>
              <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae et ratione, deleniti inventore aperiam
                ut qui totam illo necessitatibus esse, quo voluptas, sit nobis quia deserunt aliquid. Rerum voluptate eius magni,
                eligendi nisi iure perspiciatis ab similique quibusdam suscipit vitae ducimus magnam non nobis.
              </p>
              <button className='mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967] flex items-center'>
                Learn More
                <FaArrowRightLong size={20} className='ml-3'/>
              </button>
              <div className='mt-6 border-l-2 border-gray-200'>
                <div className='ml-6'>
                  <p className='text-gray-700 font-medium'>
                  <FaQuoteLeft />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo, 
                    cupiditate nihil odit magnam aliquam ad reprehenderit delectus saepe assumenda.
                  <FaQuoteRight />
                  </p>
                  <div className='flex items-center space-x-6 mt-6'>
                    <Image
                      src="/images/u1.jpg"
                      alt='user'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <div>
                      <p className='font-medium'>Alice Jeckson</p>
                      <p className='text-gray-600 text-sm'>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About