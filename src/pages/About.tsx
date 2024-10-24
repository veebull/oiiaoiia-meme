import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">About OIIAOIIA</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          OIIAOIIA is more than just a meme token – it's a community-driven project inspired by the viral "OO EE A E A" meme that took the internet by storm.
        </p>
        <p className="mb-4">
          Our mission is to bring the fun and excitement of meme culture to the world of cryptocurrency, creating a unique ecosystem where creativity, humor, and financial opportunity intersect.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Key Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Community-driven development and governance</li>
          <li>Regular meme contests with OIIAOIIA token rewards</li>
          <li>Exclusive access to OIIAOIIA NFTs and merchandise</li>
          <li>Deflationary tokenomics to reward long-term holders</li>
        </ul>
        <p>
          Join us in our journey to make OIIAOIIA the most recognizable and fun meme token in the crypto space!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
