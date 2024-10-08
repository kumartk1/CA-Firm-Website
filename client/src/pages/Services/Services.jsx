import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaFileInvoiceDollar, FaReceipt, FaRegMoneyBillAlt, FaGavel, FaBalanceScale, FaUniversity, FaBuilding, FaHandsHelping, FaLandmark, FaUserTie, FaDonate, FaUserShield, FaChartLine, FaClipboardCheck, FaHandshake, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    title: "Tax Services",
    services: [
      {
        id: 1,
        name: "ITR Filing",
        icon: <FaFileInvoiceDollar className="w-12 h-12 text-blue-600" />,
        description: "Get your Income Tax Returns filed accurately and on time with our expert assistance.",
        detailedDescription: "Filing your Income Tax Return (ITR) is essential to ensure compliance with tax laws. Our experts provide end-to-end support, from document preparation to submission, helping you maximize deductions and avoid penalties."
      },
      {
        id: 2,
        name: "TDS Return",
        icon: <FaRegMoneyBillAlt className="w-12 h-12 text-yellow-600" />,
        description: "Ensure timely and accurate TDS Return filing to stay compliant and avoid penalties.",
        detailedDescription: "We offer comprehensive TDS return filing services to ensure that your deductions are correctly accounted for and submitted on time, helping you avoid any fines or complications with tax authorities."
      },
      {
        id: 3,
        name: "Tax Audit",
        icon: <FaBalanceScale className="w-12 h-12 text-purple-600" />,
        description: "Comprehensive tax audits to ensure compliance and correct financial reporting.",
        detailedDescription: "Our tax audit services provide a thorough examination of your financial records to ensure accuracy and compliance with tax regulations, helping you identify areas for improvement and mitigate risks."
      },
      {
        id: 4,
        name: "GST Return",
        icon: <FaReceipt className="w-12 h-12 text-green-600" />,
        description: "Hassle-free GST Return filing to comply with all regulatory requirements.",
        detailedDescription: "We assist you in filing GST returns accurately and on time, ensuring you meet all regulatory requirements while optimizing your tax position and avoiding penalties."
      },
      {
        id: 5,
        name: "GST Registration",
        icon: <FaClipboardCheck className="w-12 h-12 text-teal-600" />,
        description: "Get your business registered under GST with ease and efficiency.",
        detailedDescription: "Our GST registration services streamline the process of getting your business registered, helping you comply with tax regulations and start operating under the GST framework smoothly."
      }
    ]
  },
  {
    title: "Audit Services",
    services: [
      {
        id: 6,
        name: "GST Audit",
        icon: <FaGavel className="w-12 h-12 text-red-600" />,
        description: "Detailed GST audits to ensure compliance and improve tax processes.",
        detailedDescription: "We provide in-depth GST audits to verify compliance with GST regulations, ensuring accuracy in your tax submissions and identifying opportunities for process improvements."
      },
      {
        id: 7,
        name: "Bank Audit",
        icon: <FaUniversity className="w-12 h-12 text-orange-600" />,
        description: "Comprehensive bank audits for enhanced financial transparency.",
        detailedDescription: "Our bank audit services offer a thorough review of your financial transactions and internal controls to ensure transparency, accuracy, and compliance with financial regulations."
      },
      {
        id: 8,
        name: "Statutory Audit",
        icon: <FaBuilding className="w-12 h-12 text-gray-600" />,
        description: "Ensure regulatory compliance and accuracy with our statutory audits.",
        detailedDescription: "We conduct statutory audits to verify the accuracy of your financial statements and ensure compliance with all applicable laws and regulations, helping you maintain financial integrity."
      },
      {
        id: 9,
        name: "Internal Audit",
        icon: <FaUserShield className="w-12 h-12 text-red-600" />,
        description: "Strengthen your internal controls with our thorough internal audit services.",
        detailedDescription: "Our internal audit services focus on evaluating and enhancing your internal controls, processes, and risk management practices to ensure operational efficiency and compliance."
      }
    ]
  },
  {
    title: "Consulting Services",
    services: [
      {
        id: 10,
        name: "Management Consulting",
        icon: <FaUserTie className="w-12 h-12 text-cyan-600" />,
        description: "Expert management consulting to drive your business growth and efficiency.",
        detailedDescription: "Our management consulting services provide strategic guidance and actionable insights to help you drive growth, optimize operations, and achieve your business goals effectively."
      },
      {
        id: 11,
        name: "Business Support Services",
        icon: <FaHandsHelping className="w-12 h-12 text-indigo-600" />,
        description: "Tailored business support services to cater to your unique needs.",
        detailedDescription: "We offer customized support services to assist with various aspects of business operations, including administrative support, strategic planning, and more, to help you focus on core activities."
      },
      {
        id: 12,
        name: "Tax Matters",
        icon: <FaLandmark className="w-12 h-12 text-pink-600" />,
        description: "Resolve your tax-related issues with our specialized tax consulting services.",
        detailedDescription: "Our tax consulting services address complex tax matters, providing expert advice and solutions to help you navigate tax regulations and optimize your tax strategy."
      },
      {
        id: 13,
        name: "Financial Planning",
        icon: <FaChartLine className="w-12 h-12 text-green-600" />,
        description: "Strategic financial planning services to secure your financial future.",
        detailedDescription: "We offer comprehensive financial planning services to help you achieve your long-term financial goals, including investment planning, retirement planning, and risk management."
      }
    ]
  },
  {
    title: "NGO Services",
    services: [
      {
        id: 14,
        name: "NGO Registration",
        icon: <FaDonate className="w-12 h-12 text-blue-600" />,
        description: "Comprehensive assistance in registering NGOs for a compliant setup.",
        detailedDescription: "Our NGO registration services guide you through the entire registration process, ensuring compliance with legal requirements and helping you establish your NGO effectively."
      },
      {
        id: 15,
        name: "FCRA Registration",
        icon: <FaHandshake className="w-12 h-12 text-yellow-600" />,
        description: "Expert services for obtaining FCRA registration for your NGO.",
        detailedDescription: "We assist NGOs in obtaining FCRA registration, enabling you to receive foreign donations and comply with all relevant regulations and reporting requirements."
      },
      {
        id: 16,
        name: "NGO Compliance",
        icon: <FaClipboardCheck className="w-12 h-12 text-teal-600" />,
        description: "Ensure compliance with all regulations with our NGO compliance services.",
        detailedDescription: "Our compliance services help NGOs adhere to legal and regulatory requirements, including filing necessary returns and maintaining proper records to avoid any compliance issues."
      }
    ]
  }
];

const ServicesPage = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [cardHeights, setCardHeights] = useState({});

  const toggleExpandCard = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  useEffect(() => {
    const updateCardHeights = () => {
      const newCardHeights = {};
      document.querySelectorAll('.service-card').forEach((card) => {
        const id = card.getAttribute('data-id');
        newCardHeights[id] = card.scrollHeight;
      });
      setCardHeights(newCardHeights);
    };
    
    updateCardHeights();
    window.addEventListener('resize', updateCardHeights);

    return () => {
      window.removeEventListener('resize', updateCardHeights);
    };
  }, [expandedCardId]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden text-center bg-gray-100 md:py-20">
          <motion.div
            className="container relative z-10 px-4 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-[28px] md:text-4xl font-extrabold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Premium Services
            </motion.h2>
            <motion.p
              className="mb-6 text-gray-600 text-md md:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the range of services we offer to cater to your needs.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-[#FFD700] text-black px-6 py-3 text-[16px] font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
            </motion.a>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="mb-6 text-xl font-semibold text-gray-800 md:text-3xl">{category.title}</h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => {
                    const { ref, inView } = useInView({
                      triggerOnce: true,
                      threshold: 0.2,
                    });

                    return (
                      <motion.div
                        key={serviceIndex}
                        ref={ref}
                        data-id={service.id}
                        className={`relative service-card bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-500 ease-in-out`}
                        style={{
                          height: expandedCardId === service.id ? cardHeights[service.id] || 'auto' : '250px',
                          overflow: 'hidden',
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      >
                        <div className="flex flex-col items-center p-6 text-center">
                          <div className="mb-4">
                            {service.icon}
                          </div>
                          <h4 className="mb-2 text-lg font-medium text-gray-800">{service.name}</h4>
                          <p className="mb-4 text-gray-600">{service.description}</p>
                          <button
                            onClick={() => toggleExpandCard(service.id)}
                            className="absolute text-blue-600 transition-transform duration-300 bottom-6 right-6 hover:text-blue-800"
                          >
                            {expandedCardId === service.id ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                        {expandedCardId === service.id && (
                          <div className="p-6 text-sm text-gray-700 transition-opacity duration-300 ease-in-out">
                            {service.detailedDescription}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
