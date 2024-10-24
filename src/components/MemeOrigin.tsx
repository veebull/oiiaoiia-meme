import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const MemeOrigin: React.FC = () => {
  return (
    <section className='my-20'>
      <h2 className='text-4xl font-bold text-center mb-8'>
        The OIIAOIIA Meme Origin
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card>
          <CardHeader>
            <CardTitle>The Original Video</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='aspect-w-16 aspect-h-9 mb-4'>
              <iframe
                src='https://www.youtube.com/embed/g0YHb6OSJ6g'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='rounded-lg shadow-lg relative z-20'
              ></iframe>
            </div>
            <p>
              The OIIAOIIA meme, also known as "OO EE A E A Remix," originated
              from this video featuring a person making unusual vocalizations.
              The video gained popularity on TikTok and other social media
              platforms.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>The Viral Remix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='aspect-w-16 aspect-h-9 mb-4'>
              <iframe
                src='https://www.youtube.com/embed/B8VR5mQcgjI'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='rounded-lg shadow-lg relative z-20'
              ></iframe>
            </div>
            <p>
              This remix of the original video went viral, with users creating
              countless parodies and remixes. The catchphrase "OO EE A E A"
              became widely recognized and has been used in various contexts,
              often to express confusion or surprise.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MemeOrigin;
