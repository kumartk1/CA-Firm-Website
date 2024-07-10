import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <MainSection />
      <About />
      <main className="container mx-auto p-4">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
