import React from 'react';
import BuyButton from './BuyButton';

const BuySection: React.FC = () => {
  return (
    <section className='my-20 text-center bg-gradient-to-r from-purple-600 to-red-500 py-16 rounded-lg'>
      <h2 className='text-4xl font-bold mb-8 text-white'>
        Join the OIIAOIIA Revolution!
      </h2>
      <p className='text-xl mb-8 text-white'>
        Don't miss out on the most hilarious token in the cryptoverse!
      </p>
      <BuyButton />
      <p className='mt-4 text-sm text-white'>
        1 OIIAOIIA = $0.002 | Next price: $0.0025
      </p>
      <div className='mt-8'>
        <h3 className='text-2xl font-bold mb-4 text-white'>
          How to use OIIAOIIA tokens:
        </h3>
        <ul className='text-lg text-white list-disc list-inside text-center'>
          <li>Create and share OIIAOIIA memes</li>
          <li>Vote on community meme contests</li>
          <li>Access exclusive OIIAOIIA content and merchandise</li>
          <li>Participate in governance decisions</li>
        </ul>
      </div>
    </section>
  );
};

export default BuySection;
