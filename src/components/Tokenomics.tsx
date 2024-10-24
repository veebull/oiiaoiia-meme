import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics: React.FC = () => {
  const tokenomicsData = [
    { label: 'Community Rewards', value: '40%', icon: '🎉' },
    { label: 'Liquidity Pool', value: '30%', icon: '💧' },
    { label: 'Team', value: '20%', icon: '👥' },
    { label: 'Marketing', value: '10%', icon: '📢' },
  ];

  return (
    <section className='my-20 bg-gradient-to-b from-purple-600 to-red-500 py-16 rounded-lg'>
      <h2 className='text-4xl font-bold text-center mb-8 text-white'>OIIAOIIA Tokenomics</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-4'>
        {tokenomicsData.map((item, index) => (
          <motion.div 
            key={index}
            className='bg-white rounded-lg p-6 text-center shadow-lg'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className='text-4xl mb-2'>{item.icon}</div>
            <h3 className='text-2xl font-bold mb-2'>{item.value}</h3>
            <p className='text-gray-600'>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;
