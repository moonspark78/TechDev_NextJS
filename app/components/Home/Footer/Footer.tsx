import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4'>
        {/* 1st Part */}
          <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Solution</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>
              Enterprice
            </p>
          </div>
      </div>
    </div>
  )
}

export default Footer