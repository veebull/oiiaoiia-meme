import React from 'react';
import { motion } from 'framer-motion';
import Tokenomics from '../components/Tokenomics';

const TokenomicsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">OIIAOIIA Tokenomics</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="mb-4">
          Our tokenomics are designed to create a sustainable and rewarding ecosystem for all OIIAOIIA holders.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Token Distribution:</h2>
        <Tokenomics />
        <h2 className="text-2xl font-semibold mb-3 mt-8">Additional Features:</h2>
        <ul className="list-disc list-inside">
          <li>2% transaction fee: 1% redistributed to holders, 1% added to liquidity pool</li>
          <li>Quarterly token burns to maintain scarcity</li>
          <li>Staking rewards for long-term holders</li>
          <li>Community treasury for funding development and marketing initiatives</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TokenomicsPage;
