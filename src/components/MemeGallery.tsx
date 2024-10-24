import React from 'react';
import { motion } from 'framer-motion';

const MemeGallery: React.FC = () => {
  const memeImages = [
    '/meme1.jpg',
    '/meme2.jpg',
    '/meme3.jpg',
    '/meme4.jpg',
    '/meme5.jpg',
    '/meme6.jpg',
  ];

  return (
    <section className='my-20'>
      <h2 className='text-3xl sm:text-4xl font-bold text-center mb-8'>OIIAOIIA Meme Gallery</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {memeImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={img} alt={`OIIAOIIA Meme ${index + 1}`} className='w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300' />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemeGallery;
