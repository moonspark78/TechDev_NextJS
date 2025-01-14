import React from 'react'

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

            </div>
        </div>
    </div>
  )
}

export default Feature