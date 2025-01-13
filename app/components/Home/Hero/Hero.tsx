import Image from 'next/image'
import React from 'react'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] flex justify-center flex-col">
      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Image Content */}
          <div>
            <Image
              src="/images/hero.jpg"
              alt='img-hero'
              width={550}
              height={550}
            />
          </div>
        {/* Text Content */}
          <div>
            <p className='text-sm sm:text-base md:text-xl font-bold text-blue-950'>
              Make the Smartest Investment
            </p>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]'>
              Kickstart, Scale, and  Thrive Faster with {" "}
              <span className='text-rose-700'>TechDev</span>
            </h1>
            <p className='text-xs sm:text-sm md:text-base font-medium text-gray-700'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Tenetur deleniti fuga dolorem quis perferendis aspernatur maiores repellendus.
              Recusandae, molestiae iusto.
            </p>
            {/* Ratings */}
              <div className='flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6'>
                <div className='flex items-center space-x-4'>
                  <Image
                    src="/images/google.png"
                    alt='google'
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className='flex items-center space-x-2'>
                      <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>4.5</h1>
                      <div className='flex items-center'>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <BsStarHalf className='w-4 h-4 text-yellow-400'/>
                      </div>
                    </div>
                    <p className='text-gray-700 text-sm sm:text-base'>Best Rated On Google</p>
                  </div>
                </div>
                <div className='flex items-center space-x-4'>
                  <Image
                    src="/images/linkedin.png"
                    alt='google'
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className='flex items-center space-x-2'>
                      <h1 className='text-lg sm:text-xl md:text-2xl text-gray-700 font-bold'>4.7</h1>
                      <div className='flex items-center'>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <FaStar className='w-4 h-4 text-yellow-400'/>
                        <BsStarHalf className='w-4 h-4 text-yellow-400'/>
                      </div>
                    </div>
                    <p className='text-gray-700 text-sm sm:text-base'>Best Rated On Google</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero