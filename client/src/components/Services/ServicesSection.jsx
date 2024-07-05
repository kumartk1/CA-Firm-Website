import React from 'react';
import Service from './Service';
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
          <Service service={service} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
