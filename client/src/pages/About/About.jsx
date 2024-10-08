import React from 'react';
import bigcity from '../../assets/About assets/big city.jpg';
import Navbar from '../../components/Navbar/Navbar';
import headimage from '../../assets/About assets/nidhi mam.jpg';
import Footer from '../../components/Footer/Footer';
import './About.css';
import { stockAuditExperience } from '../../data';
import 'flowbite/dist/flowbite.css';
import ClientsSection from '../../components/OurClients/ClientsSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whoWeAreRef, whoWeAreInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [headImageRef, headImageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="about">
      <Navbar />
      
      <motion.div
        className="relative overflow-hidden hero"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <img src={bigcity} alt="big city" className='md:h-[60vh] object-cover object-center w-full rounded-lg shadow-lg' />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
      </motion.div>

      <motion.h1
        className='text-[24px] md:text-[2rem] px-5 pt-5 text-center text-blue-950 underline underline-offset-4 font-bold tracking-wide decoration-orange-300'
        ref={whoWeAreRef}
        initial="hidden"
        animate={whoWeAreInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        About Us
      </motion.h1>  

      <motion.div
        className="p-5 who-we-are"
        ref={whoWeAreRef}
        initial="hidden"
        animate={whoWeAreInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className='text-[20px] md:text-[1.8rem] text-slate-700 font-semibold tracking-wide'>About Our Firm</h2>
        <p className='text-[16px] md:text-[18px] text-slate-600 font-semibold py-4'>
          We are a Proprietorship Firm Established in Year June 2005. We have served the profession for more than 17 Years in the field of Audit & Assurance, Taxation and Business Consultancy Services. We are working in Dewas, Madhya Pradesh, India.
        </p>
      </motion.div>

      <motion.div
        className='relative flex flex-col items-center justify-center md:flex-row h-fit'
        ref={headImageRef}
        initial="hidden"
        animate={headImageInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="flex justify-end w-4/5 head-image md:w-1/2">
          <img src={headimage} alt="head-image" className='w-full sm:w-2/3 max-w-[550px] h-[35vh] object-cover object-center border-[5px] border-white' />
        </div>
        <div className="head-desc w-4/5 md:w-1/2 overflow-y-auto py-5 md:px-5 md:max-h-[30vh]">
          <p className='text-[14px] md:text-[16px] md:text-white text-slate-700 font-semibold mt-5 md:mt-0'>
            Nidhi Manish Rathi & Co., founded by Ms. Nidhi Manish Rathi, FCA, DISA (ICA), M.Com, is a distinguished Chartered Accountancy firm based in Dewas, Madhya Pradesh. Established on June 8, 2005, the firm has been delivering exceptional services in audit, taxation, and business consultancy for over 19 years. We specialize in tax audits, stock audits, internal audits, and statutory audits for various entities, including private companies and banks.
            <br /><br />
            Our firm is adept at handling income tax, e-TDS, GST, company law matters, project finance, and accounting services. With a robust history of collaboration with major banks like State Bank of India, Bank of India, and Canara Bank, we have extensive experience in statutory, revenue, and concurrent audits. We are committed to providing expert consultancy and compliance solutions tailored to our clients' needs, ensuring precision and integrity in all our engagements.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-[37vh] w-[80vw] md:w-[84vw] -z-10 absolute right-10 md:right-0 top-[10px] sm:block hidden"></div>
      </motion.div>

      <motion.div
        className="w-full p-4 mx-auto mb-5 experiences"
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h1 className='text-[24px] md:text-[2rem] text-slate-700 font-semibold tracking-wide text-center p-5 my-5'>Experiences</h1>
        <div className="container flex-wrap hidden gap-4 mx-auto sm:flex justify-evenly">
          {stockAuditExperience.map((experience, index) => (
            <div className="sm:w-5/6 md:w-2/5 md:min-w-[400px] max-w-[500px] bg-white shadow-lg rounded-lg p-4 relative flex-wrap" key={index}>
              <div className="flex flex-col items-center justify-center gap-5 xl:flex-row">
                <img
                  className="h-[50px] object-contain object-top"
                  src={experience.img}
                  alt="img"
                />
                <h3 className="uppercase tracking-wide text-[16px] md:text-[18px] font-semibold">{experience.title}</h3>
              </div>
              <p className="mt-2 text-gray-500 text-[14px] md:text-[16px]">{experience.desc}</p>
              <h4 className="mt-4 font-semibold text-md">This includes:</h4>
              <ul className="flex flex-wrap mt-2 gap-x-8 text-slate-600">
                {experience.keydetails.map((keydetail, index) => (
                  <li key={index} className="relative mb-2 group">
                    <span className="cursor-pointer text-slate-500">{keydetail.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="default-carousel" className="relative block w-full sm:hidden" data-carousel="slide">
          {/* Carousel wrapper */}
          <div className="relative h-[250px] w-5/6 overflow-hidden rounded-lg text-center mx-auto">
            {stockAuditExperience.map((experience, index) => (
              <div className={`duration-700 ease-in-out p-4`} data-carousel-item key={index}>
                <div className="flex flex-col items-center justify-center gap-5">
                  <img
                    className="h-[30px] object-contain"
                    src={experience.img}
                    alt="img"
                  />
                  <h3 className="uppercase tracking-wide text-[14px] font-semibold">{experience.title}</h3>
                </div>
                <p className="mt-2 text-gray-500 text-[12px]">{experience.desc}</p>
                <h4 className="mt-2 font-semibold text-md">This includes:</h4>
                <ul className="flex flex-wrap justify-center gap-x-4 text-slate-600">
                  {experience.keydetails.map((keydetail, index) => (
                    <li key={index} className="relative mb-2 group">
                      <span className="cursor-pointer text-slate-500 text-[12px]">{keydetail.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button type="button" className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none left-2" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 text-blue-700 transition-colors duration-300 bg-white rounded-full hover:bg-blue-700 hover:text-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M13.5 4.5a.5.5 0 01.3.9l-6 6a.5.5 0 010 .7l6 6a.5.5 0 01-.7.7l-6-6a1.5 1.5 0 010-2.1l6-6a.5.5 0 01.4-.1z" clipRule="evenodd"></path></svg>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 text-blue-700 transition-colors duration-300 bg-white rounded-full hover:bg-blue-700 hover:text-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.5 4.5a.5.5 0 00-.3.9l6 6a.5.5 0 010 .7l-6 6a.5.5 0 00.7.7l6-6a1.5 1.5 0 000-2.1l-6-6a.5.5 0 00-.4-.1z" clipRule="evenodd"></path></svg>
            </span>
          </button>
        </div>
      </motion.div>

      <motion.div
        className="vision"
        ref={visionRef}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
       <h1 className='text-[24px] md:text-[2rem] text-center px-5 pt-5 text-blue-950 underline underline-offset-4 font-bold tracking-wide decoration-orange-300'>Our Vision</h1>
        <p className='text-[16px] md:text-[18px] px-5  pt-5 text-slate-600 font-semibold py-16'>
        Our vision is to be a trusted advisor, committed to delivering innovative and sustainable solutions for our clients, ensuring their financial well-being and growth. 
        We aspire to empower businesses with knowledge and insights, fostering a collaborative environment where success is a shared journey. Through integrity, excellence, and dedication, we aim to build lasting relationships that transcend traditional consultancy roles, becoming a partner in every client's success story.
        </p>
      </motion.div>

      <ClientsSection />

      <Footer />
    </div>
  );
};

export default About;
