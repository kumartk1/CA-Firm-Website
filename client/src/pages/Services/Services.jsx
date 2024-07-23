import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileInvoiceDollar, FaReceipt, FaRegMoneyBillAlt, FaGavel, FaBalanceScale, FaUniversity, FaBuilding, FaHandsHelping, FaLandmark, FaUserTie, FaDonate } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const categories = [
  {
    title: "Tax Services",
    services: [
      {
        name: "ITR Filing",
        icon: <FaFileInvoiceDollar className="text-blue-600 w-12 h-12" />,
        description: "Expert assistance in filing Income Tax Returns, ensuring accuracy and compliance with regulations."
      },
      {
        name: "TDS Return",
        icon: <FaRegMoneyBillAlt className="text-yellow-600 w-12 h-12" />,
        description: "Accurate TDS Return filing to avoid penalties and ensure compliance with tax laws."
      },
      {
        name: "Tax Audit",
        icon: <FaBalanceScale className="text-purple-600 w-12 h-12" />,
        description: "Comprehensive tax audits to guarantee compliance and accurate financial reporting."
      },
      {
        name: "GST Return",
        icon: <FaReceipt className="text-green-600 w-12 h-12" />,
        description: "Simplified GST Return filing services to meet all regulatory requirements."
      }
    ]
  },
  {
    title: "Audit Services",
    services: [
      {
        name: "GST Audit",
        icon: <FaGavel className="text-red-600 w-12 h-12" />,
        description: "Detailed GST audits to ensure compliance and optimize tax processes."
      },
      {
        name: "Bank Audit",
        icon: <FaUniversity className="text-orange-600 w-12 h-12" />,
        description: "Thorough bank audits to enhance transparency and financial clarity."
      },
      {
        name: "Statutory/Company Audit",
        icon: <FaBuilding className="text-gray-600 w-12 h-12" />,
        description: "Statutory and company audits to ensure regulatory compliance and accuracy."
      }
    ]
  },
  {
    title: "Consulting Services",
    services: [
      {
        name: "Management Consulting",
        icon: <FaUserTie className="text-cyan-600 w-12 h-12" />,
        description: "Strategic management consulting to drive business growth and efficiency."
      },
      {
        name: "Business Support Services",
        icon: <FaHandsHelping className="text-indigo-600 w-12 h-12" />,
        description: "Customized business support services to meet your unique needs."
      },
      {
        name: "Tax Matters",
        icon: <FaLandmark className="text-pink-600 w-12 h-12" />,
        description: "Expert solutions for all your tax-related issues and challenges."
      }
    ]
  },
  {
    title: "NGO Services",
    services: [
      {
        name: "NGO Registration",
        icon: <FaDonate className="text-blue-600 w-12 h-12" />,
        description: "End-to-end assistance in registering NGOs to ensure smooth and compliant setup."
      }
    ]
  }
];

const ServicesPage = () => {
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [imgRef, imgInView] = useInView({ triggerOnce: true });

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 },
    transition: { duration: 1 }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <section className="relative text-center overflow-hidden bg-gray-100 py-16 md:py-20">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our Premium Services
            </motion.h2>
            <motion.p className="text-md md:text-lg lg:text-xl mb-6 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover a comprehensive range of premium services designed to meet your financial and business needs.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 text-[16px] font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Contact Us
            </motion.a>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16">
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-[28px] md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  >
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-[16px]">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
