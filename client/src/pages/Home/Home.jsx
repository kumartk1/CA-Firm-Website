// App.jsx

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainSection from '../../components/HeroSection/MainSection';
import About from '../../components/About/About';
import ServicesSection from '../../components/Services/ServicesSection';
import Footer from '../../components/Footer/Footer';
import ClientsSection from '../../components/OurClients/ClientsSection'; 
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import '../../index.css';

function Home() {
  return (
    // bg-[rgba(238,238,238,0.34)]
    <div className="bg-white min-h-screen">
      <Navbar />
      <MainSection />
      <About />
      <ClientsSection />
      <main className="container mx-auto p-4">
        <ServicesSection />
      </main>
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home