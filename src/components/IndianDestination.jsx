import React from "react";
import amritsarImage from "../assets/amritsar.jpg";
import gangtokImage from "../assets/gangtok.jpg";
import AgraImage from "../assets/agra.jpg";

const IndianDestination = () => {
  return (
    <div>
      <div className="text-center m-10">
        <div className="bg-gray-600 rounded-2xl p-10">
        <h2 className="text-4xl font-semibold">POPULAR DESTINATIONS OF INDIA</h2>
        <p className="text-xl font-semibold mt-4 mb-10 text-tertiary">
          India is a vibrant land of startling contrasts where both the
          traditional and modern worlds meet. The world's seventh largest nation
          by area and the second largest in terms of population, India boasts a
          rich heritage that's the result of centuries of different cultures and
          religions leaving their mark.
        </p>
        </div>
        
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 grid-rows-2 overflow-x-hidden m-10">
        <img
          src={amritsarImage}
          data-aos="fade-right"
          className="col-span-2 row-span-2 rounded-tl-full  border-2 border-primary border-r-0 "
        />
        <img
          src={gangtokImage}
          alt="gangtak"
          data-aos="fade-left"
          className="rounded-tr-full border-2 border-primary border-l-0 border-b-0"
        />
        <img
          src={AgraImage}
          alt="taj mahal"
          data-aos="fade-left"
          className="col-start-3 row-start-2 rounded-br-full border-2 border-primary border-l-0 border-t-0"
        />
      </div>
    </div>
  );
};

export default IndianDestination;
