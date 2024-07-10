import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const email = import.meta.env.VITE_CONTACT_EMAIL;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openWhatsApp = () => {
    const message = "Hello, I would like to know more about your services.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-full p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nidhi Manish Rathi & Co.</h1>
        <div className="hidden lg:flex flex-1 justify-center">
          <nav className="space-x-8 flex items-center">
            <a href="#" className="text-gray-700 font-semibold">Start Business</a>
            <a href="#" className="text-gray-700 font-semibold">NGO</a>
            <a href="#" className="text-gray-700 font-semibold">Trademark</a>
            <a href="#" className="text-gray-700 font-semibold">Compliances</a>
            <a href="#" className="text-gray-700 font-semibold">Blog</a>
            <a href="#" className="text-gray-700 font-semibold">About</a>
            <a href="#" className="text-gray-700 font-semibold">Contact Us</a>
          </nav>
        </div>
        <div className="hidden lg:flex">
          <button onClick={openWhatsApp} className="bg-blue-700 text-white px-4 py-2 flex items-center rounded transition-transform duration-300 ease-in-out hover:bg-[#25d366]">
            {phoneNumber}
            <FaWhatsapp className="ml-2 text-bold" />
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Slide-in menu */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4 mt-10">
          <h2 className="text-lg font-bold mb-4">Nidhi Manish Rathi & Co.</h2>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-gray-700 mr-2" />
            <span className="text-gray-700">{email}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-gray-700 mr-2" />
            <span className="text-gray-700">{phoneNumber}</span>
          </div>
        </div>
        <nav className="flex flex-col space-y-4 p-4 border-t border-gray-200">
          <a href="#" className="text-gray-700 font-semibold">Start Business</a>
          <a href="#" className="text-gray-700 font-semibold">NGO</a>
          <a href="#" className="text-gray-700 font-semibold">Trademark</a>
          <a href="#" className="text-gray-700 font-semibold">Compliances</a>
          <a href="#" className="text-gray-700 font-semibold">Blog</a>
          <a href="#" className="text-gray-700 font-semibold">About</a>
          <a href="#" className="text-gray-700 font-semibold">Contact Us</a>
          <button onClick={openWhatsApp} className="bg-blue-700 text-white px-4 py-2 flex items-center rounded transition-transform duration-300 ease-in-out hover:bg-[#25d366]">
            {phoneNumber}
            <FaWhatsapp className="ml-2 text-bold" />
          </button>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-700"><FaFacebookF /></a>
            <a href="#" className="text-gray-700"><FaInstagram /></a>
            <a href="#" className="text-gray-700"><FaLinkedinIn /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
