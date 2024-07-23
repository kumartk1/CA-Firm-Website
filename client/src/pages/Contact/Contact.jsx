import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import consultingImage from '../../assets/contact assets/consultingPic.webp';
import { MdArrowOutward } from "react-icons/md";
import "./Contact.css";
import ContactCard from './ContactCard';
import Map from '../../components/Map/Map';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactSection from '../../components/ContactSection/ContactSection';

const Contact = () => {
  const contactsData = [
    {
      type: 'call',
      subheading: 'For expert financial guidance, please contact our Chartered Accountant at ',
      contact: '+91 XXXXX-XXXXX',
      message: 'call or message now'
    },
    {
      type: 'email',
      subheading: 'For professional financial advice, please reach out to our Chartered Accountant at ',
      contact: 'admin@gmail.com',
      message: 'mail now'
    },
    {
      type: 'visit',
      subheading: 'For professional financial assistance, we welcome you to visit our office.',
      contact: 'location',
      message: 'visit now'
    }
  ];

  return (
    <div className='min-h-screen h-fit'>
      <Navbar />

      <div className='bg-gray-200 flex max-h-[400px] justify-between mb-10 border-b-2 border-b-slate-700'>
        <div className='overflow-y-auto w-3/4 md:w-2/4 m-auto md:mx-0'>
          <div className='text-slate-600 flex flex-col gap-y-5 text-center p-2 py-4 md:p-8 w-full lg:w-2/3 md:text-left justify-center'>
            <h1 className='text-[16px] md:text-[2rem] font-bold tracking-wider text-slate-700'>Contact Us</h1>
            <p className='text-[12px] md:text-[1rem] font-semibold tracking-wide'>For personalized financial advice and professional accounting services, reach out to us today. We are committed to helping you achieve your financial goals.</p>
            <button className="bg-gray-800 text-white px-4 py-2 flex items-center justify-center rounded gap-2 max-w-[150px] font-bold tracking-wide hover-underline-animation-btn text-[14px] md:text-[1rem] mx-auto md:mx-0">
              <span className='hover-underline-animation'>Contact</span>
              <MdArrowOutward />
            </button>
          </div>
        </div>
        <div className="hidden md:inline-block consulting-image w-1/2">
          <img src={consultingImage} alt="consulting image" className='object-cover h-full w-full object-top' />
        </div>
      </div>

      <div className='flex flex-wrap my-16 justify-evenly gap-10'>
        {
          contactsData.map((contactData, index) => (
            <ContactCard contactData={contactData} key={index} index={index} />
          ))
        }
      </div>

      <h1 className='text-[16px] md:text-[2rem] text-slate-700 mt-10 mb-5 text-center font-semibold tracking-wide'>Connect with our offices</h1>
      <div className="location flex justify-center items-center flex-col md:flex-row mb-10">
        <Map />
        <div className='w-4/5 md:w-1/4 p-4 border-[2px] border-slate-700 md:h-[60vh] flex flex-wrap gap-x-12 gap-y-6 md:flex-col justify-evenly'>
          <div>
            <h1 className='text-[16px] md:text-[1.2rem] text-slate-800 font-semibold'>Headquarters Location</h1>
            <p className='flex flex-col text-slate-500'>
              <span>House No. 135</span>
              <span>Kamal Colony, Samrala</span>
              <span>Punjab, India</span>
            </p>
          </div>
          <div>
            <h1 className='text-[16px] md:text-[1.2rem] text-slate-800 font-semibold'>Phone</h1>
            <p className='flex flex-col text-slate-500'>
              <span>{contactsData[0].contact}</span>
            </p>
          </div>
          <div>
            <h1 className='text-[16px] md:text-[1.2rem] text-slate-800 font-semibold'>Email</h1>
            <p className='flex flex-col text-slate-500'>
              <span>{contactsData[1].contact}</span>
            </p>
          </div>
        </div>
      </div>

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Contact;
