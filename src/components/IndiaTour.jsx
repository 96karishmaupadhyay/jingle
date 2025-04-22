import React from 'react'
import goaImage from "../assets/goa.jpg"
import solangImage from "../assets/solang.jpg"
import montasary from "../assets/montasary.jpg"
const IndiaTour = () => {
  return (
    <div>
      <div className='text-center m-10  bg-gray-600 rounded-2xl p-10'>
        <h2 className='text-4xl font-semibold'>FEATURED TOUR OF INDIA</h2>
        <p className='text-xl font-semibold text-tertiary mt-4 mb-10'>India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh
        largest tourist nation by area and the second largest in terms of population</p>
      </div>
      <div className='m-10'>
        <div className='flex gap-8 mb-8'>
            <img src={montasary} alt=""
            data-aos="fade-down" className='w-1/2 rounded-tl-full  border-2 border-primary'/>
            <p className='w-1/2 text-xl font-semibold pt-4'>This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with
                 knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.</p>
        </div>
        <div className='flex  gap-8 mb-8'>
            <p className='w-1/2  text-xl font-semibold pt-4'>
            A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking
             for snow-based activities and sports, winters are the best time to visit
            </p>
            <img src={solangImage} alt="" data-aos="fade-up" className='w-1/2  rounded-tr-full  border-2 border-primary'/>
        </div>
        <div className='flex  gap-8 mb-8  text-xl font-semibold pt-4'>
            <img src={goaImage} alt="" data-aos="fade-down" className='w-1/2  rounded-tl-full  border-2 border-primary' />
            <p className='w-1/2'>Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa</p>
        </div>
      </div>
    </div>
  )
}

export default IndiaTour
