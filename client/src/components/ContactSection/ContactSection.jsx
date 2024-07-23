import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { FiPhoneCall } from 'react-icons/fi';

const ContactSection = () => {
    return (
        // bg-gradient-to-r from-blue-500 to-purple-600
        <section className="py-16 px-4 lg:px-16 text-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 pl-3">
                    <h2 className="text-[28px] md:text-4xl font-extrabold leading-tight mb-4">Contact Us</h2>
                    <p className="text-[16px] md:text-lg leading-relaxed mb-4">
                        Have questions? We’re here to help. Reach out to us for any queries or consultation.
                    </p>
                    <p className="text-[16px] md:text-lg leading-relaxed mb-6">
                        Our team of experts is ready to provide you with the best service and support.
                    </p>
                    <div className="flex items-center">
                        <FiPhoneCall className="text-[16px] md:text-lg mr-2" />
                        <p className="text-[16px] md:text-lg">Call us at <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a> to get started.</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
