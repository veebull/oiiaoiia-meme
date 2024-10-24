import React from 'react';
import Hero from '../components/Hero';
import MemeOrigin from '../components/MemeOrigin';
import Tokenomics from '../components/Tokenomics';
import BuySection from '../components/BuySection';
import CommunityContribution from '../components/CommunityContribution';

const Home: React.FC = () => {
  return (
    <div className='space-y-16 font-comic'>
      <Hero />
      <MemeOrigin />
      <CommunityContribution />
      <Tokenomics />
      <BuySection />
    </div>
  );
};

export default Home;
