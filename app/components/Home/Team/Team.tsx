import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Text Content */}
        <div className="lg:col-span-2">
          <h1 className="border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bold">
            Our Teams
          </h1>
          {/* Heading */}
          <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            provident ad omnis.
          </h1>
          {/* Description */}
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nisi
            nostrum voluptates enim a consectetur deserunt. Natus eaque laborum
            nihil.
          </p>
          {/* Button */}
          <div className="mt-8">
            <a
              href="#_"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Join Our Team</span>
            </a>
          </div>
        </div>
        {/* Image Content */}
        <div className="lg:col-span-3 sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative overflow-hidden">
            <Image
              src="/images/t1.jpg"
              alt="team"
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
            <div className="absolute w-full h-[5rem] bottom-0 bg-rose-500 p-4 rounded-lg">
              <p className="text-lg text-white font-bold">Naruto Uzumaki</p>
              <p className="text-gray-200">(Founder)</p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/images/t2.jpg"
              alt="team"
              width={300}
              height={300}
              className="rounded-lg w-full"
            />
            <div className="absolute w-full h-[5rem] bottom-0 bg-orange-500 p-4 rounded-lg">
              <p className="text-lg text-white font-bold">Sakura Heleonor</p>
              <p className="text-gray-200">(CTO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
