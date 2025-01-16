import React from "react";
import ClientsReviewsCard from "./ClientsReviewsCard";

const ClientsReviews = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      {/* Heading */}
      <h1 className="text-center text-2xl text-blue-950 font-bold">
        What Our Happy Client Says
      </h1>
      {/* Sub Heading */}
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        tenetur aliquam provident commodi dolor in corporis.
      </p>
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
        <div>
          <ClientsReviewsCard
            image="/images/u1.jpg"
            name="Sarah Martinez"
            rating="4.7"
          />
        </div>
        <div>
          <ClientsReviewsCard
            image="/images/u2.jpg"
            name="Thomas Wilson"
            rating="4.7"
          />
        </div>
        <div>
          <ClientsReviewsCard
            image="/images/u3.jpg"
            name="Michael Chen"
            rating="4.7"
          />
        </div>
        <div>
          <ClientsReviewsCard
            image="/images/u4.jpg"
            name="Emma Thompson"
            rating="4.7"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsReviews;
