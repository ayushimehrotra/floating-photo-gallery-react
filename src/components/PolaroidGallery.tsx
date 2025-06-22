
import { useState, useEffect } from "react";

interface PolaroidProps {
  src: string;
  alt: string;
  rotation: number;
  delay: number;
  position: { left: string; top: string };
  animationClass: string;
}

const Polaroid = ({ src, alt, rotation, delay, position, animationClass }: PolaroidProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay * 2000);
    return () => clearTimeout(timer);
  }, [delay]);

 const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generateSparkles = () =>
      Array.from({ length: 5 }).map(() => ({
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
      }));

    setSparkles(generateSparkles());

    const interval = setInterval(() => {
      setSparkles(generateSparkles());
    }, 1500); // update every 1.5s

    return () => clearInterval(interval);
  }, []);



  return (
    <div
      className={`absolute bg-white p-3 shadow-2xl transform transition-all duration-1000 hover:scale-110 hover:z-20 cursor-pointer rounded-md ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transform: `rotate(${rotation}deg)`,
        left: position.left,
        top: position.top,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-60 lg:w-60 lg:h-72 bg-gray-100 overflow-hidden rounded-md">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-md"
          onLoad={() => setIsLoaded(true)}
        />

        {sparkles.map((pos, i) => (
          <span
            key={`${pos.top}-${pos.left}-${i}`}
            className="sparkle-star"
            style={{
              position: 'absolute',
              top: pos.top,
              left: pos.left,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'white',
              opacity: 0.9,
              animation: 'twinkle 1.2s ease-in-out infinite',
            }}
          />
        ))}
      </div>


    </div>


  );
};

export const PolaroidGallery = () => {
  const polaroids = [
    {
      src: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop`,
      alt: "Workspace",
      rotation: -12,
      delay: 0.5,
      position: { left: "15%", top: "20%" },
      animationClass: "",
    },
    {
      src: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop`,
      alt: "Technology",
      rotation: 8,
      delay: 1,
      position: { left: "35%", top: "45%" },
      animationClass: "",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-visible">
      
      {/* Floating Polaroids */}
      {polaroids.map((polaroid, index) => (
        <Polaroid key={index} {...polaroid} />
      ))}
    </div>
  );
};
