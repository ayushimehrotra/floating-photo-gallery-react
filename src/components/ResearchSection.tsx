export const ResearchSection = () => {
  return (
    <section
      id="research"
      className="mt-24 px-4 sm:px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-4xl lg:text-5xl font-script font-light text-blue-300 underline decoration-2 underline-offset-8">
          research.
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 font-sans font-light leading-relaxed">
          currently, i'm interested in exploring ai security in llms and engineering novel interpretability methods to understand machine learning models. 
          i'm also dipping my toes into social choice, mechanism design, and causality. most importantly, i'm drawn to areas which intersect the human value of <em>trust</em> and <em>mathematics</em>.
        </p>
      </div>

      {/* Recent Works */}
      <div className="bg-blue-200/10 border border-blue-300/10 shadow-md rounded-2xl backdrop-blur-sm transition hover:shadow-lg px-6 sm:px-8 md:px-10 lg:px-14 py-10 space-y-8">
        <h3 className="text-2xl font-semibold text-blue-100 underline underline-offset-4">Recent Works</h3>

        <div className="space-y-8 text-blue-100">
          {/* === Entry 1 === */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-blue-300 underline hover:text-blue-400 transition">Mehrotra, A.</span> & Kurz A. (2025).{" "}
              <strong>Incorporating Patient and Donor Choice in Kidney Exchanges.</strong>
              <em className="block text-sm mt-1">
                American Association for the Advancement of the Sciences Annual Meeting
              </em>
            </p>
            <a href="" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded mt-2">abstract</span>
            </a>
          </div>

          <hr className="border-t border-blue-300/20" />

          {/* === Entry 2 === */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-blue-300 underline hover:text-blue-400 transition">Mehrotra, A.</span>, Bhusal, D., & Rastogi, N. (2024).{" "}
              <strong>Hessian Sets: Uncovering Feature Interactions in Image Classification.</strong>
              <em className="block text-sm mt-1">2nd NeurIPS ATTRIB Workshop</em>
            </p>
            <a href="https://openreview.net/pdf?id=qcDCKlP7Tk" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded mt-2">abstract</span>
            </a>
          </div>

          <hr className="border-t border-blue-300/20" />

          {/* === Entry 3 === */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-blue-300 underline hover:text-blue-400 transition">Mehrotra, A.</span> (2024).{" "}
              <strong>AdvMed: Detecting Adversarial Attacks in Medical Deep Learning Systems.</strong>
              <em className="block text-sm mt-1">International Symposium on Biomedical Imaging (ISBI)</em>
            </p>
            <a href="https://biomedicalimaging.org/2024/isbi24-technical-program/" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded mt-2">abstract</span>
            </a>
          </div>

          <hr className="border-t border-blue-300/20" />

          {/* === Entry 4 === */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed">
              Malladi, B., <span className="text-blue-300 underline hover:text-blue-400 transition">Mehrotra, A.</span>, & Hanchate A. (2024).{" "}
              <strong>SnoozeNet: Causality-Driven Transformers for Sleep Stage Classification.</strong>
              <em className="block text-sm mt-1">MIT Undergraduate Research and Technology Conference</em>
            </p>
            <a href="https://ieeexplore.ieee.org/abstract/document/10937603" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded mt-2">paper</span>
            </a>
          </div>

          <hr className="border-t border-blue-300/20" />

          {/* === Entry 5 === */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-blue-300 underline hover:text-blue-400 transition">Mehrotra, A.</span> (2023).{" "}
              <strong>Trust Management System for Blockchain Organ Donation Framework.</strong>
              <em className="block text-sm mt-1">Women in Cybersecurity Conference</em>
            </p>
            <a href="https://www.wicys.org/wp-content/uploads/2023/06/2023_WiCyS_Program_Final.pdf" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded mt-2">abstract</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
