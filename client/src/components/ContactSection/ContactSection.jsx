import React, { useState } from 'react';
import { FiPhoneCall, FiMail, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What are your office hours?",
        answer: "Our office is open Monday through Friday, from 9:00 AM to 5:00 PM. We are closed on weekends and public holidays.",
    },
    {
        question: "Can I drop by without an appointment?",
        answer: "Yes, you can visit us without an appointment. However, we recommend scheduling a meeting in advance to ensure that someone is available to assist you promptly.",
    },
    {
        question: "How quickly can I expect a response to my email?",
        answer: "We strive to respond to all emails within 24 hours. If you have an urgent matter, please call us directly for a faster response.",
    },
];

const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => (
    <div className={`border-b py-4 ${isOpen ? 'bg-gray-50' : ''} transition duration-300 ease-in-out`}>
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
            <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">{faq.question}</h4>
            {isOpen ? (
                <FiChevronUp className="text-blue-500 text-xl transition-transform duration-300 ease-in-out" />
            ) : (
                <FiChevronDown className="text-blue-500 text-xl transition-transform duration-300 ease-in-out" />
            )}
        </div>
        <div className={`mt-2 text-gray-600 transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
            <p>{faq.answer}</p>
        </div>
    </div>
);

const ContactSection = () => {
    const [openFAQIndex, setOpenFAQIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 lg:px-16 bg-white text-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 pl-3">
                    <h2 className="text-[28px] md:text-4xl font-extrabold leading-tight mb-4 text-gray-900">Contact Us</h2>
                    <p className="text-[16px] md:text-lg leading-relaxed mb-4 text-gray-800">
                        Have questions? We’re here to help. Reach out to us for any queries or consultation.
                    </p>
                    <p className="text-[16px] md:text-lg leading-relaxed mb-6 text-gray-700">
                        Our team of experts is ready to provide you with the best service and support.
                    </p>
                    <div className="flex items-start mb-6 bg-white p-4 rounded-lg shadow-md">
                        <FiPhoneCall className="text-[24px] md:text-3xl mr-4 text-blue-600" />
                        <div>
                            <p className="text-[16px] md:text-lg font-semibold text-gray-800">Call us at</p>
                            <a href="tel:+1234567890" className="underline text-[16px] md:text-lg font-semibold text-blue-600 hover:text-blue-800">+1 (234) 567-890</a>
                        </div>
                    </div>
                    <div className="flex items-start mb-6 bg-white p-4 rounded-lg shadow-md">
                        <FiMail className="text-[24px] md:text-3xl mr-4 text-blue-600" />
                        <div>
                            <p className="text-[16px] md:text-lg font-semibold text-gray-800">Email us at</p>
                            <a href="mailto:info@example.com" className="underline text-[16px] md:text-lg font-semibold text-blue-600 hover:text-blue-800">info@example.com</a>
                        </div>
                    </div>
                    <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
                        <FiMapPin className="text-[24px] md:text-3xl mr-4 text-blue-600" />
                        <div>
                            <p className="text-[16px] md:text-lg font-semibold text-gray-800">Visit us at</p>
                            <p className="text-[16px] md:text-lg font-semibold text-gray-700">123 Main Street, Anytown, USA</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="w-full bg-white rounded-lg shadow-xl p-6">
                        <h3 className="text-[24px] md:text-3xl font-bold leading-tight mb-4 text-center text-gray-900">Frequently Asked Questions</h3>
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index}
                                faq={faq}
                                index={index}
                                toggleFAQ={toggleFAQ}
                                isOpen={openFAQIndex === index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
