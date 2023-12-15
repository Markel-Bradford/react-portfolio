import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Pages/Homepage';
import AboutMe from './Components/Pages/Aboutme';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Homepage} />
          <Route path='/about-me' exact Component={AboutMe} />
          <Route path='/projects' exact Component={Projects} />
          <Route path='/contact' exact Component={Contact} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
