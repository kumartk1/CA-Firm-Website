import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ServicesPage from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
<<<<<<< HEAD
// import About from './pages/About/About';
import useScrollToTop from './hooks/useScrollToTop';
import ContactIcons from './components/ContactIcons/ContactIcons';
=======
// import Blogs from './pages/Blogs/Blogs';
// import About from './pages/About/About';
import useScrollToTop from './hooks/useScrollToTop';
>>>>>>> 546bd47a03ef45902d48b4aa2401ede336f7b08d

const App = () => {
    useScrollToTop();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
<<<<<<< HEAD
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ContactIcons />
=======
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<About />} /> */}
            </Routes>
>>>>>>> 546bd47a03ef45902d48b4aa2401ede336f7b08d
        </>
    );
};

export default App;
