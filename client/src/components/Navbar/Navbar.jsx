// ./src/components/Header.js
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate() ;

  return (
    <header className="bg-white border-b-[1px] border-slate-400 shadow-sm shadow-slate-300 z-50 sticky top-0 " >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <p className="text-2xl font-bold cursor-pointer" onClick={()=>navigate('/')}>Nidhi Manish Rathi & Co.</p>
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to='/services' className="text-gray-600">Services</NavLink>
          <NavLink to='/blogs' className="text-gray-600">Blogs</NavLink>
          <NavLink to='/about' className="text-gray-600">About</NavLink>
          <NavLink to='/contact' className="text-gray-600">Contact Us</NavLink>
          <button className="bg-green-500 text-white px-4 py-2 flex items-center rounded">
            +91-XXXXX00000
            <FaWhatsapp className="ml-2" />
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="text-gray-600">Services</a>
            <a href="#" className="text-gray-600">Blogs</a>
            <a href="#" className="text-gray-600">About</a>
            <a href="#" className="text-gray-600">Contact Us</a>
            <button className="bg-green-500 text-white px-4 py-2 flex items-center rounded">
              +91-XXXXX00000
              <FaWhatsapp className="ml-2" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
