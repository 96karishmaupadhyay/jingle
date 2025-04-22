import React from "react";
import dubaiImage from "../assets/dubai.jpg";
import sydneyImage from "../assets/sydney.jpg";
import singaporeImage from "../assets/singapore.jpg";

const InternationalDestination = () => {
  return (
    <div>
     
      <div className='text-center m-10  bg-gray-600 rounded-2xl p-10'>
        <h2 className='text-4xl font-semibold'>POPULAR DESTINATION INTERNATIONAL</h2>
        <p className='text-xl font-semibold text-tertiary mt-4 mb-10'>
        Mother Earth along with mankind have co-created some of the most spectacular places on this planet.
From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind
iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!
        </p>
      </div>
        
   
      <div className="flex h-[400px] gap-4 m-10">
        <div className="flex flex-col w-2/4 gap-2">
          <img
            src={sydneyImage}
            alt=""
            data-aos="fade-in"
            className="object-cover h-1/2 w-full rounded-tl-full border-primary border-2 border-r-0 border-b-0"
          />
          <img
            src={singaporeImage}
            alt=""
            data-aos="fade-in"
            className="object-cover h-1/2 w-full rounded-bl-full border-primary border-2 border-t-0 border-r-0"
          />
        </div>
        <div className="w-3/2">
          <img
            src={dubaiImage}
            data-aos="fade-in"
            alt=""
            className="object-cover  w-full h-full rounded-br-full border-primary border-t-2 border-r-2 border-b-2"
          />
        </div>
      </div>
    </div>
  );
};

export default InternationalDestination;
