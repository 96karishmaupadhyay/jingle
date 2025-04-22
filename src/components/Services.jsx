import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="m-10 mt-16  text-center">
      <div className="bg-gray-600 rounded-2xl p-10">
      <h1 className="text-4xl font-semibold">Our Services</h1>
      <p className="text-xl mt-4 mb-10 text-tertiary font-semibold">
        At Jingle Holiday Bazar, we are committed to ensuring that you save on
        every trip and every holiday booking you make with us by bringing to you
        the best price deals; be it flights, tours or hotels. Our unique budget
      </p>
      </div>
      
      <div className="flex justify-center gap-8 mt-16 mb-16 m-10">
        <ServiceCard/>
      </div>
    </div>
  );
};

export default Services;
