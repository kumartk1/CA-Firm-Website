import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ServicesPage from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import useScrollToTop from './hooks/useScrollToTop';
import ContactIcons from './components/ContactIcons/ContactIcons';

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ContactIcons />
        </>
    );
};

export default App;
