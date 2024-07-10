import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainSection from '../../components/HeroSection/MainSection';
import About from '../../components/About/About';
import ServicesSection from '../../components/Services/ServicesSection';
import Footer from '../../components/Footer/Footer';
import '../../index.css';
import ContactForm from '../../components/ContactForm/ContactForm';


function App() {
  return (
    <div className="bg-[rgba(238,238,238,0.34)] min-h-screen">
      <Navbar />
      <MainSection />
      <About />
      <main className="container mx-auto p-4">
        <ServicesSection />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
