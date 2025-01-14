import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
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
            </div>
        </div>
    </div>
  )
}

export default About