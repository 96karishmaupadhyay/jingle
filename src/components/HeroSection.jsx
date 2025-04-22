import React, { useState } from "react";
import image1 from "../assets/akshardham.webp";
import image2 from "../assets/himalay.webp";
import image3 from "../assets/badrinath.webp";
import image4 from "../assets/jaipur.webp";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const HeroSection = () => {
  const heroImages = [image1, image2, image3, image4];
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      
      <div className="relative flex justify-center mt-10">
        <img
          src={heroImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          loading="lazy"
          className=" h-[500px] object-cover overflow-x-hidden w-[90%] rounded-4xl border-2 border-primary "
        />
        <h2 className="absolute top-30 left-25 text-wrap text-2xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-semibold text-left  text-primary">
  Welcome to 
  <br/> Jingle Holiday Bazar Pvt Ltd.
</h2>

      </div>

   
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" onClick={prevSlide}>
      <IoIosArrowDropleftCircle  className="text-6xl text-tertiary"/>
      </div>
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" onClick={nextSlide}>
      <IoIosArrowDroprightCircle  className="text-6xl text-tertiary"/>
      </div>

  
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-tertiary" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
