import React from 'react';
import { Twitter, MessageCircle, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-secondary text-secondary-foreground py-4'>
      <div className='container mx-auto flex justify-center space-x-4'>
        <a
          href='https://twitter.com/oiiaoiia'
          className='text-2xl hover:text-accent'
        >
          <Twitter size={24} />
        </a>
        <a
          href='https://discord.gg/oiiaoiia'
          className='text-2xl hover:text-accent'
        >
          <MessageCircle size={24} />
        </a>
        <a href='https://t.me/oiiaoiia' className='text-2xl hover:text-accent'>
          <Send size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
