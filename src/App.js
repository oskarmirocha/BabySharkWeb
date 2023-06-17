import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Watch from './components/pages/Watch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/watch' element={<Watch/>} />
            </Routes>
      </Router> 
    </>     
);
}

export default App;

