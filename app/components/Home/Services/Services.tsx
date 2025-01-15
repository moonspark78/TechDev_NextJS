import React from 'react'

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
          <div className='flex items-center space-x-5'>
            {/* Icon */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services