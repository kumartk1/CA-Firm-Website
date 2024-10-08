import React from 'react';
import { FaFileInvoiceDollar, FaReceipt, FaRegMoneyBillAlt, FaGavel, FaBalanceScale, FaUniversity, FaBuilding, FaChartLine, FaHandsHelping, FaLandmark, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    name: "ITR Filing",
    icon: <FaFileInvoiceDollar className="w-12 h-12 text-blue-600" />,
    description: "Accurate and timely filing of Income Tax Returns to keep you compliant and stress-free."
  },
  {
    name: "GST Return",
    icon: <FaReceipt className="w-12 h-12 text-green-600" />,
    description: "Comprehensive GST Return filing services to ensure your business stays on top of tax obligations."
  },
  {
    name: "TDS Return",
    icon: <FaRegMoneyBillAlt className="w-12 h-12 text-yellow-600" />,
    description: "Expert handling of TDS Return filings to avoid penalties and maintain smooth operations."
  },
  {
    name: "GST Audit",
    icon: <FaGavel className="w-12 h-12 text-red-600" />,
    description: "Thorough GST audits to ensure compliance and optimize your tax processes."
  },
  {
    name: "Tax Audit",
    icon: <FaBalanceScale className="w-12 h-12 text-purple-600" />,
    description: "Detailed tax audits conducted by professionals to ensure accuracy and compliance."
  },
  {
    name: "Bank Audit",
    icon: <FaUniversity className="w-12 h-12 text-orange-600" />,
    description: "In-depth bank audits to provide clarity and transparency in your financial statements."
  },
  {
    name: "Statutory/Company Audit",
    icon: <FaBuilding className="w-12 h-12 text-gray-600" />,
    description: "Comprehensive statutory and company audits to ensure compliance with regulations."
  },
  {
    name: "Internal Audit",
    icon: <FaChartLine className="w-12 h-12 text-teal-600" />,
    description: "In-depth internal audits to enhance operational efficiency and internal controls."
  },
  {
    name: "Business Support Services",
    icon: <FaHandsHelping className="w-12 h-12 text-indigo-600" />,
    description: "Support services tailored to meet the unique needs of your business."
  },
  {
    name: "Tax Matters",
    icon: <FaLandmark className="w-12 h-12 text-pink-600" />,
    description: "Expert advice and solutions for all your tax-related issues and queries."
  },
  {
    name: "Management Consulting",
    icon: <FaUserTie className="w-12 h-12 text-cyan-600" />,
    description: "Strategic management consulting to drive business growth and efficiency."
  }
];

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={ref} className="px-4 my-16 text-center lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 text-[28px] md:text-4xl font-extrabold text-gray-800"
      >
        Our Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mb-12 text-lg text-gray-600"
      >
        Discover our comprehensive range of services designed to meet your unique financial needs.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * index }}
            className="flex flex-col items-center p-6 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
          >
            {service.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{service.name}</h3>
            <p className="mt-2 text-[14px] text-gray-600 text">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
