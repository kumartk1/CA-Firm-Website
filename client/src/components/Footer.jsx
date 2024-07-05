import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 md:ml-4">
            <h3 className="text-lg font-bold mb-4">Audit and Tax</h3>
            <ul className="space-y-2">
              <li>ITR Filing</li>
              <li>GST Return</li>
              <li>TDS Return</li>
              <li>GST Audit</li>
              <li>Tax Audit</li>
              <li>Bank Audit</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 md:mr-4">
            <h3 className="text-lg font-bold mb-4">Get Contact</h3>
            <p className="flex items-center"><FaPhoneAlt className="mr-2 md:hidden" /> +91-XXXXX00000</p>
            <p className="flex items-center"><FaEnvelope className="mr-2 md:hidden" /> contact@example.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2 md:hidden" /> 123, Jaipur, India</p>
            <div className="flex space-x-4 mt-4 md:justify-start">
              <FaFacebook className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaLinkedin className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nidhi Manish Rathi & Co. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white">Disclaimer</a> | 
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
