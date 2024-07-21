import React from 'react'
import bigcity from '../../assets/About assets/big city.jpg';
import Navbar from '../../components/Navbar/Navbar';
import headimage from '../../assets/About assets/female-chartered-accountant.avif';
import Footer from '../../components/Footer/Footer';
import './About.css';
import { stockAuditExperience, visionImgs, clients } from '../../data';
import 'flowbite/dist/flowbite.css';
import { NavLink } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import '../Contact/Contact.css' ;

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="hero">
        <img src={bigcity} alt="big city" className='md:h-[60vh] object-cover object-center w-full' />
      </div>

      <h1 className='text-[24px] md:text-[2rem] px-5 pt-5 text-blue-950 underline underline-offset-4 font-bold tracking-wide decoration-orange-300'>About Us</h1>
      <div className="who-we-are p-5">
        <h2 className='text-[20px] md:text-[1.8rem] text-slate-700 font-semibold tracking-wide'>About Our Firm</h2>
        <p className='text-[16px] md:text-[18px] text-slate-600 font-semibold py-4'>We are Proprietorship Firm
          Established in Year June 2005. We have served the profession for more than 17 Years in the field of Audit & Assurance, Taxation and Business Consultancy Services. We are working in Dewas, Madhya Pradesh, India.</p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center h-fit relative'>
        <div className="head-image w-4/5 md:w-1/2 flex justify-end">
          <img src={headimage} alt="head-image" className='w-full sm:w-2/3 max-w-[550px] h-[35vh] object-cover object-top drop-shadow-sm shadow-white' />
        </div>
        <div className="head-desc w-4/5 md:w-1/2 overflow-y-auto py-5 md:px-5 md:max-h-[30vh]">
          <p className='text-[14px] md:text-[16px] md:text-white text-slate-700 font-semibold mt-5 md:mt-0'>CA Ms. Nidhi Manish Rathi, Partner and Founder of the firm is a fellow member of the Institute of Chartered Accountants of India (ICAI) having experience in the profession of Chartered Accountancy and thorough understanding of the corporate as well as non-corporate entities taxation system.
            <br /><br />
            Experience in FEMA/Transfer Pricing and Valuation of Business Assets. Her core area of practice is foreign company taxation which has given him an edge in analytical thinking & executing assignments with a unique perspective. She has 18 years of experience.

          </p>
        </div>
        <div className='bg-blue-950 h-[37vh] w-[80vw] md:w-[84vw] -z-10 absolute right-10 md:right-0 top-[10px] sm:block hidden'>

        </div>
      </div>

<NavLink to='/contact'><button className="bg-blue-950 text-white px-6 py-4 flex items-center justify-center rounded gap-2 w-[200px] font-bold tracking-wide hover-underline-animation-btn text-[14px] md:text-[1rem] mx-auto md:mx-0 md:mt-20">
              <span className='hover-underline-animation'>Contact</span>
              <MdArrowOutward />
            </button></NavLink>
      

      <div id="default-carousel" className="relative w-full our-vision mt-16 md:mt-20" data-carousel="slide">

        <div className="relative h-72 overflow-hidden md:h-96 bg-black">
          {
            visionImgs.map((img, index) => (
              <div className="duration-700 ease-in-out" data-carousel-item key={index}>
                <img src={img} className='object-cover object-center h-full w-full opacity-40' />
              </div>
            ))
          }

        </div>
        <div className='absolute top-2 sm:top-4 px-4 sm:px-16 sm:py-8 lg:py-12 text-center z-10 h-72 sm:h-56 md:h-96 text-opacity-100   '>
          <h2 className='text-[20px] md:text-[1.8rem] text-white font-semibold tracking-wide pt-5 px-5'>Our Vision</h2>

          <p className='text-[16px] md:text-[18px] text-white font-semibold p-4 h-full overflow-y-clip'>our vision is to be a trusted partner in financial excellence and compliance for our clients.We are committed to providing high-quality, personalized professional services tailored to meet the unique needs of each client.
            <span className='hidden md:inline'>Through our deep industry knowledge, integrity, and dedication, we empower businesses and individuals to manage and grow their financial health effectively. Our goal is to be recognized as leaders in the industry, delivering innovative solutions that ensure financial success and sustainability for our clients.</span>
          </p>
        </div>

        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="experiences w-full mx-auto mb-5 p-4">
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
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-[250px] w-5/6 overflow-hidden rounded-lg text-center mx-auto">
            {
              stockAuditExperience.map((experience, index) => (
                <div className={` duration-700 ease-in-out p-4`} data-carousel-item key={index}>
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
              ))
            }

          </div>
          {/* <!-- Slider controls --> */}
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

      </div>

      <h1 className='text-[24px] md:text-[2rem] text-slate-700 font-semibold tracking-wide text-center px-5 pt-5 sm:pb-5 mt-5'>Our Clients</h1>

      <div className="clients flex-wrap gap-10 w-11/12 mx-auto justify-evenly p-4 hidden sm:flex my-5">
        {clients.map((client, index) => (
          <div className='' key={index}>
            <img src={client} alt="client" className={`sm:h-12 md:h-14 lg:h-20 object-contain p-2 ${index === 2 ? 'bg-black' : ''}`} />
          </div>
        ))}
      </div>

      <div id="default-carousel" className="relative w-full sm:hidden" data-carousel="slide">

        <div className="relative h-56 overflow-hidden">
          {
            clients.map((client, index) => (
              <div className={`duration-700 ease-in-out ${index === 2 ? 'bg-gray-500 rounded-sm h-20 translate-y-[85%] ' : ''}`} data-carousel-item key={index}>
                <img src={client} alt="client" className={`absolute block w-full px-4 h-20 object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === 2 ? 'w-3/4' : ''}`} />
              </div>
            ))
          }

        </div>

        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>


      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default About