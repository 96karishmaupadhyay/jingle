import React from 'react'
import hotelmountain from "../assets/hotelmountain.jpg"
import hideouthotel from "../assets/hideouthotel.jpg"
import tajresort from "../assets/tajresort.jpg"
const Hotels = () => {
  return (
    <div>
      <div className='text-center m-10 bg-gray-600 rounded-2xl p-10'>
        <h2 className='text-4xl font-semibold'>Popular Hotels</h2>
        <p className='text-xl font-semibold mt-4 mb-10 text-tertiary'>At Jingle Holiday Bazar Brovide Best Hotel facilty National And International</p>
      </div>
      <div className='m-10 overflow-x-hidden'>
        <div className='flex gap-8 mb-8'>
            <img src={tajresort} alt="" data-aos="fade-right" className='w-1/2 rounded-tl-full  border-2 border-primary'/>
            
            <p className='w-1/2 text-xl font-semibold pt-4'>
            <strong className='text-2xl'>Taj Aravali Resort & Spa</strong>
            <br/>
            Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night</p>
        </div>
        <div className='flex  gap-8 mb-8'>
            
            <p className='w-1/2  text-xl font-semibold pt-4'>
            <strong className='text-2xl'>Hideout Premiere</strong><br/>
            Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to 
            enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+
            </p>
            <img src={hideouthotel} alt="" data-aos="fade-left"  className='w-1/2  rounded-tr-full  border-2 border-primary'/>
        </div>
        <div className='flex  gap-8 mb-8  text-xl font-semibold pt-4'>
            <img src={hotelmountain} alt="" className='w-1/2  rounded-tl-full  border-2 border-primary' data-aos="fade-right"  />
           
            <p className='w-1/2'>
            <strong className='text-2xl'>Hotel Mountain face by Snow City Hotel</strong><br/>
            Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking,
              a shared lounge and a garden.₹ 1,440+ per night</p>
        </div>
      </div>
    </div>
  )
}

export default Hotels
