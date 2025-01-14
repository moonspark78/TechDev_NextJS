import Image from 'next/image'
import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'

const Feature = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div>
            <h1 className='text-center text-2xl text-blue-950 font-bold'>
                Key Features Of The Products
            </h1>
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tempore possimus eos optio reiciendis quo.
            </p>
        </div>

        {/* Main Grid */}
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
            {/* Inner Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                {/* 1st Box */}
                <div className='bg-white p-4 rounded-lg'>
                    <div className='flex flex-col items-center space-x-3'>
                        {/* icon */}
                        <div>
                            <MdOutlineTouchApp className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* Heading */}
                        <h1 className='text-lg font-bold'>
                            App Integration
                        </h1>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quaerat distinctio facere porro aspernatur. Atque, assumenda porro.
                        </p>
                    </div>
                </div>
                {/* 2st Box */}
                <div className='bg-white p-4 rounded-lg'>
                    <div className='flex flex-col items-center space-x-3'>
                        {/* icon */}
                        <div>
                            <GoWorkflow className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* Heading */}
                        <h1 className='text-lg font-bold'>
                            WorkFlow Builder
                        </h1>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quaerat distinctio facere porro aspernatur. Atque, assumenda porro.
                        </p>
                    </div>
                </div>
                {/* 3st Box */}
                <div className='bg-white p-4 rounded-lg'>
                    <div className='flex flex-col items-center space-x-3'>
                        {/* icon */}
                        <div>
                            <LuPen className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* Heading */}
                        <h1 className='text-lg font-bold'>
                            Problem Solution
                        </h1>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quaerat distinctio facere porro aspernatur. Atque, assumenda porro.
                        </p>
                    </div>
                </div>
                {/* 4st Box */}
                <div className='bg-white p-4 rounded-lg'>
                    <div className='flex flex-col items-center space-x-3'>
                        {/* icon */}
                        <div>
                            <MdAccessAlarm className='w-6 h-6 text-orange-400'/>
                        </div>
                        {/* Heading */}
                        <h1 className='text-lg font-bold'>
                            LifeTime Access
                        </h1>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quaerat distinctio facere porro aspernatur. Atque, assumenda porro.
                        </p>
                    </div>
                </div>
            </div>
            {/* Image Content */}
            <div>
                <Image
                    src="/images/f1.png"
                    alt='feature'
                    width={700}
                    height={700}
                />
            </div>
        </div>
    </div>
  )
}

export default Feature