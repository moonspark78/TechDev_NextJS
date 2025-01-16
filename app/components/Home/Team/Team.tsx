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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident ad omnis.
          </h1>
          {/* Description */}
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero nisi nostrum voluptates enim a consectetur deserunt. Natus eaque laborum nihil.
          </p>
        </div>
        {/* Image Content */}
        <div className="lg:col-span-3">
            <Image src="" alt="" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Team;
