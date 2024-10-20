import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiGhost } from "react-icons/gi";

export default function MovingGhost() {
  const [position, setPosition] = useState({ x: 30, y: 30 });
  const [isInitialPosition, setIsInitialPosition] = useState(true);

  const moveGhost = () => {
    const newX = Math.random() * (window.innerWidth - 100); // 100 is the ghost size
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
    setIsInitialPosition(false);
  };

  const resetPosition = () => {
    setPosition({ x: 20, y: 20 });
    setIsInitialPosition(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5; // Adjust this value as needed
      if (window.scrollY > scrollThreshold && !isInitialPosition) {
        resetPosition();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInitialPosition]);

  return (
    <motion.div
      className="fixed cursor-pointer z-50"
      animate={position}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      onClick={moveGhost}
    >
      <GiGhost className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}