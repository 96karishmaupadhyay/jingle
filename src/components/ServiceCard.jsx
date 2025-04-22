import React, { useState } from 'react'
import { serviceData } from '../data/serviceData'

const ServiceCard = () => {
  const [showMore, setShowMore] = useState(serviceData.map(() => false));

  const toggleShowMore = (index) => {
    const updated = [...showMore];
    updated[index] = !updated[index];
    setShowMore(updated);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {serviceData.map((item, index) => {
        const isExpanded = showMore[index];
        const Icon = item.serviceIcon;

        return (
          <div
            key={index}
              data-aos="fade-up"
            className={`flex flex-col border-2 rounded-tl-4xl rounded-br-4xl border-primary text-center items-center p-4 w-[350px] shadow-lg shadow-primary-300/20 transition-all duration-300 ${
              isExpanded ? 'h-auto' : 'h-[400px]'
            }`}
          >
            <Icon className="text-green-500 text-8xl mb-2" />
            <h4 className="text-2xl font-semibold mb-2">{item.serviceTitle}</h4>
            <p className={`text-left ${!isExpanded ? 'overflow-hidden' : ''}`}>
              {isExpanded
                ? item.serviceDetail
                : `${item.serviceDetail.slice(0, 300)}...`}
            </p>
            <button
              className="mt-4 bg-tertiary p-2 rounded-sm hover:text-white"
              onClick={() => toggleShowMore(index)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
