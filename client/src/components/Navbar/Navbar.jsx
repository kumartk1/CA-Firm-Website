import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { NavLink, useNavigate } from 'react-router-dom';

const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const email = import.meta.env.VITE_CONTACT_EMAIL;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openWhatsApp = () => {
    const message = "Hello, I would like to know more about your services.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <header className="sticky top-0 bg-[#F5F5F5] shadow-md z-50">
      {/* Top Navbar Bar */}
      <div className="bg-gray-800 text-white text-sm py-2 justify-between items-center hidden md:flex">
        <div className="ml-4 flex items-center space-x-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-2 transition-colors duration-300 hover:text-current" />
            <span className="transition-colors duration-300 hover:text-current">{email}</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 transition-colors duration-300 hover:text-current" />
            <span className="transition-colors duration-300 hover:text-current">{phoneNumber}</span>
          </div>
        </div>
        <div className="mr-4 flex space-x-4">
          <a href="#" className="transition-colors duration-300 hover:text-[#3b5998]"><FaFacebookF /></a>
          <a href="#" className="transition-colors duration-300 hover:text-[#0077b5]"><FaLinkedinIn /></a>
          <a href="#" className="transition-colors duration-300 hover:text-[#e4405f]"><FaInstagram /></a>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="max-w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#01487c] cursor-pointer" onClick={() => navigate('/')}>Nidhi Manish Rathi & Co.</h1>
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          <nav className="space-x-8 flex items-center">
            <NavLink to='/' className=" font-semibold relative group hover:text-blue-600">
              Home
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/services' className=" font-semibold relative group hover:text-blue-600">
              Services
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/blogs' className=" font-semibold relative group hover:text-blue-600">
              Blogs
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/about' className=" font-semibold relative group hover:text-blue-600">
              About
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/contact' className=" font-semibold relative group hover:text-blue-600">
              Contact Us
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
          </nav>
        </div>
        <div className="hidden lg:flex">
          <button 
            onClick={openWhatsApp} 
            className="bg-[#01487c] text-white px-5 py-4 flex items-center rounded-sm transition-all duration-300 ease-in-out hover:bg-[#55b848] hover:scale-105 min-w-[180px]"
          >
            {phoneNumber}
            <FaWhatsapp className="ml-2" />
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay and Slide-in menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} fixed inset-0 z-50`}>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"
          onClick={toggleMenu}
        ></div>
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-4 mt-10 flex justify-between items-center">
            <h2 className="text-lg font-bold mb-4">Nidhi Manish Rathi & Co.</h2>
            <button onClick={toggleMenu} className=" focus:outline-none">
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <FaEnvelope className=" mr-2" />
              <span className="">{email}</span>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className=" mr-2" />
              <span className="">{phoneNumber}</span>
            </div>
          </div>
          <nav className="flex flex-col space-y-4 p-4 border-t border-gray-200">
            <NavLink to='/services' className=" font-semibold relative group hover:text-blue-600">
              Services
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/blogs' className=" font-semibold relative group hover:text-blue-600">
              Blogs
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/about' className=" font-semibold relative group hover:text-blue-600">
              About
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <NavLink to='/contact' className=" font-semibold relative group hover:text-blue-600">
              Contact Us
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </NavLink>
            <button 
              onClick={openWhatsApp} 
              className="bg-[#01487c] text-white px-8 py-4 flex items-center rounded-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#55b848] min-w-[180px]"
            >
              {phoneNumber}
              <FaWhatsapp className="ml-2" />
            </button>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className=" transition-colors duration-300 ease-in-out hover:text-[#3b5998]"><FaFacebookF /></a>
              <a href="#" className=" transition-colors duration-300 ease-in-out hover:text-[#e4405f]"><FaInstagram /></a>
              <a href="#" className=" transition-colors duration-300 ease-in-out hover:text-[#0077b5]"><FaLinkedinIn /></a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
