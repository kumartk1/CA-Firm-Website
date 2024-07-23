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

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  appendDots: dots => (
    <div
      style={{
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <ul style={{ margin: "0px" }}>{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#007bff"
      }}
    ></div>
  )
};

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-gray-100 py-16 px-4 lg:px-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="why-choose-us-heading text-[28px] md:text-4xl font-extrabold text-gray-900 mb-4"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="why-choose-us-subheading text-[16px] md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
        >
          Discover why we’re the top choice for your financial needs.
        </motion.p>

        {/* Carousel for small devices */}
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
                <div className="why-choose-us-card bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-blue-500 mb-4" />
                  <h3 className="text-[16px] sm:text-xl font-semibold text-gray-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[12px] text-gray-700 leading-relaxed text-center px-2">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Grid for larger devices */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 * index }}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <div className="why-choose-us-card bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
                <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
