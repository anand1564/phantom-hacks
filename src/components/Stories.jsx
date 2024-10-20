import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedStorySection = ({ scrolled }) => {
  const [text, setText] = useState('');
  const fullText = "In the eerie silence of the old mansion, a creaky floorboard echoed through the halls. Suddenly, a chilling whisper filled the air...";

  useEffect(() => {
    if (scrolled) {
      let index = 0;
      const timer = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [scrolled]);

  return (
    <motion.div 
      className={`bg-black p-8 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-around items-center">
        <img src="/pumpkins.jpg" alt='pumpkin' />
        <motion.div 
          className='flex flex-col items-center rounded-lg border-solid border-2 border-orange-600 p-5 max-w-md'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className='text-2xl text-orange-600 mb-4'>Spooky Stories</h2>
          <p className="text-orange-400 text-center">{text}</p>
        </motion.div>
      </div>
      <hr className="border-orange-600 my-8" />
    </motion.div>
  );
};

export default AnimatedStorySection;