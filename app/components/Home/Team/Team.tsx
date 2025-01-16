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
