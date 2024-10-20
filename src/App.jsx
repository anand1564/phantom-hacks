import React, { useState, useEffect } from 'react';
import './App.css';
import MovingGhost from './components/MovingGhost';
import HeroWith3D from './components/Hero';
import Footer from './components/Footer';
import SpookyNavbar from './components/Navbar';
import AnimatedStorySection from './components/Stories';
import Timer from './components/Timer';
import About from './components/About';
import Quiz from './components/Quiz';
import { useRef } from 'react';
function App() {
  const [scrolled, setScrolled] = useState(false);

  const storiesRef = useRef(null);
  const aboutRef= useRef(null);
  const quizRef=useRef(null);

  const handleScroll=(ref)=>{
    if(ref && ref.current){
      ref.current.scrollIntoView({behavior:'smooth'});
    }
  }

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
      <SpookyNavbar handleScroll={handleScroll} aboutRef={aboutRef} storiesRef={storiesRef} quizRef={quizRef}/>
      <HeroWith3D handleScroll={handleScroll} storiesRef={storiesRef}/>
      <AnimatedStorySection scrolled={scrolled} ref={storiesRef} />
      <Quiz ref={quizRef}/>
      <About ref={aboutRef}/>
      <Timer />
      <Footer />
    </div>
  );
}

export default App;