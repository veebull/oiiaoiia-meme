import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className='text-center py-20 bg-gradient-to-r from-red-500 to-purple-600'>
      <motion.h1
        className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        OIIAOIIA Meme Token
      </motion.h1>
      <motion.p
        className='text-xl sm:text-2xl mb-8 text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        The ultimate crypto fusion of "OO EE A E A" and DeFi!
      </motion.p>
      <motion.div
        className='mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg relative z-20'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/ZHgyQGoeaB0'
          title='OIIAOIIA Meme Video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='relative z-20'
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Hero;
