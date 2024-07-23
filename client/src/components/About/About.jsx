import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundImg from '../../assets/background-img.jpg';

const About = () => {
  const [imgRef, imgInView] = useInView({ triggerOnce: true });
  const [textRef, textInView] = useInView({ triggerOnce: true });

  return (
    <section className="py-12 mt-0 md:py-8 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-full mb-8"
            ref={imgRef}
            initial={{ opacity: 0, y: -50 }} // Fade in from the top
            animate={{ opacity: imgInView ? 1 : 0, y: imgInView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <img
              src={backgroundImg}
              alt="Background"
              className="rounded-xl shadow-lg mx-auto transform transition-transform duration-500 hover:scale-105"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
            />
          </motion.div>
          <motion.div
            className="w-full"
            ref={textRef}
            initial={{ opacity: 0, x: -50 }} // Original image animation
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <h2 className="whitespace-nowrap text-[28px] md:text-[28px] lg:text-4xl font-bold mb-6 text-center text-slate-800">
              Nidhi Manish Rathi & Co.
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-lg mb-6 text-justify text-gray-600 leading-relaxed">
              Nidhi Manish Rathi & Co. is a proprietorship Chartered Accountant firm established in June 2005. With over 19 years of experience, we have been providing exceptional services in the fields of Audit & Assurance, Taxation, and Business Consultancy Services. Based in Dewas (M.P), our vision is to deliver quality professional services tailored to the needs of our valuable clients, ensuring the highest level of professionalism. Our professional and experienced viewpoint helps our clients to manage and grow their businesses.
            </p>
            <div className="text-center">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white hover:shadow-lg">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
