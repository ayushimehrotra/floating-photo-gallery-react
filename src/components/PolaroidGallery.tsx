import { useState, useEffect } from "react";

interface PolaroidProps {
  src: string;
  alt: string;
  rotation: number;
  delay: number;
  position: { left: string; top: string };
  isActive: boolean;
  onClick: () => void;
}

const Polaroid = ({
  src,
  alt,
  rotation,
  delay,
  position,
  isActive,
  onClick,
}: PolaroidProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparkles, setSparkles] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay * 2000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const generateSparkles = () =>
      Array.from({ length: 5 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }));

    setSparkles(generateSparkles());

    const interval = setInterval(() => {
      setSparkles(generateSparkles());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute bg-white p-3 shadow-2xl rounded-md cursor-pointer transition-all duration-700 ease-in-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isActive ? "scale-110 z-30" : "scale-100 z-10"}
      `}
      style={{
        transform: `rotate(${rotation}deg)`,
        left: position.left,
        top: position.top,
      }}
      onClick={onClick}
    >
      <div className="relative w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-60 lg:w-72 lg:h-80 bg-gray-100 overflow-hidden rounded-md">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-top object-cover rounded-md transition-transform duration-700"
          onLoad={() => setIsLoaded(true)}
        />
        {sparkles.map((pos, i) => (
          <span
            key={`${pos.top}-${pos.left}-${i}`}
            className="sparkle-star"
            style={{
              top: pos.top,
              left: pos.left,
              animationDelay: `${Math.random() * 1.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const PolaroidGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePolaroidClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle on/off
  };

  const polaroids = [
    {
      src: `/photos/photo-1.JPG`,
      alt: "ayushi's picture 1",
      rotation: -12,
      delay: 0.5,
      position: { left: "30%", top: "20%" },
    },
    {
      src: `/photos/photo-2.JPG`,
      alt: "ayushi's picture 2",
      rotation: 8,
      delay: 1,
      position: { left: "35%", top: "45%" },
    },
    {
      src: `/photos/photo-3.JPG`,
      alt: "ayushi's picture 3",
      rotation: -4,
      delay: 0.5,
      position: { left: "40%", top: "60%" },
    },
  ];

  return (
    <div className="relative w-full h-full overflow-visible">
      {polaroids.map((polaroid, index) => (
        <Polaroid
          key={index}
          {...polaroid}
          isActive={activeIndex === index}
          onClick={() => handlePolaroidClick(index)}
        />
      ))}
    </div>
  );
};
