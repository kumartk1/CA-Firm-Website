// src/components/ContactIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // For WhatsApp
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // For Phone
import { motion } from 'framer-motion';

const ContactIcons = () => {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello, I would like to know more about your services.'; // Replace with your default message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      {/* WhatsApp Icon */}
      <motion.div
        className="bg-green-500 text-white p-5 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-300"
        onClick={handleWhatsAppClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </motion.div>

      {/* Call Icon - Visible only on screens less than 768px width */}
      <motion.div
        className="bg-blue-500 text-white p-5 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300 md:hidden"
        onClick={handleCallClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </motion.div>
    </div>
  );
};

export default ContactIcons;
