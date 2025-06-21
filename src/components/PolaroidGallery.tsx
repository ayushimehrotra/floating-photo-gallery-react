
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
    const timer = setTimeout(() => setIsLoaded(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute bg-white p-3 shadow-2xl transform transition-all duration-1000 hover:scale-110 hover:z-20 cursor-pointer hover:shadow-3xl ${animationClass} ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transform: `rotate(${rotation}deg)`,
        left: position.left,
        top: position.top,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="w-40 h-48 lg:w-48 lg:h-56 bg-gray-100 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-32 lg:h-40 object-cover"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="h-8 lg:h-12 bg-white flex items-center justify-center">
          <div className="w-4/5 h-0.5 bg-gray-200"></div>
        </div>
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
      animationClass: "animate-float",
    },
    {
      src: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop`,
      alt: "Technology",
      rotation: 8,
      delay: 1,
      position: { left: "35%", top: "45%" },
      animationClass: "animate-float-delayed",
    },
    {
      src: `https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop`,
      alt: "Research",
      rotation: -5,
      delay: 1.5,
      position: { left: "10%", top: "65%" },
      animationClass: "animate-float",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-0"></div>
      
      {/* Floating Polaroids */}
      {polaroids.map((polaroid, index) => (
        <Polaroid key={index} {...polaroid} />
      ))}
    </div>
  );
};
