import React, { useState, useEffect } from 'react';
import './App.css';
import MovingGhost from './components/ghost';
import HeroWith3D from './components/Hero';
import Footer from './components/Footer';
import SpookyNavbar from './components/Navbar';
import AnimatedStorySection from './components/Stories';
import Timer from './components/Timer';
import About from './components/About';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // Adjust this value as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="relative">
      <MovingGhost />
      <SpookyNavbar />
      <HeroWith3D/>
      <AnimatedStorySection scrolled={scrolled} />
      <About />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;