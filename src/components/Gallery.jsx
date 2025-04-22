
import React, { useState } from 'react'
import redfortImage from "../assets/redfort.jpg"
import tajmahalImage from "../assets/agra.jpg"
import shimlaImage from "../assets/shimla.jpg"
import kulluManaliImage from "../assets/kullumanali.jpg"
import jimcorbet from "../assets/jimcorbet.jpg"
import kaziranga from "../assets/kaziranga.jpg"
import mussoorie from "../assets/mussoorie.jpg"
import dalhouse from "../assets/dalhouse.jpg"
import amritsar from "../assets/amritsar.jpg"
import zirovalley from "../assets/zirovalley.jpg"
import tsomgolake from "../assets/tsomgolake.jpg"
import pelling from "../assets/pelling.jpg"
import goechala from "../assets/goechala.jpg"
import cherrapunji from "../assets/cherrapunji.jpg"
import gorichen from "../assets/gorichen.jpg"
import gangtok from "../assets/gangtok.jpg"
import goabeach from "../assets/goabeach.jpg"
import mumbai from "../assets/mumbai.jpg"
import mahabaleshwar from "../assets/mahabaleshwar.jpg"
import panchgani from "../assets/panchgani.jpg"
import shirdi from "../assets/shirdi.jpg"
import khandala from "../assets/khandala.jpg"
import lonavala from "../assets/lonavala.jpg"
import dandeli from "../assets/dandeli.jpg"
import  chennai from "../assets/chennai.jpg"
import  coorg from "../assets/coorg.jpg"
import  banglore  from "../assets/banglore.jpg" 
import  gokarna from "../assets/gokarna.jpg" 
import  hampi from "../assets/hampi.jpg" 
import  pondicherry from  "../assets/pondicherry.jpg" 
import  munnar from "../assets/munnar.jpg" 
import  kanyakumari from  "../assets/kanyakumari.jpg" 


const Gallery = () => {
  const [activeTab,setActiveTab]=useState(1)
  const tabs=[
    {id:1,label:"North India"},
    {id:2,label:"South India"},
    {id:3,label:"East India"},
    {id:4,label:"West India"}
  ]
  const tabContent={
    1: [
      { image: redfortImage, place: "Red Fort" },
      { image: tajmahalImage, place: "Taj Mahal" },
      { image: shimlaImage, place: "Shimla" },
      { image: kulluManaliImage, place: "Kullu-Manali" },
      { image: jimcorbet, place: "Jim Corbett" },
      { image: mussoorie, place: "Mussoorie" },
      { image: dalhouse, place: "Dalhousie" },
      { image: amritsar, place: "Amritsar" }
    ],
    2: [
      { image: chennai, place: "Chennai" },
      { image: banglore, place: "Bangalore" },
      { image: coorg, place: "Coorg" },
      { image: hampi, place: "Hampi" },
      { image: gokarna, place: "Gokarna" },
      { image: pondicherry, place: "Pondicherry" },
      { image: munnar, place: "Munnar" },
      { image: kanyakumari, place: "Kanyakumari" }
    ],
    3: [
      { image: kaziranga, place: "Kaziranga" },
      { image: zirovalley, place: "Ziro Valley" },
      { image: tsomgolake, place: "Tsomgo Lake" },
      { image: pelling, place: "Pelling" },
      { image: goechala, place: "Goechala" },
      { image: cherrapunji, place: "Cherrapunji" },
      { image: gorichen, place: "Gorichen" },
      { image: gangtok, place: "Gangtok" }
    ],
    4: [
      { image: goabeach, place: "Goa" },
      { image: mumbai, place: "Mumbai" },
      { image: mahabaleshwar, place: "Mahabaleshwar" },
      { image: panchgani, place: "Panchgani" },
      { image: shirdi, place: "Shirdi" },
      { image: khandala, place: "Khandala" },
      { image: lonavala, place: "Lonavala" },
      { image: dandeli, place: "Dandeli" }
    ]
  }
  return (
    <div>
      <div className='flex gap-4 border-b-2 border-secondary-600 ml-10 mr-10'>
        {
          tabs.map((tab)=>
          <button key={tab.id} className={` min-h-[3rem] text-xl   p-2  hover:text-white hover:bg-tertiary
          ${activeTab===tab.id?"bg-secondary border-2 border-secondary-600 border-b-0":"bg-white"}`}
          onClick={()=>setActiveTab(tab.id)}
          >{tab.label}</button>)
        }
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {
          tabContent[activeTab].map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.image} alt={item.place} data-aos="flip-up" className="w-full h-48 object-cover rounded-xl shadow-xl border-l-2 border-b-2 border-secondary-600" />
              <p className="mt-2 text-lg font-semibold text-tertiary">{item.place}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
