import React from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <h1 className='text-center text-2xl text-blue-950 font-bold'>
            Choose The Plan That Right For You
        </h1>
        <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam rem facilis quae nulla voluptatem.
        </p>
        <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <PricingCard time="3 Month" price="9.99"/>
            </div>
            <div>
                <PricingCard time="12 Month" price="19.99"/>
            </div>
            <div>
                <PricingCard time="Life Time" price="99.99"/>
            </div>
        </div>
    </div>
  )
}

export default Pricing