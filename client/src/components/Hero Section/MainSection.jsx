import React from 'react';
import backgroundImg from '../../assets/background-img.jpg';

const MainSection = () => {
  return (
    <section className="relative my-8 text-center bg-cover bg-center h-[55vh] md:h-[85vh]" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h2 className="text-5xl font-bold text-white">Your Trusted Financial Partner</h2>
        <p className="text-2xl my-4 text-white">Expert Solutions for Your Accounting and Tax Needs</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-6 py-3 text-lg rounded transition-transform transform hover:scale-105">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
