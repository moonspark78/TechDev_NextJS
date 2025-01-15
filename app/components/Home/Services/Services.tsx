import React from 'react'
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from 'react-icons/fa'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto'>
        <h1 className='border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bold'>
          Services
        </h1>
        {/* Heading */}
        <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-800'>
          Our Services Made For You?
        </h1>
        {/* Description */}
        <p className='mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus culpa repudiandae
          architecto temporibus ut itaque assumenda voluptatem enim accusantium voluptatum.
        </p>
        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16'>
          {/* 1st Services */}
          <div className='flex items-center space-x-5  bg-white rounded-lg p-3'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
              <FaRocket className='h-6 w-6 text-orange-400'/>
            </div>
            {/* Text Content */}
            <div>
              <p className='text-lg font-bold text-gray-700'>Buiseness</p>
              <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* 2st Services */}
          <div className='flex items-center space-x-5 bg-white rounded-lg p-3'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
              <FaBriefcase className='h-6 w-6 text-orange-400'/>
            </div>
            {/* Text Content */}
            <div>
              <p className='text-lg font-bold text-gray-700'>Start Up</p>
              <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* 3st Services */}
          <div className='flex items-center space-x-5  bg-white rounded-lg p-3'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
              <FaShoppingCart className='h-6 w-6 text-orange-400'/>
            </div>
            {/* Text Content */}
            <div>
              <p className='text-lg font-bold text-gray-700'>E-commerce</p>
              <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* 4st Services */}
          <div className='flex items-center space-x-5  bg-white rounded-lg p-3'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
              <MdOutlineDesignServices className='h-6 w-6 text-orange-400'/>
            </div>
            {/* Text Content */}
            <div>
              <p className='text-lg font-bold text-gray-700'>Digital Design</p>
              <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* 5st Services */}
          <div className='flex items-center space-x-5  bg-white rounded-lg p-3'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
              <FaChess className='h-6 w-6 text-orange-400'/>
            </div>
            {/* Text Content */}
            <div>
              <p className='text-lg font-bold text-gray-700'>Strategy Solution</p>
              <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* 6st Services */}
          <div className='flex items-center space-x-5  bg-white rounded-lg p-3'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
              <IoColorPaletteOutline className='h-6 w-6 text-orange-400'/>
            </div>
            {/* Text Content */}
            <div>
              <p className='text-lg font-bold text-gray-700'>Unlimited Colors</p>
              <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services