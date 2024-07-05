import React from 'react'

const Service = (service,key) => {
  return (
    <div 
            key={key} 
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
            style={{ minHeight: '200px' }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
  )
}

export default Service