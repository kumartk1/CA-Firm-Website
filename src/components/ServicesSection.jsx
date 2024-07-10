import React from 'react';
import { FaFileInvoiceDollar, FaReceipt, FaRegMoneyBillAlt, FaGavel, FaBalanceScale, FaUniversity } from 'react-icons/fa';

const services = [
  { name: "ITR Filing", icon: <FaFileInvoiceDollar className="text-blue-500 w-10 h-10" /> },
  { name: "GST Return", icon: <FaReceipt className="text-green-500 w-10 h-10" /> },
  { name: "TDS Return", icon: <FaRegMoneyBillAlt className="text-yellow-500 w-10 h-10" /> },
  { name: "GST Audit", icon: <FaGavel className="text-red-500 w-10 h-10" /> },
  { name: "Tax Audit", icon: <FaBalanceScale className="text-purple-500 w-10 h-10" /> },
  { name: "Bank Audit", icon: <FaUniversity className="text-orange-500 w-10 h-10" /> },
];

const ServicesSection = () => {
  return (
    <section className="my-8 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 relative group"
            style={{ minHeight: '250px' }}
          >
            {service.icon}
            <h3 className="text-xl font-bold mt-4">{service.name}</h3>
            <p className="mt-2 text-gray-800 font-semibold leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
