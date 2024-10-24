import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CommunityContribution: React.FC = () => {
  const contributions = [
    {
      title: 'Meme-Powered Governance',
      description:
        'Vote on important decisions using OIIAOIIA-themed memes. The more creative and funny, the more weight your vote carries!',
    },
    {
      title: 'Confusion-to-Clarity Index',
      description:
        "Track market sentiment with our 'OO EE A E A' index. When everyone's confused, it's time to buy!",
    },
    {
      title: 'Meme Mining',
      description:
        'Earn OIIAOIIA tokens by creating and sharing the best OIIAOIIA-inspired memes. The community decides the winners!',
    },
    {
      title: 'OIIAOIIA Trading Signals',
      description:
        "Receive trading signals based on the frequency of 'OO EE A E A' mentions across social media platforms.",
    },
  ];

  return (
    <section className='my-20 '>
      <h2 className='text-4xl font-bold text-center mb-8'>
        Community Contributions
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {contributions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className='contribution-card'>
              <CardHeader>
                <CardTitle className='contribution-card-title'>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='contribution-card-content'>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommunityContribution;
