import React from 'react';
import { Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white bg-opacity-80 backdrop-blur-md py-8 relative z-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0 text-center md:text-left'>
            <h3 className='text-2xl font-bold mb-2'>OIIAOIIA Meme</h3>
            <p className='text-gray-600'>The ultimate crypto meme experience</p>
          </div>
          <div className='flex space-x-6 relative z-20'>
            <a
              href='https://t.me/oiiiaoiia'
              className='text-2xl hover:text-purple-600 transition-colors relative z-20 '
            >
              <Send size={28} />
            </a>
          </div>
        </div>
        <div className='mt-8 text-center text-gray-600'>
          <p>&copy; {new Date().getFullYear()} OIIAOIIA Meme.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
