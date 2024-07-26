import React from 'react';
import './index.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import OutletPage from './pages/Home/OutletPage';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import 'flowbite/dist/flowbite.css';
import Services from './pages/Services/Services' ;

function App() {
  return (
    <Routes>
      <Route path='/' element={<OutletPage />}>
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
