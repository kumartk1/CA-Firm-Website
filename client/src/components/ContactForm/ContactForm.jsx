import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai';

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
        <div className="contact-form w-full md:w-[50%] lg:w-[50%] mx-auto py-10 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
                <div className="mr-4 flex-shrink-0">
                    <AiOutlineUser className="text-gray-600 text-3xl" />
                </div>
                <h1 className="text-slate-700 text-xl md:text-3xl font-semibold tracking-wide">Get a consultation by an Expert</h1>
            </div>
            <div className="my-8 flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6 justify-center items-center">
                    <label htmlFor="clientName" className="w-11/12 sm:w-2/3">
                        <p className="text-base md:text-lg font-semibold text-gray-600 cursor-pointer p-1">Name</p>
                        <div className="flex items-center">
                            <AiOutlineUser className="text-gray-500 mr-2" />
                            <input
                                id="clientName"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-3 text-base md:text-lg w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                            />
                        </div>
                    </label>
                    <label htmlFor="clientEmail" className="w-11/12 sm:w-2/3">
                        <p className="text-base md:text-lg font-semibold text-gray-600 cursor-pointer p-1">Email</p>
                        <div className="flex items-center">
                            <AiOutlineMail className="text-gray-500 mr-2" />
                            <input
                                id="clientEmail"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 text-base md:text-lg w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                            />
                        </div>
                    </label>
                    <label htmlFor="clientNumber" className="w-11/12 sm:w-2/3">
                        <p className="text-base md:text-lg font-semibold text-gray-600 cursor-pointer p-1">Phone Number</p>
                        <div className="flex items-center">
                            <AiOutlinePhone className="text-gray-500 mr-2" />
                            <input
                                id="clientNumber"
                                type="tel"
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="p-3 text-base md:text-lg w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                            />
                        </div>
                    </label>
                    <label htmlFor="clientMessage" className="w-11/12 sm:w-2/3">
                        <p className="text-base md:text-lg font-semibold text-gray-600 cursor-pointer p-1">Message</p>
                        <div className="flex items-center">
                            <AiOutlineMessage className="text-gray-500 mr-2" />
                            <textarea
                                rows={5}
                                id="clientMessage"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="p-3 text-base md:text-lg w-full border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors"
                            />
                        </div>
                    </label>
                    <button
                        type="submit"
                        className="px-6 py-3 text-[16px] text-white rounded-sm font-semibold tracking-wide bg-gray-900 rounded-md shadow-md transition-transform transform hover:scale-105"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
