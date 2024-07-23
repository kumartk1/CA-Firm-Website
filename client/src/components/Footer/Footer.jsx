import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-12 space-y-12 lg:space-y-0">

          {/* Mission Statement or Key Offerings */}
          <div className="flex-1 w-full lg:w-1/4">
            <h4 className="text-lg lg:text-xl font-semibold mb-2 text-blue-400">Our Mission</h4>
            <p className="text-sm lg:text-base mb-4">We deliver exceptional financial services that drive success for our clients. Dedicated to providing expert solutions and unparalleled support.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Contact Information */}
          <div className="flex-1 w-full lg:w-1/4">
            <h4 className="text-lg lg:text-xl font-semibold mb-2 text-blue-400">Contact Us</h4>
            <p className="text-sm lg:text-base mb-1">123 Main Street, Suite 100</p>
            <p className="text-sm lg:text-base mb-1">City, State, 12345</p>
            <p className="text-sm lg:text-base mb-1">Phone: (123) 456-7890</p>
            <p className="text-sm lg:text-base">Email: contact@yourcompany.com</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 w-full lg:w-1/4">
            <h4 className="text-lg lg:text-xl font-semibold mb-2 text-blue-400">Quick Links</h4>
            <ul className="space-y-1 text-sm lg:text-base">
              <li><a href="/" className="hover:text-blue-300 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-300 transition duration-300">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-300 transition duration-300">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 w-full lg:w-1/4 flex flex-col items-center lg:items-start">
            <h4 className="text-lg lg:text-xl font-semibold mb-2 text-blue-400">Follow Us</h4>
            <div className="flex space-x-4 text-gray-300">
              <a
                href="https://facebook.com"
                className="hover:text-blue-500 transition duration-300 transform hover:scale-125"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-125"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-blue-600 transition duration-300 transform hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-pink-400 transition duration-300 transform hover:scale-125"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center mt-12">
          <p className="text-xs lg:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
