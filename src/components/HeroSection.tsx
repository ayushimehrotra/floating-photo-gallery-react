
export const HeroSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-5xl lg:text-6xl font-light tracking-wide">
          Hi, I'm{" "}
          <span className="font-normal">Ayushi Mehrotra</span>
        </h1>
        
        <div className="space-y-2 text-xl lg:text-2xl text-gray-300 font-light">
          <p>
            undergrad @ caltech |{" "}
            <span className="text-blue-400">ai security researcher</span> |{" "}
            <span className="text-yellow-400">building social projects</span>
          </p>
        </div>
      </div>
    </div>
  );
};
