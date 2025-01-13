import Image from 'next/image'
import React from 'react'

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
          </div>
      </div>
    </div>
  )
}

export default Hero