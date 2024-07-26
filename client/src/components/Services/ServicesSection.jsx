import React from 'react';
import { 
  FaFileInvoiceDollar, 
  FaReceipt, 
  FaRegMoneyBillAlt, 
  FaGavel, 
  FaBalanceScale, 
  FaUniversity, 
  FaBuilding, 
  FaChartLine, 
  FaHandsHelping, 
  FaLandmark, 
  FaUserTie 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  {
    name: "Statutory/Company Audit",
    icon: <FaBuilding className="text-gray-600 w-12 h-12" />,
    description: "Comprehensive statutory and company audits to ensure compliance with regulations."
  },
  {
    name: "Internal Audit",
    icon: <FaChartLine className="text-teal-600 w-12 h-12" />,
    description: "In-depth internal audits to enhance operational efficiency and internal controls."
  },
  {
    name: "Business Support Services",
    icon: <FaHandsHelping className="text-indigo-600 w-12 h-12" />,
    description: "Support services tailored to meet the unique needs of your business."
  },
  {
    name: "Tax Matters",
    icon: <FaLandmark className="text-pink-600 w-12 h-12" />,
    description: "Expert advice and solutions for all your tax-related issues and queries."
  },
  {
    name: "Management Consulting",
    icon: <FaUserTie className="text-cyan-600 w-12 h-12" />,
    description: "Strategic management consulting to drive business growth and efficiency."
  }
];

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={ref} className="my-16 text-center px-4 lg:px-16">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-[28px] md:text-4xl font-extrabold text-gray-900">What We Offer</h2>
        <p className="mt-4 text-[16px] md:text-lg text-gray-700 max-w-3xl mx-auto">
          Discover our range of services designed to meet your financial needs.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-10">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col justify-center items-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl relative group border border-gray-200 overflow-hidden"
            style={{ minHeight: '250px' }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }} 
          >
            {service.icon}
            <h3 className="text-[16px] sm:text-xl font-semibold mt-4 text-gray-900">{service.name}</h3>
            <p className="mt-2 text-[12px] text-gray-700 leading-relaxed text-center px-2">
              {service.description}
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
          </motion.div>
        ))}
      </div>
      <motion.button 
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        View More Services
      </motion.button>
    </section>
  );
}

export default ServicesSection;
