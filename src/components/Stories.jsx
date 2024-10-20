import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const storyParts = [
  "In the eerie silence of the old mansion, a creaky floorboard echoed through the halls. Suddenly, a chilling whisper filled the air, beckoning you deeper into the shadows. As you stepped inside, the door slammed shut behind you, sealing your fate within these haunted walls.",
  "The whisper turned into a low, mocking laughter that echoed through the empty rooms. You felt a cold draft brushing past your neck, making your skin crawl. As you explored the dimly lit hallway, ghostly figures danced in the corner of your eye, vanishing when you turned to face them.",
  "You stumbled upon a dusty old mirror that reflected not your image but the faces of those who had perished in the mansion. Their eyes were filled with despair as they pointed toward a dark doorway at the end of the hall. Overcome by curiosity, you approached the door, feeling an overwhelming urge to know what lay beyond.",
  "As you opened the door, a chilling wind howled through the passage, and the laughter grew louder. You found yourself in a room filled with flickering candles and an ancient book on a pedestal. The book's pages turned on their own, revealing a spell that could either free the trapped souls or doom you forever. With trembling hands, you faced the choice that would determine your fate."
];

const AnimatedStorySection = ({ scrolled }) => {
  const [currentPart, setCurrentPart] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setText('');
    if (scrolled) {
      let index = 0;
      const fullText = storyParts[currentPart];
      const timer = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [scrolled, currentPart]);

  const handleNext = () => {
    if (currentPart < storyParts.length - 1) {
      setCurrentPart((prev) => prev + 1);
    }
  };

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
          <button 
            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full transition-colors duration-200 transform hover:scale-105 mt-4' 
            onClick={handleNext}
          >
            Next
          </button>
        </motion.div>
      </div>
      <hr className="border-orange-600 my-8" />
    </motion.div>
  );
};

export default AnimatedStorySection;
