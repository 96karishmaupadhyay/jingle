import React from 'react'
import Home from './pages/Home.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,   
    });
  }, []);
  return (
    <div>
      
    <Home/>
    </div>
  )
}

export default App
