
export const ProjectsSection = () => {
  return (
    <section id="work" className="mt-24 space-y-8">
      <h2 className="text-4xl lg:text-5xl font-light text-yellow-400 underline decoration-2 underline-offset-8">
        work experience
      </h2>
      
      <div className="flex items-start space-x-8">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-normal text-purple-400 underline">
            Crack the Code
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-md">
            Crack the Code is a nonprofit organization that organizes cybersecurity hackathons internationally for high schoolers and college students.
          </p>
        </div>
        
        <div className="bg-purple-400 p-6 rounded-lg">
          <div className="w-48 h-32 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">CRACK THE</div>
              <div className="text-4xl font-bold text-black">CODE</div>
              <div className="flex justify-center space-x-1 mt-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
