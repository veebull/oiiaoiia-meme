import React from 'react';

const MemeVideo: React.FC = () => {
  return (
    <section className='my-20'>
      <h2 className='text-4xl font-bold text-center mb-8'>
        Experience the OIIAOIIA Madness
      </h2>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          src='https://www.youtube.com/embed/dQw4w9WgXcQ'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='rounded-lg shadow-lg relative z-20'
        ></iframe>
      </div>
    </section>
  );
};

export default MemeVideo;
