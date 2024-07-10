import React from 'react';
import { FaFileInvoiceDollar, FaReceipt, FaRegMoneyBillAlt, FaGavel, FaBalanceScale, FaUniversity } from 'react-icons/fa';

const services = [
  {
    name: "ITR Filing",
    icon: <FaFileInvoiceDollar className="text-blue-600 w-12 h-12" />,
    description: "Accurate and timely filing of Income Tax Returns to keep you compliant and stress-free."
  },
  {
    name: "GST Return",
    icon: <FaReceipt className="text-green-600 w-12 h-12" />,
    description: "Comprehensive GST Return filing services to ensure your business stays on top of tax obligations."
  },
  {
    name: "TDS Return",
    icon: <FaRegMoneyBillAlt className="text-yellow-600 w-12 h-12" />,
    description: "Expert handling of TDS Return filings to avoid penalties and maintain smooth operations."
  },
  {
    name: "GST Audit",
    icon: <FaGavel className="text-red-600 w-12 h-12" />,
    description: "Thorough GST audits to ensure compliance and optimize your tax processes."
  },
  {
    name: "Tax Audit",
    icon: <FaBalanceScale className="text-purple-600 w-12 h-12" />,
    description: "Detailed tax audits conducted by professionals to ensure accuracy and compliance."
  },
  {
    name: "Bank Audit",
    icon: <FaUniversity className="text-orange-600 w-12 h-12" />,
    description: "In-depth bank audits to provide clarity and transparency in your financial statements."
  },
];

const ServicesSection = () => {
  return (
    <section className="my-16 text-center px-4 lg:px-16">
      <div className="mb-12">
        <h2 className="text-[28px] md:text-4xl lg:text-5xl font-extrabold text-gray-900">What We Offer</h2>
        <p className="mt-4 text-[16px] md:text-lg text-gray-700 max-w-3xl mx-auto">
          Discover our range of services designed to meet your financial needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-center items-center p-4 sm:p-6 bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl relative group"
            style={{ minHeight: '250px' }}
          >
            {service.icon}
            <h3 className="text-[16px] sm:text-xl font-semibold mt-4 text-gray-900">{service.name}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed text-center px-2">
              {service.description}
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
      <button 
        className="mt-10 px-6 py-3 bg-blue-500 text-white font-bold rounded-sm shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
      >
        View More Services
      </button>
    </section>
  );
}

export default ServicesSection;
