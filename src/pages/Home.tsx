import React from 'react';
import MemeHistory from '../components/MemeHistory';
import Tokenomics from '../components/Tokenomics';
import BuyButton from '../components/BuyButton';

const Home: React.FC = () => {
  return (
    <div className='space-y-12'>
      <h1 className='text-4xl font-bold text-center'>
        Welcome to OIIAOIIA Meme
      </h1>
      <MemeHistory />
      <Tokenomics />
      <div className='text-center'>
        <BuyButton />
      </div>
    </div>
  );
};

export default Home;
