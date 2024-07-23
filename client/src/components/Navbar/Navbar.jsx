import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const email = import.meta.env.VITE_CONTACT_EMAIL;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openWhatsApp = () => {
        const message = "Hello, I would like to know more about your services.";
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const handleNavLinkClick = (path) => {
        if (location.pathname === path) {
            window.location.reload();
        } else {
            navigate(path);
        }
    };

    return (
        <header className="sticky top-0 bg-gradient-to-r from-[#F5F5F5] via-[#FFFFFF] to-[#F5F5F5] z-50">
            {/* Top Navbar Bar */}
            <div className="bg-gray-900 text-white text-sm py-2 justify-between items-center hidden md:flex">
                <div className="ml-4 flex items-center space-x-4">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 transition-colors duration-300 hover:text-current" />
                        <a href={`mailto:${email}`} className="transition-colors duration-300 hover:text-current">{email}</a>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-2 transition-colors duration-300 hover:text-current" />
                        <a href={`tel:${phoneNumber}`} className="transition-colors duration-300 hover:text-current">{phoneNumber}</a>
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
                <h1 className="text-2xl font-bold text-[#01487c] cursor-pointer" onClick={() => handleNavLinkClick('/')}>Nidhi Manish Rathi & Co.</h1>
                <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 text-slate-800">
                    <nav className="space-x-8 flex items-center">
                        <button
                            className="font-semibold relative group hover:text-blue-600"
                            onClick={() => handleNavLinkClick('/')}
                        >
                            Home
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <button
                            className="font-semibold relative group hover:text-blue-600"
                            onClick={() => handleNavLinkClick('/services')}
                        >
                            Services
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <button
                            className="font-semibold relative group hover:text-blue-600"
                            onClick={() => handleNavLinkClick('/blogs')}
                        >
                            Blogs
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <button
                            className="font-semibold relative group hover:text-blue-600"
                            onClick={() => handleNavLinkClick('/about')}
                        >
                            About
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                        <button
                            className="font-semibold relative group hover:text-blue-600"
                            onClick={() => handleNavLinkClick('/contact')}
                        >
                            Contact Us
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </button>
                    </nav>
                </div>
                <div className="hidden lg:flex">
                    <button
                        onClick={openWhatsApp}
                        className="bg-[#01487c] text-white px-5 py-4 flex items-center rounded-full transition-all duration-300 ease-in-out hover:bg-[#55b848] hover:scale-105 min-w-[180px]"
                    >
                        {phoneNumber}
                        <FaWhatsapp className="ml-2" />
                    </button>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Overlay and Slide-in menu */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"
                    onClick={toggleMenu}
                ></div>
                <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-4 mt-10 flex justify-between items-center">
                        <h2 className="text-lg font-bold mb-4">Nidhi Manish Rathi & Co.</h2>
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <IoMdClose size={24} />
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="mr-2" />
                            <a href={`mailto:${email}`} className="transition-colors duration-300 hover:text-current">{email}</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="mr-2" />
                            <a href={`tel:${phoneNumber}`} className="transition-colors duration-300 hover:text-current">{phoneNumber}</a>
                        </div>
                    </div>
                    <hr className="border-t border-gray-400" />
                    <div className="p-4 flex flex-col text-slate-800 space-y-4 no-underline">
                        <button
                            className="font-semibold text-left hover:text-blue-600" 
                            onClick={() => {
                                handleNavLinkClick('/');
                                toggleMenu();
                            }}
                        >
                            Home
                        </button>
                        <button
                            className="font-semibold text-left hover:text-blue-600" 
                            onClick={() => {
                                handleNavLinkClick('/services');
                                toggleMenu();
                            }}
                        >
                            Services
                        </button>
                        <button
                            className="font-semibold text-left hover:text-blue-600" 
                            onClick={() => {
                                handleNavLinkClick('/blogs');
                                toggleMenu();
                            }}
                        >
                            Blogs
                        </button>
                        <button
                            className="font-semibold text-left hover:text-blue-600" 
                            onClick={() => {
                                handleNavLinkClick('/about');
                                toggleMenu();
                            }}
                        >
                            About
                        </button>
                        <button
                            className="font-semibold text-left hover:text-blue-600" 
                            onClick={() => {
                                handleNavLinkClick('/contact');
                                toggleMenu();
                            }}
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={openWhatsApp}
                            className="bg-[#01487c] text-white px-9 py-4 flex items-center rounded-full transition-all duration-300 ease-in-out hover:bg-[#55b848] hover:scale-105 min-w-[180px]"
                        >
                            {phoneNumber}
                            <FaWhatsapp className="ml-2 text-lg" /> {/* Increased size */}
                        </button>
                    </div>
                    <div className="flex justify-center space-x-6 p-4"> {/* Increased size */}
                        <a href="#" className="transition-colors duration-300 hover:text-[#3b5998] text-xl"><FaFacebookF /></a>
                        <a href="#" className="transition-colors duration-300 hover:text-[#0077b5] text-xl"><FaLinkedinIn /></a>
                        <a href="#" className="transition-colors duration-300 hover:text-[#e4405f] text-xl"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
