import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ServicesPage from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
// import Blogs from './pages/Blogs/Blogs';
// import About from './pages/About/About';
import useScrollToTop from './hooks/useScrollToTop';

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<About />} /> */}
            </Routes>
        </>
    );
};

export default App;
