import React from 'react';
import './index.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import OutletPage from './pages/Home/OutletPage';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<OutletPage />}>
        <Route index element={<Home/>} />
        <Route path='/services' element={<Contact/>} />
        <Route path='/blogs' element={<Contact/>} />
        <Route path='/about' element={<Contact/>} />
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;
