import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{ className?: string }> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`bg-white bg-opacity-80 backdrop-blur-md shadow-md ${className}`}
    >
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            src='img/oiiaoiia-logo.png'
            alt='OIIAOIIA Logo'
            className='w-12 h-12 mr-4'
          />
          <Link
            to='/'
            className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600'
          >
            OIIAOIIA Meme
          </Link>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            <li>
              <Link
                to='/'
                className='text-lg font-semibold hover:text-purple-600'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='text-lg font-semibold hover:text-purple-600'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/tokenomics'
                className='text-lg font-semibold hover:text-purple-600'
              >
                Tokenomics
              </Link>
            </li>
            <li>
              <Link
                to='/roadmap'
                className='text-lg font-semibold hover:text-purple-600'
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                className='text-lg font-semibold hover:text-purple-600'
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className='md:hidden bg-white'>
          <ul className='flex flex-col space-y-2 p-4'>
            <li>
              <Link
                to='/'
                className='text-lg font-semibold hover:text-purple-600'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='text-lg font-semibold hover:text-purple-600'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/tokenomics'
                className='text-lg font-semibold hover:text-purple-600'
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </Link>
            </li>
            <li>
              <Link
                to='/roadmap'
                className='text-lg font-semibold hover:text-purple-600'
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                className='text-lg font-semibold hover:text-purple-600'
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
