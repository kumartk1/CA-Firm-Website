import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, number, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="clientName" className="text-sm md:text-base font-semibold text-gray-700 mb-2">Name</label>
                    <input
                        id="clientName"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 text-sm md:text-base text-gray-800 w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="clientEmail" className="text-sm md:text-base font-semibold text-gray-700 mb-2">Email</label>
                    <input
                        id="clientEmail"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 text-sm md:text-base text-gray-800 w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="clientNumber" className="text-sm md:text-base font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                        id="clientNumber"
                        type="tel"
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="p-2 text-sm md:text-base text-gray-800 w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Your Phone Number"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="clientMessage" className="text-sm md:text-base font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                        rows={5}
                        id="clientMessage"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 text-sm md:text-base text-gray-800 w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Your Message"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 px-6 py-3 text-base md:text-lg text-white rounded-md font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                    Submit
                </button>
            </form>
            <div className="mt-6 flex items-center text-gray-600">
                <FiPhoneCall className="text-lg mr-2" />
                <p className="text-base">Or call us at <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a> to get started.</p>
            </div>
        </div>
    );
};

export default ContactForm;