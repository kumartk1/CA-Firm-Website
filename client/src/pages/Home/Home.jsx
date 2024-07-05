import React from 'react' ;
import Navbar from '../../components/Navbar/Navbar';
import MainSection from '../../components/Hero Section/MainSection';
import About from '../../components/About/About';
import ServicesSection from '../../components/Services/ServicesSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <MainSection />
      <About />
      <main className="container mx-auto p-4">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}

export default Home