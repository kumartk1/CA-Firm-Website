import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    title: "19 Years of Experience",
    description: "19 years of expertise meeting your financial needs with proven results."
  },
  {
    title: "Personalized Services",
    description: "Tailored services designed for your unique needs."
  },
  {
    title: "Comprehensive Solutions",
    description: "All-in-one solutions covering every aspect of your financial needs."
  }
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ backgroundColor: "transparent", borderRadius: "10px", padding: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#007bff"
      }}></div>
    )
  };

  return (
    <section ref={ref} className="px-4 py-16 bg-gray-100 lg:px-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-6 text-3xl font-extrabold text-gray-900 md:text-4xl"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12 text-lg text-gray-700 md:text-xl"
        >
          Discover why we’re the top choice for your financial needs.
        </motion.p>

        <div className="lg:hidden">
          <Slider {...carouselSettings}>
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 * index }}
                className="p-4"
              >
                <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow-lg">
                  <FontAwesomeIcon icon={faCheckCircle} className="mb-4 text-4xl text-blue-500" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">{reason.title}</h3>
                  <p className="px-2 mt-2 text-sm leading-relaxed text-center text-gray-700">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <div className="flex-wrap justify-center hidden lg:flex">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 * index }}
              className="flex-1 p-4 min-w-[300px] md:min-w-[400px] lg:w-1/4"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
                <FontAwesomeIcon icon={faCheckCircle} className="mb-4 text-4xl text-blue-500" />
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
