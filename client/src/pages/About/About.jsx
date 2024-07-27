import React from 'react';
import bigcity from '../../assets/About assets/big city.jpg';
import Navbar from '../../components/Navbar/Navbar';
import headimage from '../../assets/About assets/nidhi mam.jpg';
import Footer from '../../components/Footer/Footer';
import './About.css';
import { stockAuditExperience, visionImgs } from '../../data';
import 'flowbite/dist/flowbite.css';
import { NavLink } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import ClientsSection from '../../components/OurClients/ClientsSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whoWeAreRef, whoWeAreInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [headImageRef, headImageInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="about">
      <Navbar />
      
      <motion.div
        className="hero"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <img src={bigcity} alt="big city" className='md:h-[60vh] object-cover object-center w-full' />
      </motion.div>

      <motion.h1
        className='text-[24px] md:text-[2rem] px-5 pt-5 text-blue-950 underline underline-offset-4 font-bold tracking-wide decoration-orange-300'
        ref={whoWeAreRef}
        initial="hidden"
        animate={whoWeAreInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        About Us
      </motion.h1>  
      <motion.div
        className="who-we-are p-5"
        ref={whoWeAreRef}
        initial="hidden"
        animate={whoWeAreInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className='text-[20px] md:text-[1.8rem] text-slate-700 font-semibold tracking-wide'>About Our Firm</h2>
        <p className='text-[16px] md:text-[18px] text-slate-600 font-semibold py-4'>We are a Proprietorship Firm
          Established in Year June 2005. We have served the profession for more than 17 Years in the field of Audit & Assurance, Taxation and Business Consultancy Services. We are working in Dewas, Madhya Pradesh, India.
        </p>
      </motion.div>

      <motion.div
        className='flex flex-col md:flex-row items-center justify-center h-fit relative'
        ref={headImageRef}
        initial="hidden"
        animate={headImageInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="head-image w-4/5 md:w-1/2 flex justify-end">
          <img src={headimage} alt="head-image" className='w-full sm:w-2/3 max-w-[550px] h-[35vh] object-cover object-center border-[5px] border-white' />
        </div>
        <div className="head-desc w-4/5 md:w-1/2 overflow-y-auto py-5 md:px-5 md:max-h-[30vh]">
          <p className='text-[14px] md:text-[16px] md:text-white text-slate-700 font-semibold mt-5 md:mt-0'>Nidhi Manish Rathi & Co., founded by Ms. Nidhi Manish Rathi, FCA, DISA (ICA), M.Com, is a distinguished Chartered Accountancy firm based in Dewas, Madhya Pradesh. Established on June 8, 2005, the firm has been delivering exceptional services in audit, taxation, and business consultancy for over 19 years. We specialize in tax audits, stock audits, internal audits, and statutory audits for various entities, including private companies and banks.
            <br /><br />
            Our firm is adept at handling income tax, e-TDS, GST, company law matters, project finance, and accounting services. With a robust history of collaboration with major banks like State Bank of India, Bank of India, and Canara Bank, we have extensive experience in statutory, revenue, and concurrent audits. We are committed to providing expert consultancy and compliance solutions tailored to our clients' needs, ensuring precision and integrity in all our engagements.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-950 to-blue-800 h-[37vh] w-[80vw] md:w-[84vw] -z-10 absolute right-10 md:right-0 top-[10px] sm:block hidden"></div>
      </motion.div>

      <motion.div
        className="experiences w-full mx-auto mb-5 p-4"
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h1 className='text-[24px] md:text-[2rem] text-slate-700 font-semibold tracking-wide text-center p-5 my-5'>Experiences</h1>
        <div className="hidden container mx-auto sm:flex flex-wrap justify-evenly gap-4">
          {stockAuditExperience.map((experience, index) => (
            <div className="sm:w-5/6 md:w-2/5 md:min-w-[400px] max-w-[500px] bg-white shadow-lg rounded-lg p-4 relative flex-wrap" key={index}>
              <div className="flex flex-col xl:flex-row items-center justify-center gap-5">
                <img
                  className="h-[50px] object-contain object-top"
                  src={experience.img}
                  alt="img"
                />
                <h3 className="uppercase tracking-wide text-[16px] md:text-[18px] font-semibold">{experience.title}</h3>
              </div>
              <p className="mt-2 text-gray-500 text-[14px] md:text-[16px]">{experience.desc}</p>
              <h4 className="mt-4 text-md font-semibold">This includes:</h4>
              <ul className="mt-2 flex flex-wrap gap-x-8 text-slate-600">
                {experience.keydetails.map((keydetail, index) => (
                  <li key={index} className="relative group mb-2">
                    <span className="cursor-pointer text-slate-500">{keydetail.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="default-carousel" className="relative w-full block sm:hidden" data-carousel="slide">
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
                <h4 className="mt-2 text-md font-semibold">This includes:</h4>
                <ul className="flex flex-wrap gap-x-4 text-slate-600 justify-center">
                  {experience.keydetails.map((keydetail, index) => (
                    <li key={index} className="relative group mb-2">
                      <span className="cursor-pointer text-slate-500 text-[12px]">{keydetail.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 -end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </motion.div>

      <motion.h2
        className='text-[20px] md:text-[1.8rem] text-slate-600 font-semibold tracking-wide py-5 px-5 text-center'
        ref={visionRef}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        Our Vision
      </motion.h2>
      
      <motion.div
        className='flex flex-wrap mx-auto'
        ref={visionRef}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <img src={visionImgs[2]} alt="" className='mx-auto w-screen md:w-1/2 object-cover h-56 md:h-full' />
        <div className='text-center z-10 text-opacity-100 md:w-1/2 m-auto'>
          <p className='text-[14px] md:text-[16px] text-slate-600 font-semibold p-4'>Our vision is to be a trusted partner in financial excellence and compliance for our clients. We are committed to providing high-quality, personalized professional services tailored to meet the unique needs of each client.
            <span className='hidden lg:block'>Through our deep industry knowledge, integrity, and dedication, we empower businesses and individuals to manage and grow their financial health effectively. Our goal is to be recognized as leaders in the industry, delivering innovative solutions that ensure financial success and sustainability for our clients.</span>
          </p>
          <NavLink to='/contact'>
            <button className="bg-blue-950 text-white px-3 py-2 flex items-center justify-center rounded gap-2 w-[200px] font-bold tracking-wide hover-underline-animation-btn text-[14px] md:text-[1rem] mx-auto">
              <span className='hover-underline-animation'>Contact</span>
              <MdArrowOutward />
            </button>
          </NavLink>
        </div>
      </motion.div>

      <div className="clients mt-10">
        <ClientsSection />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default About;
