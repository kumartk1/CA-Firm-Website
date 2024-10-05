import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ServicesPage from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
// Uncomment the component you want to use
// import About from './pages/About/About';
// import Blogs from './pages/Blogs/Blogs';
import useScrollToTop from './hooks/useScrollToTop';
import ContactIcons from './components/ContactIcons/ContactIcons';

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                {/* Uncomment the routes you want to use */}
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/blogs" element={<Blogs />} /> */}
            </Routes>
            <ContactIcons />
        </>
    );
};

export default App;
