

import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className='flex justify-around flex-row items-center'>
        <motion.img src='/Jack-o-lantern.jpg' alt="jackolantern" className='display-none xs:block' animate={{y:[0,25,0]}} transition={{
            duration:2,
            repeat:Infinity,
            ease:'easeInOut'
        }} />
        <motion.div className="flex justify-center items-center flex-col border-solid border-2 border-orange-500 p-5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}>
            <h2 className='text-2xl text-white '>Significance</h2>
            <p className="text-orange-400 text-center"> It is at the beginning of the observance of Allhallowtide,[12] the time in the liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed.[3][13][14][15] In popular culture, the day has become a celebration of horror, being associated with the macabre and supernatural.[16]</p>
        </motion.div>
        <motion.img 
          src='/trickortreat.webp' 
          alt="trickortreat" 
          height={360}
          width={354}
          animate={{y:[0,20,0]}}
          transition={{
            duration:2,
            repeat:Infinity,
          }}
        />
    </div>
  )
}

export default About