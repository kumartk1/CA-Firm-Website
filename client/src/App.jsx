import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import OutletPage from './pages/Home/OutletPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<OutletPage />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Contact />} />
          <Route path='/blogs' element={<Contact />} />
          <Route path='/about' element={<Contact />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
