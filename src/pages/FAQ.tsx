import React from 'react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: 'What is OIIAOIIA?',
    answer:
      "OIIAOIIA is a meme-inspired cryptocurrency token based on the viral 'OO EE A E A' meme. It combines the fun of internet culture with the potential of decentralized finance.",
  },
  {
    question: 'How can I buy OIIAOIIA tokens?',
    answer:
      "You can buy OIIAOIIA tokens on supported decentralized exchanges using ETH or other compatible cryptocurrencies. Always ensure you're using the official contract address.",
  },
  {
    question: 'Is OIIAOIIA a safe investment?',
    answer:
      'As with all cryptocurrencies, investing in OIIAOIIA carries risks. Always do your own research and never invest more than you can afford to lose.',
  },
  {
    question: 'What makes OIIAOIIA unique?',
    answer:
      'OIIAOIIA combines meme culture with real utility, offering features like community governance, meme contests, and exclusive NFTs.',
  },
  {
    question: 'How can I participate in the OIIAOIIA community?',
    answer:
      'Join our official Telegram, Discord, and Twitter channels to engage with the community, participate in meme contests, and stay updated on the latest news.',
  },
];

const FAQ: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='container mx-auto px-4 py-8'
    >
      <h1 className='text-4xl font-bold mb-6'>Frequently Asked Questions</h1>
      <div className='space-y-6'>
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='bg-gray-100 rounded-lg shadow-md p-6'
          >
            <h2 className='text-xl font-semibold mb-2'>{item.question}</h2>
            <p>{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
