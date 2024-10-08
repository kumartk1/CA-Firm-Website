import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Footer = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate();

  return (
    <footer className="relative px-6 py-12 text-gray-300 bg-gray-900 lg:px-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col justify-between space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">

          {/* Mission Statement or Key Offerings */}
          <div className="flex-1 w-full lg:w-1/4">
            <h4 className="mb-2 text-lg font-semibold text-blue-400 lg:text-xl">Our Vision</h4>
            <p className="mb-4 text-sm lg:text-base">We deliver exceptional financial services that drive success for our clients. Dedicated to providing expert solutions and unparalleled support.</p>
            <button
              className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              onClick={() => navigate('/about')} // Redirect to the About page on click
            >
              Learn More
            </button>
          </div>

          {/* Contact Information */}
          <div className="flex-1 w-full lg:w-1/4">
            <h4 className="mb-2 text-lg font-semibold text-blue-400 lg:text-xl">Contact Us</h4>
            <p className="mb-1 text-sm lg:text-base">52, Tarani Colony, Behind Forest Office</p>
            <p className="mb-1 text-sm lg:text-base">Dewas (M.P), 455001</p>
            <p className="mb-1 text-sm lg:text-base">Phone: +91-9826406256</p>
            <p className="text-sm lg:text-base">Email: nidhimanishrathi@rediffmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 w-full lg:w-1/4">
            <h4 className="mb-2 text-lg font-semibold text-blue-400 lg:text-xl">Quick Links</h4>
            <ul className="space-y-1 text-sm lg:text-base">
              <li><a href="/" className="transition duration-300 hover:text-blue-300">Home</a></li>
              <li><a href="/about" className="transition duration-300 hover:text-blue-300">About Us</a></li>
              <li><a href="/services" className="transition duration-300 hover:text-blue-300">Services</a></li>
              <li><a href="/contact" className="transition duration-300 hover:text-blue-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center flex-1 w-full lg:w-1/4 lg:items-start">
            <h4 className="mb-2 text-lg font-semibold text-blue-400 lg:text-xl">Follow Us</h4>
            <div className="flex space-x-4 text-gray-300">
              <a
                href="https://facebook.com"
                className="transition duration-300 transform hover:text-blue-500 hover:scale-125"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://twitter.com"
                className="transition duration-300 transform hover:text-blue-400 hover:scale-125"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://linkedin.com"
                className="transition duration-300 transform hover:text-blue-600 hover:scale-125"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
              <a
                href="https://instagram.com"
                className="transition duration-300 transform hover:text-pink-400 hover:scale-125"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 text-center border-t border-gray-700">
          <p className="text-xs text-gray-400 lg:text-sm">
            &copy; {new Date().getFullYear()} Nidhi Manish Rathi & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
