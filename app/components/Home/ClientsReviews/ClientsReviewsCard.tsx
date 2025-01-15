import Image from 'next/image';
import React from 'react'




type ClientsReviewsCardProps = {
    image: string;
    name: string;
    rating: string;
}

  

const ClientsReviewsCard = ({ image, name, rating }: ClientsReviewsCardProps) => {
  return (
    <div className='bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg'>
        {/* Image */}
        <div>
            <Image
                src={image}
                alt={name}
                width={350}
                height={350}
                className='rounded-lg'
            />
        </div>
        <div>
            <h1 className='text-lg font-bold text-blue-950'>{name}</h1>
        </div>
    </div>
  )
}

export default ClientsReviewsCard