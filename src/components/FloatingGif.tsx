import React, { useEffect, useRef, useState, useCallback } from 'react';

const FloatingGif: React.FC = () => {
  const [gifs, setGifs] = useState([
    {
      id: 0,
      x: 0,
      y: 0,
      size: 150,
      dx: 1,
      dy: 1,
      speed: 5,
      startTime: 0,
      timeSpeed: 1,
    },
  ]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const animationFrameRef = useRef<number>();

  const moveGifRandomly = useCallback(
    (gif: {
      id: number;
      x: number;
      y: number;
      size: number;
      dx: number;
      dy: number;
      speed: number;
      startTime: number;
      timeSpeed: number;
    }) => {
      const gifWidth = gif.size;
      const gifHeight = gif.size;
      let xPosition = gif.x + gif.dx * gif.speed;
      let yPosition = gif.y + gif.dy * gif.speed;

      // Bounce off the walls
      if (xPosition < 0 || xPosition > window.innerWidth - gifWidth) {
        gif.dx *= -1;
        xPosition = Math.max(
          0,
          Math.min(xPosition, window.innerWidth - gifWidth)
        );
      }
      if (yPosition < 0 || yPosition > window.innerHeight - gifHeight) {
        gif.dy *= -1;
        yPosition = Math.max(
          0,
          Math.min(yPosition, window.innerHeight - gifHeight)
        );
      }

      return { ...gif, x: xPosition, y: yPosition };
    },
    []
  );

  const updateGifs = useCallback(() => {
    setGifs((prevGifs) => prevGifs.map(moveGifRandomly));
    animationFrameRef.current = requestAnimationFrame(updateGifs);
  }, [moveGifRandomly]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(updateGifs);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateGifs]);

  const toggleAudio = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const addGif = useCallback(() => {
    const size = Math.random() * 100 + 150; // Random size between 150 and 250
    const dx = Math.random() > 0.5 ? 1 : -1; // Random initial direction
    const dy = Math.random() > 0.5 ? 1 : -1;
    const speed = Math.random() * 3 + 2; // Random speed between 2 and 5
    const startTime = Math.random() * 1000; // Random start time between 0 and 1000ms
    const timeSpeed = Math.random() * 1.5 + 0.1; // Random time speed between 0.1 and 1.6
    let x: number;
    let y: number;
    let isOverlapping: boolean;

    do {
      x = Math.random() * (window.innerWidth - size);
      y = Math.random() * (window.innerHeight - size);
      isOverlapping = gifs.some((gif) => {
        const dx = gif.x - x;
        const dy = gif.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (gif.size + size) / 2;
      });
    } while (isOverlapping);

    setGifs((prevGifs) => [
      ...prevGifs,
      { id: prevGifs.length, x, y, size, dx, dy, speed, startTime, timeSpeed },
    ]);
  }, [gifs]);

  const spawnMultipleGifs = useCallback((x: number, y: number) => {
    const numGifs = Math.floor(Math.random() * 3) + 2; // Spawn 2 to 4 GIFs
    for (let i = 0; i < numGifs; i++) {
      const size = Math.random() * 100 + 150;
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 3 + 2;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);
      const startTime = Math.random() * 1000;
      const timeSpeed = Math.random() * 1.5 + 0.1;

      setGifs((prevGifs) => [
        ...prevGifs,
        {
          id: prevGifs.length,
          x,
          y,
          size,
          dx,
          dy,
          speed,
          startTime,
          timeSpeed,
        },
      ]);
    }
  }, []);

  return (
    <div
      className='fixed inset-0 w-screen h-screen z-10'
      onClick={() => {
        addGif();
        toggleAudio();
      }}
    >
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src='/img/360cat-sm.gif'
          alt='Flying Cat'
          className='fixed cursor-pointer '
          style={{
            width: `${gif.size}px`,
            height: `${gif.size}px`,
            zIndex: 1000,
            transform: `translate(${gif.x}px, ${gif.y}px)`,
            transition: 'transform 0.05s linear',
            animationDuration: `${1 / gif.timeSpeed}s`,
            animationDelay: `-${gif.startTime}ms`,
          }}
          onClick={(e) => {
            toggleAudio();
            spawnMultipleGifs(gif.x, gif.y);
            e.stopPropagation();
          }}
        />
      ))}
      <audio ref={audioRef} src='/audio/360cat.mp3' />
    </div>
  );
};

export default FloatingGif;
