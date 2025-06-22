
export const HeroSection = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="space-y-8">
        <h1 className="text-6xl lg:text-6xl font-light font-script tracking-wide">
          Hi, I'm{" "}
          <span className="font-bold font-script">Ayushi Mehrotra</span>
        </h1>
        
        <div className="space-y-2 text-xl font-sans lg:text-2xl text-gray-300 font-light">
          <p>
            <span>undergrad @ caltech</span> |{" "}
            <span className="text-blue-400">ai security researcher</span> |{" "}
            <span className="text-yellow-400">building social projects</span>
          </p>
        </div>
      </div>
    </div>
  );
};
